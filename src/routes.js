// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Stores from "layouts/stores";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ReporteAuditoria from "layouts/reportAuditoria";
import LoadAuditPhotos from "layouts/auditPhotos";
import ResetPassword from "layouts/authentication/reset-password";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Listado tiendas",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Stores />,
  },
  {
    type: "collapse",
    name: "Usuarios",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Iniciar sesión",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
    hidden: true,
  },
  {
    type: "collapse",
    name: "registrarse",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
    hidden: true,
  },
  {
    type: "collapse",
    name: "Reporte auditoria",
    key: "reportAuditoria",
    icon: <Icon fontSize="small">assessment</Icon>,
    route: "/reporteAuditoria",
    component: <ReporteAuditoria />,
  },
  {
    type: "collapse",
    name: "Evidencia auditoria", // ← Nombre visible en el menú lateral
    key: "loadAuditPhotos", // ← Clave única del ítem(tu la colas usarás para identificarlo)
    icon: <Icon fontSize="small">photos</Icon>, // ← Ícono que se muestra
    route: "/loadAuditPhotos", // Nombre de la funcion en el index.js
    component: <LoadAuditPhotos />, // ← Componente que se carga desde la import
  },
  {
    type: "collapse",
    name: "Recuperar contraseña",
    key: "ResetPasswordCover",
    icon: <Icon fontSize="small">password</Icon>,
    route: "/ResetPasswordCover",
    component: <ResetPassword />,
  },
];

export default routes;
