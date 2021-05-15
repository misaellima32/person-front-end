export default [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "cadastro" */ "../../views/Home.vue"),
  },
];
