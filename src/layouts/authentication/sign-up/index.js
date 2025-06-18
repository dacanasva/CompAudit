import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function Cover() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //colar la api para envio de formulario
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: usuario,
          email: correo,
          password: contrasena,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Usuario registrado:", data);
        // Aquí puedes redirigir o mostrar un mensaje
      } else {
        console.error("❌ Error al registrar usuario:", await response.text());
      }
    } catch (error) {
      console.error("❌ Error de red:", error);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
        sx={{
          height: "400px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "12px",
        }}
      />
      <MDBox mt={-20} pb={6}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <MDBox
                variant="gradient"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={1}
                textAlign="center"
                sx={{ backgroundColor: "#9165cc" }}
              >
                <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Registrar usuario
                </MDTypography>
                <MDTypography display="block" variant="button" color="white" my={1}>
                  Introduce el email y contraseña para registrarlo
                </MDTypography>
              </MDBox>
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form" onSubmit={handleSubmit}>
                  <MDBox mb={2}>
                    <MDInput
                      type="text"
                      label="Usuario"
                      variant="standard"
                      fullWidth
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="email"
                      label="Correo electrónico"
                      variant="standard"
                      fullWidth
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      type="password"
                      label="Contraseña"
                      variant="standard"
                      fullWidth
                      value={contrasena}
                      onChange={(e) => setContrasena(e.target.value)}
                    />
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton
                      type="submit"
                      variant="gradient"
                      fullWidth
                      sx={{
                        backgroundColor: "#9165cc",
                        color: "#ffffff",
                        "&:hover": {
                          backgroundColor: "#7a51b3",
                        },
                      }}
                    >
                      Iniciar sesión
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Cover;
