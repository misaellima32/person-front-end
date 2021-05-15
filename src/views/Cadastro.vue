<template>
  <div id="register">
    <b-row>
      <b-col md="6">
        <b-card>
          <Form />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <FilledData />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Form from "../modules/cadastro/form/Form.vue";
import FilledData from "../modules/cadastro/filledData/FilledData.vue";

export default {
  components: {
    Form,
    FilledData,
  },
};
</script>

<style></style>
