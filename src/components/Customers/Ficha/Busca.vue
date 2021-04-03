<template>
    <div >
      <div 
        class="row q-mb-md justify-end">
        <q-btn color="primary" @click="$emit('newCustomer')" label="Cadastrar Novo Paciente"/>
      </div>
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
        <q-input
          debounce="800" 
          v-model="searchField"
          @keyup.esc="searchField = ''"          
          outlined=""
          class="col"        
          label="Nome do Paciente">        
          <template v-slot:append>
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />            
          </template>        
        </q-input>

        <div class="separator"></div>

        <q-list 
          separator 
          bordered>
          <q-item 
            class="row" 
            flat bordered 
            v-for="(item, key) in pacientes" 
            :key=key>

            <q-item-section class="col" v-html="item.nome" :class="!item.status ? 'tachar' : ''"/>  
            
            <q-btn               
              flat 
              color="info" 
              @click="eliminar(key, item.status)" 
              >{{( item.status ? "Inativar" : "Ativar") }}</q-btn>

            <q-btn 
              flat 
              round
              dense 
              color="primary" 
              icon="edit"
              @click="editar(key, item.status)" />

          </q-item>  

        </q-list>

        <q-dialog v-model="showAddCustomer">
          <add-customer />          
        </q-dialog>
  
    </div>    
</template>

<script>
import Cadastro from 'components/Customers/Ficha/Cadastro.vue'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      model: null,
      text: '',      
      dense: false,
      denseOpts: false,
      id: null,
      index: null,      
      searchField: '',
      showAddCustomer: false      
    }
  },
  
  // Reset pacientes object antes de sair
  beforeDestroy() {
        this.reset()
    },

  watch: {    
    searchField(value) {
      this.reset()      
      if( !value.length ) {
        return
      }
      this.fbSearchData(value)
    }    
  },

  methods: {
      ...mapActions('customers', ['fbReadData', 'reset', 'fbSearchData']),

      editar(index, status){
      console.log('EDITAR Item: ', index, 'Status: ', status);
    },

    eliminar(index, status){
      status = !status
      console.log('INATIVAR Item: ', index ,'Status: ', status);
    },
    
  },
    
  computed: {    
      ...mapGetters('customers', ['pacientes'])    
  },

  components: {
    'addCustomer' : require('components/Customers/Modals/AddCustomer.vue').default,
    'cadastro' : require('components/Customers/Ficha/Cadastro.vue').default,
    
  }

}
</script>

<style>
  .tachar {
    text-decoration: line-through;
    text-decoration-color: red;
  }
    .detachar {
    text-decoration: none;
    text-decoration-color: red;
  }
  .separator {
  background: rgb(255, 255, 255);
  padding: 5px;
  list-style: none;
}

</style>