<template>
  <div id="actions-form">
    <b-button @click="savePerson()"> Salvar </b-button>
    <b-button @click="setDataForm({})">Limpar</b-button>
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
  },
};
</script>

<style></style>
