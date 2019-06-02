<template>
  <div class="root">
    <v-layout v-if="loader" align-center justify-center fill-height>
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </v-layout>
    <v-card v-else class="mx-auto" max-width="400">
      <v-card dark flat>
        <v-btn absolute bottom color="pink" right fab>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">credit_card</v-icon>
            </template>
          <form @submit.prevent="transferir()">
            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>Transferência</v-card-title>
              <div class="px-2">
               
                <v-select
                  :items="users"
                  item-text="name"
                  item-value="_id"
                  label="Standard"
                  v-model.lazy="transfer.userDeb"
                ></v-select>
                <money class="border" v-model.lazy="transfer.valor" v-bind="money"></money>
                
              </div>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary" flat @click="dialog = false">Transferir</v-btn>
              </v-card-actions>
            </v-card>
            </form>
          </v-dialog>
        </v-btn>
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
            :color="ex.userCredit == userId ? 'red': 'primary'"
            small
            v-for="ex in extrato"
            :key="ex.id"
          >
            <v-layout wrap pt-3>
              <v-flex>
                <div
                  class="caption"
                >{{ new Date(ex.createdAt).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', year: 'numeric'}) }}</div>
              </v-flex>
              <v-flex xs6>
                <strong>{{ ex.userCredit == userId ? '-': '' }}{{ ex.transferValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</strong>
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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      day: undefined,
      dayWeek: undefined,
      month: undefined,
      year: undefined,
      dialog: false,
      transfer: {
        userCred: this.userId,
        valor: '',
        userDeb: ''
      },
      price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: '',
          precision: 2,
          masked: false
        }
    };
  },
  created() {
    this.dataFormatada();
    this.getExtrato();
    this.getUsers();
    let user = JSON.parse(window.localStorage.getItem("user"));
    this.transfer.userCred = user.id;
  },
  computed: {
    ...mapState(["extrato", "loader", "users"]),
    userId() {
      let user = JSON.parse(window.localStorage.getItem("user"));
      return user.id;
    }
  },
  methods: {
    ...mapActions(["getExtrato", "getUsers", "transferr"]),
    dataFormatada() {
      let data = new Date();
      this.day = data.toLocaleDateString("pt-BR", { day: "numeric" });
      this.dayWeek = data.toLocaleDateString("pt-BR", { weekday: "long" });
      this.month = data.toLocaleDateString("pt-BR", { month: "long" });
      this.year = data.toLocaleDateString("pt-BR", { year: "numeric" });
    },
    transferir() {
      this.transferr(this.transfer)
    }
  }
};
</script>

<style scoped>
.root {
  height: 100%;
}
.border {
  border: solid 1px;
  height: 40px;
}
</style>
