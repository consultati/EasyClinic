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
                            v-model ="item.coworkerName"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-2">
                        <q-input lazy-rules
                            type ="number"
                            label ="CPF"
                            class ="q-mt-md"
                            v-model ="item.coworkerCPF"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input lazy-rules
                            type ="email"
                            label ="e-Mail"
                            class ="q-mt-md"
                            v-model ="item.coworkerEmail"
                            :rules ="[val => !!val || 'Campo Obrigatório', isValid('email')]"
                        />
                    </div>                  
                </div> 
                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">                     
                        <q-select lazy-rules
                            type   ="text"
                            label ="Regime de Contratação"
                            class  ="q-mt-md"
                            v-model ="item.coworkerRegime"
                            :options="regime"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Carteira Profissional / Documento"
                            class  ="q-mt-md"
                            v-model ="item.coworkerDoc"
                        />
                    </div>
                </div> 
                          
                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-select lazy-rules
                        type ="text"
                        label ="Sexo"
                        class ="q-mt-md"
                        v-model ="item.coworkerGender"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-select lazy-rules
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="item.coworkerCivil"
                        :options="status"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input
                            label = "Data de Nascimento"
                            v-model="item.coworkerDate"
                            class  ="q-mt-md">
                                <template v-slot:append>
                                    <q-icon name="event" class="cursor-pointer">
                                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                                        <q-date
                                        v-model="item.coworkerDate"
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
                        v-model="item.coworkerPlace"
                        :options="options"
                        />
                    </div>
                    <div class="col-md-8">
                        <q-input lazy-rules
                        type="text"
                        label = "Endereço"
                        class  ="q-mt-md"
                        v-model="item.coworkerAddress"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
                        type="number"
                        label = "Número"
                        class  ="q-mt-md"
                        v-model="item.coworkerNumber"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                    
                </div>

                <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                        <q-input lazy-rules
                        label = "Bairro"
                        class  ="q-mt-md"
                        v-model="item.coworkerDistrict"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                        <q-input lazy-rules
                        type="text"
                        label = "Cidade"
                        class  ="q-mt-md"
                        v-model="item.coworkerCity"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
                        type="text"
                        label = "Estado"
                        class  ="q-mt-md"
                        v-model="item.coworkerState"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                        <div class="col-md-2">
                        <q-input lazy-rules
                        type="number"
                        label = "CEP"
                        class  ="q-mt-md"
                        v-model="item.coworkerCEP"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                     
                </div> 

                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">
                        <q-input
                        type="number"
                        label = "Telefone de Contato"
                        class  ="q-mt-md"
                        v-model="item.coworkerContact"
                        />
                    </div>
                    <div class="col-md-6">                     
                        <q-select lazy-rules
                            type   ="text"
                            label ="Escolaridade"
                            class  ="q-mt-md"
                            v-model ="item.coworkerLevel"
                            :options="escolaridade"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>                       
                </div>                                 

                <div class="row q-col-gutter-sm">
                    <div class="col-md-6">                     
                        <q-input lazy-rules
                            type   ="text"
                            label ="Profissão"
                            class  ="q-mt-md"
                            v-model ="item.coworkerWork"
                            :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-6">                     
                        <q-input
                            type   ="text"
                            label ="Especialização"
                            class  ="q-mt-md"
                            v-model ="item.coworkerEspe"
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
            ],
            regime: [
                'CLT', 'PJ', 'Estágio', 'Temporário'
            ],
            escolaridade: [
                'Técnico', 'Graduação', 'Pós-graduação'
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
            
            // Define o conteúdo dos dados do colaborador para salvar
            const resDB = this.fbAddData({
                cwkName: this.item.coworkerName,
                cwkCPF: this.item.coworkerCPF,
                cwkEmail: this.item.coworkerEmail,
                cwkRegime: this.item.coworkerRegime,
                cwkDocument: this.item.coworkerDoc,
                cwkGender: this.item.coworkerGender,
                cwkCivil: this.item.coworkerCivil,
                cwkDtBirth: this.item.coworkerDate,
                cwkAddressPlace: this.item.coworkerPlace,
                cwkAddressName: this.item.coworkerAddress,
                cwkAddressNumber: this.item.coworkerNumber,
                cwkAddressDistrict: this.item.coworkerDistrict,
                cwkAddressCity: this.item.coworkerCity,
                cwkAddressUF: this.item.coworkerState,
                cwkAddressCEP: this.item.coworkerCEP,
                cwkContact: this.item.coworkerContact,
                cwkLevel: this.item.coworkerLevel,               
                cwkProfession: this.item.coworkerWork,
                cwkEspe: this.item.coworkerEspe,
                cwkStatus: true                
            })
            // Limpar Dados
            this.$refs.myform.resetValidation()
            this.item.coworkerName = ''
            this.item.coworkerCPF = null
            this.item.coworkerEmail = ''
            this.item.coworkerRegime = ''
            this.item.coworkerDoc = ''
            this.item.coworkerGender = ''
            this.item.coworkerCivil = ''
            this.item.coworkerDate = ''
            this.item.coworkerPlace = ''
            this.item.coworkerAddress = ''
            this.item.coworkerNumber = null
            this.item.coworkerDistrict = ''
            this.item.coworkerCity = ''
            this.item.coworkerState = ''
            this.item.coworkerCEP = null
            this.item.coworkerContact = ''
            this.item.coworkerLevel = ''
            this.item.coworkerWork = ''
            this.item.coworkerEspe = ''

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