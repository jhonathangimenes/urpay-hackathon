<template>
    <v-layout align-center justify-center fill-height>
        <v-flex md4>
            <form @submit.prevent="autenticacao()">
            <v-card class="pa-4">
                <v-card-text>
                    <p class="display-1 font-weight-light text-xs-center">Login</p>
                </v-card-text>
                <v-text-field
                    label="Email"
                    prepend-inner-icon="email"
                    v-model.lazy="user.email"
                ></v-text-field>
                <v-text-field
                    label="Senha"
                    type="password"
                    prepend-inner-icon="lock"
                    v-model.lazy="user.password"
                ></v-text-field>
                <v-btn type="submit" color="success">Entrar</v-btn>
                <v-btn to="/registrar" class="mt-2" depressed>Registra-se</v-btn>
            </v-card>
            </form>
      </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['auth']),
        autenticacao() {
            this.auth(this.user)
        }
    }
}
</script>


<style scoped>
.v-btn {
    width: 100%;
    margin: 0px;
}
</style>
