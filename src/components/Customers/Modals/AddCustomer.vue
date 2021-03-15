<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Deseja adicionar um novo cliente?</div>           
    </q-card-section>
      
    <q-card-section class="row">
      <q-card-actions align="left">
        <q-btn 
          @click="adicionar()"
          flat 
          label="Sim" 
          color="primary" 
          v-close-popup />
      </q-card-actions>
      <q-space /> 
      <q-card-actions align="right">
        <q-btn 
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
  methods: {
    adicionar() {
      this.showAddCustomer = true
      console.log('Adicionar Cliente', this.showAddCustomer);
    },
  }    
}
</script>