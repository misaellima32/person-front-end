<template>
  <div id="filled-data">
    <h1>Dados Fornecidos</h1>
    <span>
      <h3>Dados Pessoais</h3>
    </span>
    <p>Nome: {{ form.firstName + " " + form.lastName }}</p>
    <p>CPF: {{ form.cpf }}</p>
    <p>Data Nascimento: {{ form.birthDate | formatDate }}</p>
    <span>
      <h3>Contato</h3>
    </span>
    <p>Número: {{ form.phones[0].number }}</p>
    <p>Tipo de Contato: {{ form.phones[0].type | typeNumber }}</p>
    <span>
      <h3>Endereço</h3>
    </span>
    <p>Logradouro: {{ form.address[0].streetName }}</p>
    <p>Bairro: {{ form.address[0].district }}</p>
    <p>Numero: {{ form.address[0].addressNumber }}</p>
    <p>
      Cidade/Estado: {{ form.address[0].city + "/" + form.address[0].state }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { formatDate } from "@/utils/filters";

export default {
  filters: {
    formatDate,
    typeNumber(value) {
      if (!value) {
        return;
      } else if (value === "HOME") {
        return "Residencial";
      } else if (value === "MOBILE") {
        return "Celular";
      } else if (value === "COMMERCIAL") {
        return "Comercial";
      }
    },
  },
  computed: {
    ...mapGetters({ form: "cadastro/getDataForm" }),
  },
};
</script>

<style></style>
