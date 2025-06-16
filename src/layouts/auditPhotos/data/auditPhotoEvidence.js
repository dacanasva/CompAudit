import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Stack,
} from "@mui/material";

// Función para obtener tiendas desde la API
const obtenerTiendas = async () => {
  try {
    const respuesta = await fetch("https://tudominio.com/api/tiendas"); // Reemplaza con tu URL real
    if (!respuesta.ok) throw new Error("Error al obtener tiendas");
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// Función para obtener evidencias por tienda desde la API
const obtenerEvidenciasPorTienda = async (tiendaId) => {
  try {
    const respuesta = await fetch(`https://tudominio.com/api/evidencias/${tiendaId}`); // Reemplaza con tu URL real
    if (!respuesta.ok) throw new Error("Error al obtener evidencias");
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

function AuditPhotos() {
  const [tiendaSeleccionada, setTiendaSeleccionada] = useState("");
  const [tiendas, setTiendas] = useState([]);
  const [evidencias, setEvidencias] = useState([]);
  const [cargandoTiendas, setCargandoTiendas] = useState(true);
  const [cargandoEvidencias, setCargandoEvidencias] = useState(false);

  // Cargar tiendas al iniciar
  useEffect(() => {
    const cargarTiendas = async () => {
      setCargandoTiendas(true);
      const tiendasAPI = await obtenerTiendas();
      setTiendas(tiendasAPI);
      setCargandoTiendas(false);
    };
    cargarTiendas();
  }, []);

  // Cargar evidencias al cambiar la tienda
  useEffect(() => {
    const cargarEvidencias = async () => {
      if (tiendaSeleccionada) {
        setCargandoEvidencias(true);
        const evidenciasAPI = await obtenerEvidenciasPorTienda(tiendaSeleccionada);
        setEvidencias(evidenciasAPI);
        setCargandoEvidencias(false);
      } else {
        setEvidencias([]);
      }
    };
    cargarEvidencias();
  }, [tiendaSeleccionada]);

  return (
    <Box p={3}>
      {cargandoTiendas ? (
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <CircularProgress size={24} />
          <Typography variant="body1">Cargando tiendas línea estética...</Typography>
        </Stack>
      ) : (
        <FormControl fullWidth sx={{ mb: 4 }} variant="outlined">
          <InputLabel id="select-tienda-label">Seleccionar Tienda</InputLabel>
          <Select
            labelId="select-tienda-label"
            id="select-tienda"
            value={tiendaSeleccionada}
            label="Seleccionar Tienda"
            onChange={(e) => setTiendaSeleccionada(e.target.value)}
            sx={{ height: 56 }} // Ajusta esta altura si deseas más o menos
          >
            {tiendas.map((tienda) => (
              <MenuItem key={tienda.id} value={tienda.id}>
                {tienda.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {cargandoEvidencias ? (
        <Stack direction="row" spacing={2} alignItems="center">
          <CircularProgress size={24} />
          <Typography variant="body1">Cargando evidencias...</Typography>
        </Stack>
      ) : evidencias.length > 0 ? (
        <Grid container spacing={3}>
          {evidencias.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.url}
                  alt={`Evidencia ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="body1">{item.descripcion}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        tiendaSeleccionada && (
          <Typography>No hay evidencias disponibles para esta tienda.</Typography>
        )
      )}
    </Box>
  );
}

export default AuditPhotos;
