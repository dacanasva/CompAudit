// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import AuditPhotos from "layouts/auditPhotos/data/auditPhotoEvidence";

function loadAuditPhotosPOS() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Evidencias de Auditoría por Punto de Venta
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <AuditPhotos />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>{" "}
    </DashboardLayout>
  );
}

export default loadAuditPhotosPOS;
