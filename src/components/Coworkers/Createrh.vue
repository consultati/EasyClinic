<template>
    <q-splitter
      v-model="splitterModel"
      
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal bg-white"
        >
          <q-tab name="info" icon="note_add" label="Novo Cadastro" />
          <q-tab name="search" icon="search" label="Busca" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
        <!-- Formulário de Informações Básicas do Paciente -->
          <q-tab-panel name="info">
            <Colaboradores
                :values="info" />            
          </q-tab-panel>
        <!-- Formulário de Pesquisa de Pacients -->
          <q-tab-panel name="search">
            <Buscarh />
          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>
</template>

<script>
    import Colaboradores from './Ficha/Colaboradores';
    import Buscarh from './Ficha/Buscarh';
    export default {
        components: {
            Colaboradores,
            Buscarh
        },
        data () {
            return {
                splitterModel: 20,
                tab: 'info',
                info: {
                  customerName: '',
                  customerCPF: '',
                  customerEmail: '',
                  customerSex: '',
                  customerStatus: '',
                  customerWork: '',
                  customerDate: '',
                  customerPlace: '',
                  customerAddress: '',
                  customerNumber: '',
                  customerDistrict: '',
                  customerCity: '',
                  customerState: '',
                  customerCEP: '',
                  customerTelres: '',
                  customerTelcml: '',
                  customerTelcel: '',
                  customerRefer: '',
                  fileup: '' ,
                }                          
            }
        },
        
        methods: {
            onSubmit () {
            alert('Cadastro Efetuado!');
            // depois vamos criar uma função
                }            
        }        
    }
    </script>

    <style lang="scss">
        .tx-italic-bold {
        font-style: italic;
        font-weight: bold;
        color: lightslategrey;
    }
</style>