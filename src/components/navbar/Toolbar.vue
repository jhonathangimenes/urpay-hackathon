<template>
  <v-toolbar dark color="primary" app>
    <router-link to="/">
      <v-toolbar-title class="white--text">Urpay</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-list-tile-avatar>
          <v-gravatar :email="email" v-on="on"/>
        </v-list-tile-avatar>
      </template>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click="sair()"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      email: '',
      items: [
        { title: 'Sair' },
      ]
    }
  },
  created() {
    let user = JSON.parse(window.localStorage.getItem('user')) ;
    this.email = user.email
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    ...mapActions(['getExtrato']),
    refresh() {
      this.getExtrato();
    },
    sair() {
      window.localStorage.removeItem('user');
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .v-list {
    padding: 0px;
  }
</style>


