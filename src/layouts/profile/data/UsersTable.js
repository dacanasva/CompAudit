import { useEffect, useState } from "react";
import axios from "axios";

// Material Dashboard components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Tabla
import DataTable from "examples/Tables/DataTable";

function UsersTable() {
  const [columns] = useState([
    { Header: "Usuario", accessor: "usuario", align: "left" },
    { Header: "Correo", accessor: "correo", align: "left" },
    { Header: "Contraseña", accessor: "contrasena", align: "left" },
    { Header: "Acciones", accessor: "acciones", align: "center" },
  ]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Coloca la URL de la API
    axios.get("").then((response) => {
      const data = response.data;

      const usuariosFormateados = data.map((usuario) => ({
        usuario: (
          <MDTypography variant="caption" fontWeight="medium">
            {usuario.nombre}
          </MDTypography>
        ),
        correo: (
          <MDTypography variant="caption" color="text">
            {usuario.correo}
          </MDTypography>
        ),
        contrasena: (
          <MDTypography variant="caption" color="text">
            ********
          </MDTypography>
        ),
        acciones: (
          <MDBox display="flex" justifyContent="center" gap={1}>
            <Tooltip title="Editar" arrow>
              <MDTypography
                component="a"
                href="#"
                color="info"
                variant="caption"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Icon fontSize="small">edit</Icon>
              </MDTypography>
            </Tooltip>
            <Tooltip title="Eliminar" arrow>
              <MDTypography
                component="a"
                href="#"
                color="error"
                variant="caption"
                sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
              >
                <Icon fontSize="small">delete</Icon>
              </MDTypography>
            </Tooltip>
          </MDBox>
        ),
      }));

      setRows(usuariosFormateados);
    });
  }, []);

  return (
    <DataTable
      table={{ columns, rows }}
      isSorted={false}
      entriesPerPage={false}
      showTotalEntries={false}
      noEndBorder
    />
  );
}

export default UsersTable;
