<template>
  <div id="form-cadastro">
    <b-row>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Primeiro Nome"
          label-for="firstName"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="firstName"
            v-model="form.firstName"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Sobrenome"
          label-for="lastName"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="lastName"
            v-model="form.lastName"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="CPF"
          label-for="cpf"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="cpf"
            v-model="form.cpf"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Data de Nascimento"
          label-for="birthDate"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="birthDate"
            v-model="form.birthDate"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Numero Telefone"
          label-for="number"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="number"
            v-model="form.phones.number"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Tipo de Contato"
          label-for="type"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="type"
            v-model="form.phones.type"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Logradouro"
          label-for="streetName"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="streetName"
            v-model="form.address.streetName"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Bairro"
          label-for="district"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="district"
            v-model="form.address.district"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Número"
          label-for="addressNumber"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="addressNumber"
            v-model="form.address.addressNumber"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Cidade"
          label-for="city"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="city"
            v-model="form.address.city"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="3">
        <b-form-group
          id="fieldset-1"
          label="Estado"
          label-for="state"
          valid-feedback="Obrigado!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="state"
            v-model="form.address.state"
            :state="state"
            trim
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-button @click="setDataForm(form)"> Confirmar Dados </b-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    state() {
      return this.form.firstName.length >= 2;
    },
    invalidFeedbackFirstName() {
      if (this.firstName.length > 0) {
        return "O campo deve ter pelo menos 2 letras.";
      }
      return "Essa informação não pode ficar vazia.";
    },
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        cpf: "",
        birthDate: "",
        phones: [
          {
            type: "",
            number: "",
          },
        ],
        address: [
          {
            streetName: "",
            district: "",
            addressNumber: "",
            city: "",
            state: "",
          },
        ],
      },
    };
  },
  methods: {
    ...mapActions({ setDataForm: "cadastro/setDataForm" }),
  },
};
</script>

<style></style>
