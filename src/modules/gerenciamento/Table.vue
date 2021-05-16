<template>
  <div id="gerenciamento-table">
    <b-table
      :fields="columns"
      :items="people"
      responsive="sm"
      small
      striped
      bordered
      class="mt-2"
    >
      <template #cell(fullName)="data">
        {{ `${data.item.firstName} ${data.item.lastName}` }}
      </template>

      <template #cell(actions)="row">
        <b-dropdown
          id="dropdown-1"
          variant="outline-success"
          size="sm"
          text="Ações"
          @show="getDataRow(row)"
        >
          <b-dropdown-item v-b-modal.details @click="getDataRow(row)"
            >Detalhar
          </b-dropdown-item>
          <b-dropdown-item>Excluir</b-dropdown-item>
          <b-dropdown-item>Editar</b-dropdown-item>
        </b-dropdown>
      </template>
    </b-table>
    <Details :personSelected="rowSelected" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { formatDate } from "@/@core/utils/filters";
import Details from "./Details.vue";

export default {
  data() {
    return {
      columns: [
        {
          label: "Ações",
          key: "actions",
          class: "text-center",
        },
        {
          label: "Id",
          key: "id",
          class: "text-center",
        },
        {
          label: "Nome",
          key: "fullName",
          class: "text-center",
        },
        {
          label: "CPF",
          key: "cpf",
          class: "text-center",
        },
        {
          label: "Data de Nascimento",
          key: "birthDate",
          class: "text-center",
          formatter: "formatDate",
        },
      ],

      rowSelected: {},
    };
  },
  components: {
    Details,
  },
  computed: {
    ...mapGetters({ people: "gerenciamento/getPeople" }),
  },
  created() {
    this.setPeople();
  },
  methods: {
    formatDate,
    ...mapActions({ setPeople: "gerenciamento/setPeople" }),
    getDataRow(row) {
      this.rowSelected = row.item;
    },
  },
};
</script>

<style></style>
