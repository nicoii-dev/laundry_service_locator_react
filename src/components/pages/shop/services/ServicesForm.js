import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
// form
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, IconButton, InputAdornment, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// components
import { FormProvider, RHFTextField } from "../../../../components/hook-form";
import { ShopRegistrationSchema } from "../../../../lib/yup-schema/ShopRegistrationSchema";
// api
import servicesApi from "../../../../lib/services/servicesApi";
// ----------------------------------------------------------------------

export default function ServicesForm(_props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createServices, viewServices, updateServices, deleteServices } =
    servicesApi;
  const { address } = useSelector((store) => store.address);
  console.log(address);

  const defaultValues = {
    shopName: "",
    buildingNumber: "",
    street: "",
    barangay: "",
    formattedAddress: "",
    zipcode: "",
    lat: "",
    lng: "",
  };

  const methods = useForm({
    resolver: yupResolver(ShopRegistrationSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    setValue,
  } = methods;

  useEffect(() => {
    setValue("street", address?.street);
    setValue("formattedAddress", address?.formattedAddress);
    setValue("lat", address?.location?.lat);
    setValue("lng", address?.location?.lng);
  }, [address, setValue]);

  const { mutate: create, isLoading: createShopLoading } = useMutation(
    (payload) => createServices(payload),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["get-all-shop-services"]);
        toast.success("Laundry Service successfully created.");
        _props.handleClose();
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const onSubmit = async (data) => {
    const payload = {
      shop_name: data.shopName,
      building_number: data.buildingNumber,
      street: data.street,
      barangay: data.barangay,
      zipcode: data.zipcode,
      formatted_address: address.formattedAddress,
      // city: "",
      // province: "",
      location: JSON.stringify({
        lat: address.location.lat,
        lng: address.location.lng,
      }),
    };
    create(payload);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <RHFTextField name="service_nm" label="Building number" />
        <RHFTextField name="street" label="Street" />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            width: "50%",
            alignContent: "end",
            alignSelf: "end",
            padding: 2,
          }}
          spacing={2}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ width: "50%" }}
            onClick={() => {
              _props.handleClose();
            }}
          >
            Close
          </Button>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={createShopLoading}
            sx={{ marginRight: 2 }}
          >
            Create
          </LoadingButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
