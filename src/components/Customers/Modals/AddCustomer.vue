<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Deseja adicionar um novo cliente?</div>           
    </q-card-section>
      
    <q-card-section class="row">
      <q-card-actions align="left">
        <q-btn 
          @click="adicionarSim()"
          flat 
          label="Sim" 
          color="primary" 
          v-close-popup />
      </q-card-actions>
      <q-space /> 
      <q-card-actions align="right">
        <q-btn
          @click="adicionarNao()" 
          flat 
          label="Não" 
          color="negative" 
          v-close-popup />
      </q-card-actions>
    </q-card-section>    
  </q-card>
</template>

<script>
export default {
  data () {
    return {
      showAddCustomer: false      
    }
  },
  methods: {
    adicionarSim() {
      this.showAddCustomer = true
      console.log('Adicionar Cliente', this.showAddCustomer);
    },
    adicionarNao() {
      this.showAddCustomer = false
      console.log('Adicionar Cliente', this.showAddCustomer);
    },
  }    
}
</script>