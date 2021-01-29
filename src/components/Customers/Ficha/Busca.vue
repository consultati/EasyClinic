<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
        <q-input
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
        <q-list separator bordered>
          <q-item class="row" flat bordered v-for="(item, index) in pacientes" :key="index">
            <q-item-section class="col" v-html="item.nome" :class="!item.status ? 'tachar' : ''" />                     
            <q-btn 
              flat 
              round
              dense 
              color="primary" 
              icon="edit"
              @click="editar(index, item.id)" />
            <q-btn 
              v-model="statusDef" 
              flat 
              color="red" 
              @click="statusDef">{{ item.status }}</q-btn>
          </q-item>  
        </q-list>

    </div>    
</template>

<script>
import { db } from "boot/firebase";
export default {
  data () {
    return {
      model: null,
      text: '',
      pacientes: [],
      dense: false,
      denseOpts: false,
      id: null,
      index: null,
      statusMsg: 'Status',
      searchField: ''
    }
  },
  created() {
  this.listarClientes();
  },
  methods: {
      async listarClientes(){
      try {

        const resDB = await db.collection('clientes').get()

        resDB.forEach(element => {
          // console.log(element.id);
          const cliente = {
            id: element.id,
            nome: element.data().cliName, 
            cpf: element.data().cliCPF,
            status: element.data().cliStatus        
          }
          this.pacientes.push(cliente);
          // console.log(this.pacientes);
        });

      } catch (error) {
        console.log(error);
      }
    },

    editar(index, id){
      console.log('EDITAR');
    },

    eliminar(index, id){
      console.log('ELIMINAR');
    },

    statusDef(){     
      this.statusMsg = 'True'      
    },  

  },
  
}
</script>

<style>
  .tachar {
    text-decoration: line-through;
    text-decoration-color: red;
  }
  .separator {
  background: rgb(255, 255, 255);
  padding: 5px;
  list-style: none;
}

</style>