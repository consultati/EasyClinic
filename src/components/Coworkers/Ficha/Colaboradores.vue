<template>
    <div>
        <div class="text-h5 tx-italic-bold q-mb-md">Cadastro de Colaboradores</div>
            <q-form @submit="salvar" class="q-mt-md" ref="myform">
                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">
                        <q-input autofocus lazy-rules
                            type ="text"
                            label ="Nome Completo"
                            class ="q-mt-md"
                            v-model ="item.customerName"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-2">
                        <q-input lazy-rules
                            type ="number"
                            label ="CPF"
                            class ="q-mt-md"
                            v-model ="item.customerCPF"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input lazy-rules
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
                        <q-select lazy-rules
                        type ="text"
                        label ="Sexo"
                        class ="q-mt-md"
                        v-model ="item.customerGender"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-select lazy-rules
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="item.customerCivil"
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
                        <q-input lazy-rules
                        type="text"
                        label = "Endereço"
                        class  ="q-mt-md"
                        v-model="item.customerAddress"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
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
                        <q-input lazy-rules
                        label = "Bairro"
                        class  ="q-mt-md"
                        v-model="item.customerDistrict"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input lazy-rules
                        type="text"
                        label = "Cidade"
                        class  ="q-mt-md"
                        v-model="item.customerCity"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
                        type="text"
                        label = "Estado"
                        class  ="q-mt-md"
                        v-model="item.customerState"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
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
                        <q-input lazy-rules
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
                            label ="Especialização"
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
import { db } from "boot/firebase"
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex' 
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
            id: null,
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
        ...mapActions('colaboradores', ['fbAddData']),

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
            
            // Define um número de ficha único
            var date = new Date();
            var components = [
                date.getYear(),
                date.getMonth(),
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds(),
                date.getMilliseconds()
            ];
            var fichaID = components.join("");

            // Define o conteúdo dos dados do cliente para salvar
            const resDB = this.fbAddData({
                cliName: this.item.customerName,
                cliCPF: this.item.customerCPF,
                cliEmail: this.item.customerEmail,
                cliGender: this.item.customerGender,
                cliCivil: this.item.customerCivil,
                cliDtBirth: this.item.customerDate,
                cliAddressPlace: this.item.customerPlace,
                cliAddressName: this.item.customerAddress,
                cliAddressNumber: this.item.customerNumber,
                cliAddressDistrict: this.item.customerDistrict,
                cliAddressCity: this.item.customerCity,
                cliAddressUF: this.item.customerState,
                cliAddressCEP: this.item.customerCEP,
                cliAddressResPhone: this.item.customerTelres,
                cliAddressComPhone: this.item.customerTelcml,
                cliAddressCelPhone: this.item.customerTelcel,
                cliProfession: this.item.customerWork,
                cliReference: this.item.customerRefer,
                cliStatus: true,
                cliFicha: fichaID
            })
            // Limpar Dados
            this.$refs.myform.resetValidation()
            this.item.customerName = ''
            this.item.customerCPF = null
            this.item.customerEmail = ''
            this.item.customerGender = ''
            this.item.customerCivil = ''
            this.item.customerDate = ''
            this.item.customerPlace = ''
            this.item.customerAddress = ''
            this.item.customerNumber = null
            this.item.customerDistrict = ''
            this.item.customerCity = ''
            this.item.customerState = ''
            this.item.customerCEP = null
            this.item.customerTelres = ''
            this.item.customerTelcml = ''
            this.item.customerTelcel = ''
            this.item.customerWork = ''
            this.item.customerRefer = ''

            // Popup Mensagem de Dados Salvos
            this.$q.notify({
                message: 'Dados Salvos!',
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done'
            })
             
        }
    }
    
}
</script>

<style lang="scss">

</style>