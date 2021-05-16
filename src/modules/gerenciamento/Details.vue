<template>
  <b-modal
    id="details"
    size="lg"
    title="Detalhar Pessoa"
    ok-title="Fechar"
    ok-only
  >
    <b-container fluid>
      <h6>Informações da Pessoa</h6>
      <div id="person-etails">
        <b-row class="mb-2">
          <b-col class="mb-2" md="6">
            <label for="nome">Nome:</label>
            <b-form-input
              id="nome"
              readonly
              :value="personSelected.firstName"
            />
          </b-col>
          <b-col class="mb-2" md="6">
            <label for="nome">Sobrenome:</label>
            <b-form-input id="nome" readonly :value="personSelected.lastName" />
          </b-col>
          <b-col class="mb-2" md="6">
            <label for="cpf">CPF:</label>
            <b-form-input id="cpf" readonly :value="personSelected.cpf" />
          </b-col>
          <b-col class="mb-2" md="6">
            <label for="birth-date">Data de Nascimento:</label>
            <b-form-input
              id="birth-date"
              readonly
              :value="personSelected.birthDate | formatDate"
            />
          </b-col>
        </b-row>
      </div>
      <hr />
      <h6>Informações de Contato</h6>
      <div
        id="phone-etails"
        v-for="phonePerson in personSelected.phones"
        :key="phonePerson.id"
      >
        <b-row class="mb-2">
          <b-col class="mb-2" md="6">
            <label for="number">Número:</label>
            <b-form-input id="number" readonly :value="phonePerson.number" />
          </b-col>
          <b-col class="mb-2" md="6">
            <label for="type">Tipo de Contato:</label>
            <b-form-input
              id="type"
              readonly
              :value="phonePerson.type | typeNumber"
            />
          </b-col>
        </b-row>
      </div>
      <hr />
      <h6>Informações de Endereço</h6>
      <div
        id="address-etails"
        v-for="addressPerson in personSelected.address"
        :key="addressPerson.id"
      >
        <b-row class="mb-2">
          <b-col class="mb-2" md="4">
            <label for="street-name">Logradouro:</label>
            <b-form-input
              id="street-name"
              readonly
              :value="addressPerson.streetName"
            />
          </b-col>
          <b-col class="mb-2" md="4">
            <label for="address-number">Número:</label>
            <b-form-input
              id="address-number"
              readonly
              :value="addressPerson.addressNumber"
            />
          </b-col>
          <b-col class="mb-2" md="4">
            <label for="disctrict">Bairo:</label>
            <b-form-input
              id="disctrict"
              readonly
              :value="addressPerson.district"
            />
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col class="mb-2" md="6">
            <label for="city">Cidade:</label>
            <b-form-input id="city" readonly :value="addressPerson.city" />
          </b-col>
          <b-col class="mb-2" md="6">
            <label for="state">Estado:</label>
            <b-form-input id="state" readonly :value="addressPerson.state" />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </b-modal>
</template>

<script>
import { formatDate, typeNumber } from "@/@core/utils/filters";

export default {
  filters: {
    formatDate,
    typeNumber,
  },
  props: {
    personSelected: {
      type: Object,
      required: true,
    },
  },
};
</script>
