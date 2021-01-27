<template>
    <div>
        <div class="text-h5 tx-italic-bold q-mb-md">Informações Básicas</div>
            <q-form @submit="salvar" class="q-mt-md">
                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">
                        <q-input autofocus
                            type ="text"
                            label ="Nome Completo"
                            class ="q-mt-md"
                            v-model ="item.customerName"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-2">
                        <q-input autofocus
                            type ="number"
                            label ="CPF"
                            class ="q-mt-md"
                            v-model ="item.customerCPF"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input autofocus
                            type ="email"
                            label ="e-Mail"
                            class ="q-mt-md"
                            v-model ="item.customerEmail"
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
                        v-model ="item.customerSex"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-select
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="item.customerStatus"
                        :options="status"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                            label = "Data de Nascimento"
                            v-model="item.customerDate"
                            class  ="q-mt-md">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date
                                        v-model="item.customerDate"
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
                        v-model="item.customerPlace"
                        :options="options"
                        />
                    </div>
                    <div class="col-md-8">
                        <q-input
                        type="text"
                        label = "Endereço"
                        class  ="q-mt-md"
                        v-model="item.customerAddress"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="number"
                        label = "Número"
                        class  ="q-mt-md"
                        v-model="item.customerNumber"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                    
                </div>

                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-input
                        label = "Bairro"
                        class  ="q-mt-md"
                        v-model="item.customerDistrict"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                        type="text"
                        label = "Cidade"
                        class  ="q-mt-md"
                        v-model="item.customerCity"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="text"
                        label = "Estado"
                        class  ="q-mt-md"
                        v-model="item.customerState"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input
                        type="number"
                        label = "CEP"
                        class  ="q-mt-md"
                        v-model="item.customerCEP"
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
                        v-model="item.customerTelres"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                        type="number"
                        label = "Tel Comercial"
                        class  ="q-mt-md"
                        v-model="item.customerTelcml"
                        />
                    </div>
                        <div class="col-md-4">
                        <q-input
                        type="number"
                        label = "Tel Celular"
                        class  ="q-mt-md"
                        v-model="item.customerTelcel"
                        />                   
                    </div>                     
                </div>                                 

                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Profissão"
                            class  ="q-mt-md"
                            v-model ="item.customerWork"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Recomendado por"
                            class  ="q-mt-md"
                            v-model ="item.customerRefer"
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
    props: {
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
        },
        salvar() {
            console.log('Seus dados foram salvos');
        }
    }
    
}
</script>

<style lang="scss">

</style>