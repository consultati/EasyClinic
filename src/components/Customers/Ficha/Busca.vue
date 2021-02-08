<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
        <q-input
          v-model="searchField"
          @keyup.esc="searchField = ''"          
          outlined=""
          class="col"        
          label="Ficha e Nome do Paciente">        
          <template v-slot:append>
            <q-icon v-if="searchField !== ''" name="close" @click="searchField = ''" class="cursor-pointer" />
            <q-icon name="search" />            
          </template>        
        </q-input>

        <div class="separator"></div>

        <q-list 
          separator 
          bordered>

          <!-- <paciente>
            v-for="(item, key) in pacientes" 
            :key="key"
            :item="item"
            :id="key">
          </paciente> -->

          <q-item 
            class="row" 
            flat bordered 
            v-for="(item, key) in pacientes" 
            :key=key>

            <q-item-section class="col" v-html="item.ficha + ' - ' + item.nome" :class="!item.status ? 'tachar' : ''"/>  
            
            <q-btn               
              flat 
              color="info" 
              @click="eliminar(index, item.status)" 
              >{{( item.status ? "Inativar" : "Ativar") }}</q-btn>

            <q-btn 
              flat 
              round
              dense 
              color="primary" 
              icon="edit"
              @click="editar(index, item.id)" />

          </q-item>  

        </q-list>

    </div>    
</template>

<script>
//import { db } from "boot/firebase";
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
//import Paciente from '../Paciente.vue';
export default {
  data () {
    return {
      model: null,
      text: '',
      //pacientes: {},
      dense: false,
      denseOpts: false,
      id: null,
      index: null,      
      searchField: '',
      
    }
  },
  created() {
  //this.listarClientes();
  this.fbReadData();
  
  },

  methods: {
      ...mapActions('customers', ['fbReadData']),
      //...mapMutations('customers',['addTask']),
      //...mapState('customers', ['pacientes']),

    //   async listarClientes(){
    //   try {

    //     const resDB = await db.collection('clientes').get()

    //     resDB.forEach(element => {
    //       // console.log(element.id);
    //       const cliente = {
    //         id: element.id,
    //         nome: element.data().cliName, 
    //         cpf: element.data().cliCPF,
    //         status: element.data().cliStatus        
    //       }
    //       this.pacientes.push(cliente);
          
    //       // console.log(this.pacientes);
    //     });

    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    editar(index, id){
      console.log('EDITAR');
    },

    eliminar(index, status){
      status = !status
      console.log('Status:', status);
    },    
  },
    
  computed: {    
      ...mapGetters('customers', ['pacientes'])    
  },
  
  components: {
    'paciente' : require('components/Customers/Paciente.vue').default    
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