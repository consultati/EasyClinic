<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
         <q-input bottom-slots v-model="text" label="Nome do Paciente" counter maxlength="25" :dense="dense">
        <template v-slot:before>
          <q-icon name="account_box" />
        </template>

        <template v-slot:append>
          <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>

        <template v-slot:hint>
          <!-- Digite o nome do Paciente -->
        </template>
      </q-input>

      <q-card class="row" flat bordered v-for="(item, index) in pacientes" :key="index">
        <q-card-section class="col" v-html="item.nome" />
        <q-btn flat color="primary" @click="editar(index, item.id)">Editar</q-btn>
        <q-btn flat color="red" @click="eliminar(index, item.id)">Eliminar</q-btn>
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
      index: null
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
          console.log(element.id);
          const cliente = {
            id: element.id,
            nome: element.data().cliName, 
            cpf: element.data().cliCPF        
          }
          this.pacientes.push(cliente);
          console.log(this.pacientes);
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
    }
  }
}
</script>

<style lang="scss">

</style>