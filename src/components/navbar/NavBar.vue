<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <NavigationDrawer/>
    </v-navigation-drawer>
    <Toolbar @menu="drawer = !drawer"/>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import NavigationDrawer from "./NavigationDrawer.vue";

export default {
  components: {
    Toolbar,
    NavigationDrawer
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

