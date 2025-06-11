import { useEffect, useState } from "react";
import axios from "axios";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import MDBadge from "components/MDBadge";

// Tabla de dashboard
import DataTable from "examples/Tables/DataTable";

function StoresTable() {
  const [columns] = useState([
    { Header: "Tienda", accessor: "tienda", width: "45%", align: "left" },
    { Header: "Descargar inventario", accessor: "action", align: "center" },
  ]);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Coloca la URL de la API
    axios.get("").then((response) => {
      const data = response.data;

      const tiendasFormateadas = data.map((tienda) => ({
        tienda: (
          <MDTypography variant="caption" fontWeight="medium" color="text">
            {tienda.nombre}
          </MDTypography>
        ),
        action: (
          <Tooltip title="Descargar inventario" arrow>
            <Icon sx={{ fontSize: "2rem", cursor: "pointer" }}>cloud_download</Icon>
          </Tooltip>
        ),
      }));

      setRows(tiendasFormateadas);
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

export default StoresTable;
