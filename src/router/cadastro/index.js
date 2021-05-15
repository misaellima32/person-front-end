export default [
  {
    path: "/cadastro",
    name: "Cadastro",
    component: () =>
      import(/* webpackChunkName: "cadastro" */ "../../views/Cadastro.vue"),
  },
];
