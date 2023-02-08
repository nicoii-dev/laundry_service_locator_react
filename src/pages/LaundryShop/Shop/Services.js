import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import {
  Typography,
  Card,
  Box,
  Button,
  CardContent,
  CircularProgress,
  Stack,
  Tooltip,
  Grid,
} from "@mui/material";
import _ from "lodash";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Scrollbar from "../../../components/Scrollbar";
import Iconify from "../../../components/Iconify";
import DialogModal, { useDialog } from "../../../components/DialogModal";
import ServicesForm from "../../../components/pages/shop/services/ServicesForm";
// api
import servicesApi from "../../../lib/services/servicesApi";

function Services(_props) {
  console.log(_props);
  const navigate = useNavigate();
  const [open, openDialog, dialogProps, setOpen, handleClose] = useDialog();
  const { getShopServices } = servicesApi;
  const {
    data: servicesData,
    status: servicesStatus,
    isFetching: servicesIsFetching,
  } = useQuery(
    ["get-all-shop-services"],
    () => getShopServices(_props?.shopData?.id),
    {
      retry: 3, // Will retry failed requests 10 times before displaying an error
    }
  );
    console.log(servicesData)
  return (
    <Card style={{ height: 485, overflow: "auto" }}>
      <CardContent>
        <Typography variant="h6">
          {`${
            _props?.shopData?.shop_name
              ? _props?.shopData?.shop_name?.charAt(0).toUpperCase() +
                _props?.shopData?.shop_name?.slice(1)
              : ""
          } Services List`}
        </Typography>
        <Typography variant="caption">
          Services created will be listed here
        </Typography>
      </CardContent>

      <List dense>
        <Scrollbar>
          {_.isNull(servicesData?.data) ||
          _.isUndefined(servicesData?.data) ||
          _.isEmpty(servicesData?.data) ? (
            <Box
              style={{
                margin: "auto",
                marginTop: 50,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {_props.loading ? (
                <CircularProgress />
              ) : (
                <Card
                  style={{ width: "80%", height: 150, textAlign: "center" }}
                  variant="outlined"
                >
                  <Typography style={{ padding: 15, marginTop: 15, fontSize: 14 }}>
                    You don't have any laundry services yet.
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      openDialog()
                    }}
                  >
                    Add Service
                  </Button>
                </Card>
              )}
            </Box>
          ) : (
            servicesData.data?.map((data, index) => (
              <Tooltip key={index} title={`Manage ${data.name}`}>
                <ListItem>
                  <ListItemButton sx={{}}>
                    <ListItemAvatar>
                      {/* <Avatar alt={`Avatar n°${data + 1}`} sx={{ backgroundColor: data.color }}>
                        <Typography>{data?.name?.charAt(0).toUpperCase()}</Typography>
                      </Avatar> */}
                    </ListItemAvatar>
                    <Grid
                      container
                      justifyContent="space-between"
                      direction="row"
                      spacing={1}
                    >
                      <Grid>
                        <Stack>
                          <Typography variant="subtitle1" sx={{ fontSize: 20 }}>
                            {data.service_name || 'Service name'}
                          </Typography>
                          <Stack direction="row" spacing={1}>
                            <Typography variant="caption" sx={{ fontSize: 16 }}>
                              Price: ₱{data.users_count || "0.00"}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            ))
          )}
        </Scrollbar>
      </List>

      <DialogModal
        {...dialogProps}
        title={"Creating new Laundry Service"}
        styles={{
          div: { textAlign: "center" },
          title: { fontSize: 25 },
          subtitle: { fontSize: 24, fontWeight: "bold" },
        }}
        width="xs"
      >
        <ServicesForm />
      </DialogModal>
    </Card>
  );
}

export default Services;
