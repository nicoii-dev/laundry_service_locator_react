import React from "react";
import Page from "../../components/Page";
import { Container, Typography, Grid, Box } from "@mui/material";
import AppWidgetSummary from '../../components/sections/@dashboard/app/AppWidgetSummary'
import GoogleMapsApi from "../../components/map/GoogleMapsApi";
import GooglePlaces from "../../components/map/GooglePlaces";

function ShopDashboardPage() {
  return (
    <Page title="Shops">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={2.3}>
            <AppWidgetSummary
              title="Weekly Sales"
              total={714000}
              icon={"ant-design:android-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2.3}>
            <AppWidgetSummary
              title="New Users"
              total={1352831}
              color="info"
              icon={"ant-design:apple-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2.3}>
            <AppWidgetSummary
              title="Item Orders"
              total={1723315}
              color="warning"
              icon={"ant-design:windows-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={2.3}>
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.3}>
            <AppWidgetSummary
              title="Bug Reports"
              total={234}
              color="error"
              icon={"ant-design:bug-filled"}
            />
          </Grid>
        </Grid>
        <GooglePlaces />
        <Box sx={{width: '95%', mt: 5}}>
          <GoogleMapsApi />
        </Box>
      </Container>
    </Page>
  );
}

export default ShopDashboardPage;
