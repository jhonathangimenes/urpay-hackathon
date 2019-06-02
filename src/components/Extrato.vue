<template>
  <div class="root">
    <v-layout v-if="loader" align-center justify-center fill-height>
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-layout>
    <v-card v-else class="mx-auto" max-width="400">
      <v-card dark flat>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
          <v-container fill-height>
            <v-layout align-center>
              <strong class="display-4 font-weight-regular mr-4">{{ day }}</strong>
              <v-layout column justify-end>
                <div class="headline font-weight-light">{{ dayWeek }}</div>
                <div class="text-uppercase font-weight-light">{{ month }} {{ year }}</div>
              </v-layout>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item
            :color="ex.valor < 0 ? 'red': 'primary'"
            small
            v-for="ex in extrato"
            :key="ex.pago"
          >
            <v-layout wrap pt-3>
              <v-flex>
                <strong>{{ ex.pago }}</strong>
                <div class="caption">{{ ex.data }}</div>
              </v-flex>
              <v-flex xs6>
                <strong>R$ {{ ex.valor.toLocaleString('pt-br') }}</strong>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      day: undefined,
      dayWeek: undefined,
      month: undefined,
      year: undefined,
    };
  },
  created() {
    this.dataFormatada();
    this.getExtrato();
  },
  computed: {
    ...mapState(['extrato', 'loader'])
  },
  methods: {
    ...mapActions(['getExtrato']),
    dataFormatada() {
      let data = new Date();
      this.day = data.toLocaleDateString('pt-BR', {day: 'numeric'});
      this.dayWeek = data.toLocaleDateString('pt-BR', {weekday: 'long'});
      this.month = data.toLocaleDateString('pt-BR', {month: 'long'});
      this.year = data.toLocaleDateString('pt-BR', {year: 'numeric'});
    }
  }
};
</script>

<style scoped>
.root {
  height: 100%;
}
</style>
