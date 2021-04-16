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

        <!-- <div class="separator"></div>  -->

        <q-form @submit="salvar" class="q-mt-md" ref="myform">
            <hr>
            <div class="row q-col-gutter-sm">
                <div class="col-md-4">
                    <q-input 
                        v-model="text" 
                        :dense="dense" 
                        readonly                         
                        :label="nome"
                        hint="Nome"                  
                    />
                </div>
                <div class="col-md-4">
                    <q-input 
                        v-model="text" 
                        :dense="dense" 
                        readonly                         
                        :label="cpf" 
                        hint="CPF" 
                    />                   
                </div>
                <div class="col-md-4">
                    <q-input 
                        v-model="text" 
                        :dense="dense" 
                        readonly                         
                        :label="ficha" 
                        hint="Ficha" 
                    />                   
                </div>
            </div>
            <hr>
            <div class="row">
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
        nome: 'Eanes Azurara',  
        cpf: '021.883.318-00',
        ficha: '20210208181000'   
        }
    },

    
    // Ler Cadastro de Questões
    created() {
        this.getQuestions();  
    },

    beforeDestroy() {
        this.reset()
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
             
        }
    }
    
}
</script>

<style lang="scss">

</style>