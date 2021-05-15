<template>
  <div id="form-cadastro">
    <h1>Cadastrar Pessoa</h1>
    <hr />
    <span>Dados Pessoais</span>
    <b-row>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Primeiro Nome"
          label-for="firstName"
        >
          <b-form-input
            id="firstName"
            v-model="form.firstName"
            trim
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="Sobrenome" label-for="lastName">
          <b-form-input
            id="lastName"
            v-model="form.lastName"
            trim
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="CPF" label-for="cpf">
          <b-form-input
            id="cpf"
            v-model="form.cpf"
            trim
            @input="debounceSetDataForm()"
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
            @input="debounceSetDataForm()"
          ></b-form-datepicker>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <span>Contato</span>
    <b-row>
      <b-col md="6">
        <b-form-group
          id="fieldset-1"
          label="Numero Telefone"
          label-for="number"
        >
          <b-form-input
            id="number"
            v-model="form.phones[0].number"
            trim
            type="number"
            placeholder="(xx) xxxxx-xxxx"
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="Tipo de Contato" label-for="type">
          <b-form-select
            id="type"
            v-model="form.phones[0].type"
            :options="[
              { text: 'Selecione...', value: null },
              { text: 'Residencial', value: 'HOME' },
              { text: 'Celular', value: 'MOBILE' },
              { text: 'Comercial', value: 'COMMERCIAL' },
            ]"
            :value="null"
            @change="debounceSetDataForm()"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <span>Endereço</span>
    <b-row>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="Logradouro" label-for="streetName">
          <b-form-input
            id="streetName"
            v-model="form.address[0].streetName"
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group id="fieldset-1" label="Bairro" label-for="district">
          <b-form-input
            id="district"
            v-model="form.address[0].district"
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="fieldset-1" label="Número" label-for="addressNumber">
          <b-form-input
            id="addressNumber"
            v-model="form.address[0].addressNumber"
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="fieldset-1" label="Cidade" label-for="city">
          <b-form-input
            id="city"
            v-model="form.address[0].city"
            @input="debounceSetDataForm()"
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group id="fieldset-1" label="Estado" label-for="state">
          <b-form-select
            id="state"
            v-model="form.address[0].state"
            :options="ufList"
            @change="debounceSetDataForm()"
          ></b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <FormActions />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FormActions from "../form/FormActions.vue";

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
    //TODO verificar esse debounce
    ...mapActions({ setDataForm: "cadastro/setDataForm" }),
    debounceSetDataForm() {
      console.log(this.form);
      setTimeout(() => {
        this.setDataForm(this.form), 500;
      });
    },
  },
};
</script>

<style></style>
