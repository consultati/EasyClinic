<template>
    <div>
        <div class="text-h5 tx-italic-bold q-mb-md">Informações Básicas</div>
            <q-form @submit="onSubmit" class="q-mt-md">
                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">
                        <q-input autofocus
                            type ="text"
                            label ="Nome Completo"
                            class ="q-mt-md"
                            v-model ="customerName"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-2">
                        <q-input autofocus
                            type ="number"
                            label ="CPF"
                            class ="q-mt-md"
                            v-model ="customerCPF"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input autofocus
                            type ="email"
                            label ="e-Mail"
                            class ="q-mt-md"
                            v-model ="customerEmail"
                            :rules ="[val => !!val || 'Campo Obrigatório', isValid('email')]"
                        />
                    </div>                  
                </div>                
                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-select
                        type ="text"
                        label ="Sexo"
                        class ="q-mt-md"
                        v-model ="customerSex"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-select
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="customerStatus"
                        :options="status"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                            label = "Data de Nascimento"
                            v-model="customerDate"
                            class  ="q-mt-md">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date
                                        v-model="customerDate"
                                        mask = "DD-MM-YYYY"
                                        @input="() => $refs.qDateProxy.hide()"
                                        />
                                    </q-popup-proxy>
                                    </q-icon>
                                </template>
                        </q-input>
                    </div>
                </div>
                <div class="row q-col-gutter-sm">
                    <div class="col-md-2">
                        <q-select
                        label = "Logradouro"
                        class  ="q-mt-md"
                        v-model="customerPlace"
                        :options="options"
                        />
                    </div>
                    <div class="col-md-8">
                        <q-input
                        type="text"
                        label = "Endereço"
                        class  ="q-mt-md"
                        v-model="customerAddress"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="number"
                        label = "Número"
                        class  ="q-mt-md"
                        v-model="customerNumber"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                    
                </div>

                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-input
                        label = "Bairro"
                        class  ="q-mt-md"
                        v-model="customerDistrict"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                        type="text"
                        label = "Cidade"
                        class  ="q-mt-md"
                        v-model="customerCity"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="text"
                        label = "Estado"
                        class  ="q-mt-md"
                        v-model="customerState"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="number"
                        label = "CEP"
                        class  ="q-mt-md"
                        v-model="customerCEP"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                     
                </div> 

                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-input
                        type="number"
                        label = "Tel Residencial"
                        class  ="q-mt-md"
                        v-model="customerTelres"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                        type="number"
                        label = "Tel Comercial"
                        class  ="q-mt-md"
                        v-model="customerTelcml"
                        />
                    </div>
                        <div class="col-md-4">
                        <q-input
                        type="number"
                        label = "Tel Celular"
                        class  ="q-mt-md"
                        v-model="customerTelcel"
                        />                   
                    </div>                     
                </div>                                 

                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Profissão"
                            class  ="q-mt-md"
                            v-model ="customerWork"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Recomendado por"
                            class  ="q-mt-md"
                            v-model ="customerRefer"
                        />
                    </div>
                </div> 
                <q-btn
                    type    ="submit"
                    label  ="Enviar"
                    size    ="lg"
                    color   ="primary"
                    class   ="full-width q-mt-md"
                />
            </q-form>
    </div>
</template>

<script>
export default {
    props : {
        values: {
            type: Object,
            required: true,
        }
    },

    computed: {
        item() {
            return this.values
        }
    },

    data () {
        return {
            options: [
                'Rua', 'Avenida', 'Rodovia', 'Estrada','Alameda'
            ],
            status: [
                'Solteiro', 'Casado', 'Divorciado', 'Viúvo'
            ],
            sex: [
                'Masculino', 'Feminino'
            ]
        }
    },

    methods: {
        isValid(key) {
            return val => {
                if (key == 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
                return 'Email Inválido';
                if (key == 'password' && val.length < 6)
                return 'Senha Inválida';
                return true;
            }
        }
    }
    
}
</script>

<style lang="scss">

</style>