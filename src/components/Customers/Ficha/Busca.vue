<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
        <q-input
          v-model="searchField"
          @keyup.esc="searchField = ''"
          v-select-all
          outlined=""
          class="col"        
          label="Nome do Paciente">        
          <template v-slot:append>
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />            
          </template>        
        </q-input>
        <div class="separator"></div>
        <q-card class="row" flat bordered v-for="(item, index) in pacientes" :key="index">
          <q-card-section class="col" v-html="item.nome" :class="!item.status ? 'tachar' : ''" />
          <q-btn flat color="primary" @click="editar(index, item.id)">Editar</q-btn>
          <q-btn v-model="statusMsg" flat color="red" @click="eliminar(index, item.id)">{{ statusMsg }}</q-btn>
        </q-card>  
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
      statusMsg: 'Status'
    }
  },
    created() {
    this.listarClientes();
  },

  methods: {
    searchField() {

    },

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
    statusDef(index, id){
      if(!this.item.status) {
        statusMsg: 'Ativo'
      }
      else {
        statusMsg: 'Inativo'
      }
    },
  }
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