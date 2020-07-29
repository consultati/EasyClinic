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
          <q-tab name="profile" icon="account_box" label="Perfil do Paciente" />
          <q-tab name="anamnese" icon="info" label="Ficha de Anamnese" />
          <q-tab name="history" icon="history" label="Histórico do Paciente" />
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
            <Cadastro
                :values="info" />            
          </q-tab-panel>
        <!-- Formulário de Perfil do Paciente -->
          <q-tab-panel name="profile">
            <Profile />
          </q-tab-panel>
        <!-- Formulário de Ficha de Anamnese -->
          <q-tab-panel name="anamnese">
            <Anamnese />
          </q-tab-panel>
        <!-- Formulário de Histórico do Paciente -->
          <q-tab-panel name="history">
            <Historico />
          </q-tab-panel>
        <!-- Formulário de Pesquisa de Pacients -->
          <q-tab-panel name="search">
            <div class="text-h5 tx-italic-bold q-mb-md">Pesquisar Paciente</div>
            <p>Informar dados para pesquisa</p>
          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>
</template>

<script>
    import Cadastro from './Ficha/Cadastro';
    import Profile from './Ficha/Profile';
    import Anamnese from './Ficha/Anamnese';
    import Historico from './Ficha/Historico';
    export default {
        components: {
            Cadastro,
            Profile,
            Anamnese,
            Historico
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