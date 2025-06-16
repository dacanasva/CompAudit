// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Cover() {
  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
          sx={{ backgroundColor: "#9165cc" }} // 🔁 color personalizado
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Restablecer contraseña
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Recibirás un correo electrónico en un máximo de 60 segundos.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={4}>
              <MDInput type="email" label="Correo electronico" variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton
                variant="gradient"
                fullWidth
                sx={{
                  backgroundColor: "#9165cc",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#7a51b3", // tono más oscuro al pasar el mouse
                  },
                }}
              >
                Restablecer contraseña
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
