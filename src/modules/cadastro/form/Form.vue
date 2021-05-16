<template>
  <div id="form-cadastro">
    <h1>Cadastrar Pessoa</h1>
    <hr />
    <h4>Dados Pessoais</h4>
    <b-row>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Primeiro Nome"
          label-for="firstName"
          :invalid-feedback="invalidFeedbackCharacters(form.firstName, 2)"
          :state="state(form.firstName, 2)"
        >
          <b-form-input
            id="firstName"
            v-model="form.firstName"
            :state="state(form.firstName, 2)"
            trim
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Sobrenome"
          label-for="lastName"
          :invalid-feedback="invalidFeedbackCharacters(form.lastName, 2)"
          :state="state(form.lastName, 2)"
        >
          <b-form-input
            id="lastName"
            v-model="form.lastName"
            :state="state(form.lastName, 2)"
            trim
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="CPF"
          label-for="cpf"
          :invalid-feedback="invalidFeedbackCharacters(form.cpf, 11)"
          :state="state(form.cpf, 11)"
        >
          <b-form-input
            id="cpf"
            v-mask="'###########'"
            type="text"
            v-model="form.cpf"
            :state="state(form.cpf, 11)"
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Data de Nascimento"
          label-for="birthDate"
        >
          <b-form-datepicker
            id="birthDate"
            locale="pt-br"
            :date-format-options="{
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            }"
            :value-as-date="null"
            labelNoDateSelected="Selecione a data"
            v-model="form.birthDate"
            :state="state(form.birthDate, 1)"
            @input="setDataForm()"
          ></b-form-datepicker>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <h4>Contato</h4>
    <b-row>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Numero Telefone"
          label-for="number"
          :invalid-feedback="
            invalidFeedbackCharacters(form.phones[0].number, 14)
          "
          :state="state(form.phones[0].number, 11)"
        >
          <b-form-input
            id="number"
            v-mask="'(##)#####-####'"
            v-model="form.phones[0].number"
            :state="state(form.phones[0].number, 14)"
            type="text"
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="Tipo de Contato" label-for="type">
          <b-form-select
            id="type"
            v-model="form.phones[0].type"
            :state="state(form.phones[0].type, 1)"
            :options="[
              { text: 'Selecione...', value: null },
              { text: 'Residencial', value: 'HOME' },
              { text: 'Celular', value: 'MOBILE' },
              { text: 'Comercial', value: 'COMMERCIAL' },
            ]"
            :value="null"
            @change="setDataForm()"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <h4>Endereço</h4>
    <b-row>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Logradouro"
          label-for="streetName"
          :state="state(form.address[0].streetName, 2)"
          :invalid-feedback="
            invalidFeedbackCharacters(form.address[0].streetName, 2)
          "
        >
          <b-form-input
            id="streetName"
            :state="state(form.address[0].streetName, 2)"
            v-model="form.address[0].streetName"
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Bairro"
          label-for="district"
          :state="state(form.address[0].district, 2)"
          :invalid-feedback="invalidFeedbackCharacters(2)"
        >
          <b-form-input
            id="district"
            :state="state(form.address[0].district, 2)"
            v-model="form.address[0].district"
            @input="setDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group
          id="fieldset-1"
          label="Número"
          label-for="addressNumber"
          :state="state(form.address[0].addressNumber, 2)"
          :invalid-feedback="
            invalidFeedbackCharacters(form.address[0].addressNumber, 2)
          "
        >
          <b-form-input
            id="addressNumber"
            :state="state(form.address[0].addressNumber, 2)"
            v-model="form.address[0].addressNumber"
            @input="setDataForm(form.address[0].addressNumber, 2)"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group
          id="fieldset-1"
          label="Cidade"
          label-for="city"
          :state="state(form.address[0].city, 2)"
          :invalid-feedback="invalidFeedbackCharacters(form.address[0].city, 2)"
        >
          <b-form-input
            id="city"
            :state="state(form.address[0].city, 2)"
            v-model="form.address[0].city"
            @input="
              setDataForm();
              invalidFeedbackCharacters(2);
            "
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group
          id="fieldset-1"
          label="Estado"
          label-for="state"
          :state="state(form.address[0].state, 2)"
          :invalid-feedback="
            invalidFeedbackCharacters(form.address[0].state, 2)
          "
        >
          <b-form-select
            id="state"
            :state="state(form.address[0].state, 2)"
            v-model="form.address[0].state"
            :options="ufList"
            @change="setDataForm()"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <FormActions />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormActions from "../form/FormActions.vue";
import { invalidFeedbackCharacters, state } from "@/@core/utils/form-validator";

export default {
  components: {
    FormActions,
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
            number: "",
            type: "",
          },
        ],
        address: [
          {
            streetName: "",
            addressNumber: "",
            district: "",
            city: "",
            state: "",
          },
        ],
      },
      ufList: [
        { text: "Acre", value: "AC" },
        { text: "Alagoas", value: "AL" },
        { text: "Amapá", value: "AP" },
        { text: "Amazonas", value: "AM" },
        { text: "Bahia", value: "BA" },
        { text: "Ceará", value: "CE" },
        { text: "Distrito Federal", value: "DF" },
        { text: "Espírito Santo", value: "ES" },
        { text: "Goiás", value: "GO" },
        { text: "Maranhão", value: "MA" },
        { text: "Mato Grosso", value: "MT" },
        { text: "Mato Grosso do Sul", value: "MS" },
        { text: "Minas Gerais", value: "MG" },
        { text: "Pará", value: "PA" },
        { text: "Paraíba", value: "PB" },
        { text: "Paraná", value: "PR" },
        { text: "Pernambuco", value: "PE" },
        { text: "Piauí", value: "PI" },
        { text: "Rio de Janeiro", value: "RJ" },
        { text: "Rio Grande do Norte", value: "RN" },
        { text: "Rio Grande do Sul", value: "RS" },
        { text: "Rondônia", value: "RO" },
        { text: "Roraima", value: "RR" },
        { text: "Santa Catarina", value: "SC" },
        { text: "São Paulo", value: "SP" },
        { text: "Sergipe", value: "SE" },
        { text: "Tocantins", value: "TO" },
      ],
    };
  },
  created() {
    this.setDataForm({});
  },
  methods: {
    invalidFeedbackCharacters,
    state,
    ...mapActions({ setDataForm: "cadastro/setDataForm" }),
  },
};
</script>

<style></style>
