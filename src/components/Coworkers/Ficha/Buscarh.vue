<template>
  <div >
    <div 
        class="row q-mb-md justify-end">
        <q-btn color="primary" @click="$emit('newCoworker')" label="Cadastrar Novo Colaborador"/>
      </div>
    <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações de Colaboradores</div>
      <q-input
        debounce="800"
        v-model="searchField"
        @keyup.esc="searchField = ''"          
        outlined=""
        class="col"        
        label="Nome do Colaborador">        
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
          v-for="(item, key) in colaboradores" 
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

  </div>        
</template>

<script>
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
  
      searchField: ''
      
    }
  },
  
  // Reset colaboradores object antes de sair
  beforeDestroy() {
    this.reset()
  },

  watch: {    
    searchField(value) {
      this.reset()
      // console.log('Valor: ', value);
      if( !value.length ) {
        return
      }
      this.fbSearchData(value)
    }    
  },

  methods: {
    ...mapActions('colaboradores', ['fbReadData', 'fbSearchData', 'reset']),

    editar(index, status){
      console.log('EDITAR Item: ', index, 'Status: ', status);
    },

    eliminar(index, status){
      status = !status
      console.log('INATIVAR Item: ', index ,'Status: ', status);
    },    
  },
      
  computed: {    
    ...mapGetters('colaboradores', ['colaboradores'])    
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