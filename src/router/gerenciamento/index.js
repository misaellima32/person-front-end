export default [
  {
    path: "/gerenciamento",
    name: "Gerenciamento",
    component: () =>
      import(
        /* webpackChunkName: "cadastro" */ "../../views/Gerenciamento.vue"
      ),
  },
];
