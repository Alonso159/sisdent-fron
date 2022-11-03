const items = [
  {
    divider: "Principal",
    title: "Inicio",
    icon: "mdi-view-dashboard",
    to: "dashboard-management",
  },
  {
    title: "Mis Proyectos",
    icon: "mdi-view-dashboard",
    to: "mis-proyectos",
  },
  {
    divider: "Sistema",
    title: "Usuarios",
    icon: "mdi-view-dashboard",
    children: [
      {
        title: "Gestión de Usuarios",
        to: "usuarios-client",
        icon: "mdi-circle-medium",
      },
    ],
  }
  
];

export {
  items,
 // itemsCliente
}