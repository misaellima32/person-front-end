<template>
  <div id="actions-form">
    <b-button
      variant="outline-success"
      class="mr-2"
      @click="confirmButtonColor()"
    >
      Salvar
    </b-button>
    <b-button variant="outline-secondary" @click="clearForm()"
      >Limpar
    </b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      savePerson: "cadastro/savePerson",
      setDataForm: "cadastro/setDataForm",
    }),
    confirmButtonColor() {
      this.$swal({
        title: "Você tem certeza?",
        text: "A pessoa será cadastrada.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sim, cadastrar!",
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-outline-danger ml-1",
        },
        buttonsStyling: false,
      }).then((result) => {
        if (result.value) {
          this.savePerson();
          this.$swal({
            icon: "success",
            title: "Cadastrado!",
            text: "O registro já se encontra na base.",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        } else if (result.dismiss === "cancel") {
          this.$swal({
            title: "Operação Cancelada",
            text: "Nenhuma ação foi realizada",
            icon: "error",
            customClass: {
              confirmButton: "btn btn-success",
            },
          });
        }
      });
    },
    clearForm() {
      this.setDataForm({});
    },
  },
};
</script>

<style lang="scss">
@import "~sweetalert2/src/variables";
@import "~sweetalert2/src/sweetalert2";
</style>
