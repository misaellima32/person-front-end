export default [
  {
    path: "/gerenciamento",
    name: "Gerenciamento",
    component: () =>
      import(
        /* webpackChunkName: "gerenciamento" */ "../../views/Gerenciamento.vue"
      ),
  },
];
