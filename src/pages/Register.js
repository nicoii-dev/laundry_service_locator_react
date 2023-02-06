import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Card, Link, Container, Typography } from "@mui/material";
// hooks
import useResponsive from "../lib/hooks/useResponsive";
// components
import Page from "../components/Page";
import DialogModal, { useDialog } from "../components/DialogModal";
// sections
import RegisterForm from "../components/sections/auth/register/RegisterForm";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const HeaderStyle = styled("header")(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  position: "absolute",
  padding: theme.spacing(3),
  justifyContent: "space-between",
  [theme.breakpoints.up("md")]: {
    alignItems: "flex-start",
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(-10, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Register() {
  const smUp = useResponsive("up", "sm");
  const mdUp = useResponsive("up", "md");

  const [open, openDialog, dialogProps, setOpen] = useDialog();

  return (
    <Page title="Register">
      <RootStyle>
        <HeaderStyle></HeaderStyle>

        {mdUp && (
          <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Manage your laundry more effectively with Laundry Service Locator
            </Typography>
            <img
              alt="register"
              src="/static/laundry-shop.png"
              style={{ height: 300, width: 300, alignSelf: "center" }}
            />
          </SectionStyle>
        )}

        <Container>
          <ContentStyle>
            <Typography variant="h4" gutterBottom>
              Get started absolutely free.
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}></Typography>

            {/* <AuthSocial /> */}

            <RegisterForm />

            {smUp && (
              <Typography variant="body2" sx={{ mt: 3, alignSelf: "end" }}>
                Already have an account? {""}
                <Link variant="subtitle2" component={RouterLink} to="/login">
                  Login
                </Link>
              </Typography>
            )}

            {!smUp && (
              <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
                Already have an account?{" "}
                <Link variant="subtitle2" to="/login" component={RouterLink}>
                  Login
                </Link>
              </Typography>
            )}
          </ContentStyle>
        </Container>
      </RootStyle>

      {/* <DialogModal
        {...dialogProps}
        title={"Payment"}
        styles={{
          div: { textAlign: "center" },
          title: { fontSize: 30 },
          subtitle: { fontSize: 24, fontWeight: "bold" },
        }}
        width="lg"
      >
        <Divider sx={{ borderStyle: "dashed", marginBottom: 2 }} />
        {clientSecret && (
          <Payment
            cs={clientSecret}
            invoiceId={invoiceId}
            planData={planData}
          />
        )}
      </DialogModal> */}
    </Page>
  );
}
