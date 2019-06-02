<template>
  <v-app>
    <NavBar v-if="!navBar"/>
    <v-content>
      <v-container>
        <transition name="list" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/navbar/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      //
    };
  },
  computed: {
    navBar() {
      return this.$route.path == '/login' || this.$route.path == '/registrar'
    }
  }
};
</script>
<style scoped>
.container {
  height: 100vh;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-70px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-move {
  transition: all 0.5s;
}
.list-leave-active {
  position: absolute;
  width: calc(100% - 31px);
}
</style>
