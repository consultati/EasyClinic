<template>
    <form @submit.prevent="submitForm">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3 col">
                <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
                </template>
                Faça seu {{tab | titleCase}} para acessar Easy Clinic!
            </q-banner>
        </div>
        <div class="row q-mb-md">
            <q-input 
            outlined 
            v-model="formData.email"
            :rules="[ val => isValidEmailAddress(val) || 'Por favor digite um email válido']"
            ref="email"
            lazy-rules
            class="col" 
            label="Email" 
            stack-label/>
        </div>
        <div class="row q-mb-md">
            <q-input 
            outlined 
            v-model="formData.password"
            :rules="[ val => val.length >= 6 || 'Por favor digite pelo menos 6 caracteres']"
            ref="password"
            lazy-rules
            type="password"
            class="col" 
            label="Senha" 
            stack-label/>
        </div>
        <div class="row">
            <q-space />
            <q-btn 
            color="primary" 
            :label="tab"
            type="submit" />
        </div>
    </form>
</template>

<script>
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        isValidEmailAddress(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(String(email).toLowerCase())
        },
        submitForm() {
            this.$refs.email.validate()
            this.$refs.password.validate()
            if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
                if (this.tab == 'login') {
                    console.log('login the user')
                }
                else {
                    console.log('register the user')
                }  
            }
        }
    },
    filters: {
        titleCase(value) {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }

}
</script>

<style>

</style>