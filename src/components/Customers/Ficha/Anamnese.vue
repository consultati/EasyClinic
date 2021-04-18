<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Ficha de Anamnese</div>

        

        <q-input
          v-model="searchField"
          @keyup.esc="searchField = ''"          
          outlined=""
          class="col"        
          label="Buscar Dados do Paciente">        
          <template v-slot:append>            
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />            
          </template>        
        </q-input>

        <q-form @submit="salvar" class="q-mt-md" ref="myform">
            <hr>
            <div class="row q-col-gutter-sm">
                <div class="col-md-4">
                    <q-input                        
                        v-model="this.paciente.nome"
                        dense="dense" 
                        disable                         
                        filled
                        hint="Nome"                  
                    />
                </div>
                <div class="col-md-4">
                    <q-input 
                        v-model="this.paciente.cpf" 
                        dense="dense" 
                        disable                         
                        filled
                        hint="CPF" 
                    />                   
                </div>
                <div class="col-md-4">
                    <q-input 
                        v-model="this.paciente.ficha" 
                        dense="dense" 
                        disable                         
                        filled 
                        hint="Ficha ID" 
                    />                   
                </div>
            </div>
            <hr>
            <div class="row q-col-gutter-sm">
                <div 
                    class="col-md-4" 
                    v-for="(item, index) in questions" 
                    :key="index">
                    <div v-if="item.tipo == 'bool'">
                        <q-checkbox 
                            v-model="item.value" 
                            :label="item.titulo" 
                        />
                    </div>
                    <div v-else-if="item.tipo == 'text'">
                        <q-input
                            v-model="item.value"
                            :label="item.titulo"
                            type="text" 
                        />
                    </div>
                </div>
            </div>
            
            <div class="row">
                <q-btn
                    type    ="submit"
                    label  ="Enviar"
                    size    ="lg"
                    color   ="primary"
                    class   ="full-width q-mt-md"
                />
            </div>

        </q-form>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex' 
export default {
    data () {
        return {
            escolha: 'nao',
            searchField: '',
            paciente: {
                nome: '',
                cpf: '',
                ficha: ''
            },   
        }
    },

    
    // Ler Cadastro de Questões
    created() {
        this.getQuestions();  
        this.receberPaciente(this.paciente)
    },

    beforeDestroy() {
        this.reset();
    },

    computed: {
        ...mapGetters('anamnese',['questions']),
        
        item() {
            return this.values
        }
    },

    methods: {
        ...mapActions('anamnese', ['getQuestions','reset']),

        load(item) {
            console.log(item);
        },

        salvar() {
            
            //Gravar dados;      
            
            // Limpar Dados  
            this.$refs.myform.resetValidation()          

            // Popup Mensagem de Dados Salvos
            this.$q.notify({
                message: 'Dados Salvos!',
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done'
            })
             
        },

        receberPaciente(paciente) {
            let pacientes = localStorage.getItem('pacientesApp');

            if (pacientes) {
                // Se existe então receber dados do paciente no local storage
                this.paciente = JSON.parse(pacientes);
                console.log(this.paciente);
            } else {
                // Se não existe então criar dados do paciente no local storage
                console.log("Local Storage Vazia");
            }

            // atualizar local sorage independente de novos dados
            // localStorage.setItem('pacientesApp', JSON.stringify(pacientes))
        },
    }
    
}
</script>

<style lang="scss">

</style>