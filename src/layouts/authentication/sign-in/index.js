import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

import brandWhite from "assets/images/logo-CompAudit2.png";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          borderRadius="lg"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
          sx={{
            backgroundColor: "#9165cc",
            boxShadow: "0px 4px 20px rgba(145, 101, 204, 0.5)", // efecto similar a coloredShadow="info"
          }}
        >
          <img src={brandWhite} alt="Logo CompuAudit" style={{ height: 130 }} />
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" label="Correo electronico" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Contraseña" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Acuérdate de mí
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
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
                iniciar sesión
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                ¿Olvidaste tu contraseña?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/reset-password"
                  variant="button"
                  fontWeight="medium"
                  textGradient
                  sx={{
                    color: "#7a51b3",
                  }}
                >
                  Recuperar
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
