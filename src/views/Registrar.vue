<template>
    <v-layout align-center justify-center fill-height>
        <v-flex md4>
            <form @submit.prevent="registerUser()">
                <v-card class="pa-4">
                    <v-card-text>
                        <p class="display-1 font-weight-light text-xs-center">Registrar</p>
                    </v-card-text>
                    <v-text-field
                        label="Nome"
                        prepend-inner-icon="email"
                        v-model.lazy="user.name"
                    ></v-text-field>
                    <v-text-field
                        label="Email"
                        prepend-inner-icon="email"
                        v-model.lazy="user.email"
                    ></v-text-field>
                    <v-text-field
                        label="Senha"
                        prepend-inner-icon="lock"
                        type="password"
                        v-model.lazy="user.password"
                    ></v-text-field>
                    <v-btn type="submit" color="success">Registrar</v-btn>
                    <v-btn to="/login" class="mt-2" depressed>Já tenho conta</v-btn>
                </v-card>
            </form>
      </v-flex>
    </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['register']),
        registerUser() {
            this.register(this.user);
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