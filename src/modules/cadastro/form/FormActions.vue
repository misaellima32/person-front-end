<template>
  <div id="actions-form">
    <b-button variant="outline-success" class="mr-2" @click="savePerson()">
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
    clearForm() {
      this.setDataForm({});
    },
  },
};
</script>

<style></style>
