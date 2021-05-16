<template>
  <div id="register">
    <b-row>
      <b-col md="12">
        <b-card>
          <Form />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Form from "../modules/cadastro/form/Form.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Form,
  },
  computed: {
    ...mapGetters({ form: "cadastro/getDataForm" }),
  },
};
</script>

<style></style>
