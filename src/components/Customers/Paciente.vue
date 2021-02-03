<template>
  <q-item 
    class="row" 
    flat bordered>

    <q-item-section class="col" v-html="item.nome" :class="!item.status ? 'tachar' : ''"/> 
    
    <q-btn               
      flat 
      color="info" 
      @click="eliminar(index, item.id)" 
      >{{( item.status ? "Ativo" : "Inativo") }}</q-btn>

    <q-btn 
      flat 
      round
      dense 
      color="primary" 
      icon="edit"
      @click="editar(index, item.id)" />
      
  </q-item>  
</template>

<script>
export default {
  props: ['item','id']
}
</script>

<style>
   .tachar {
    text-decoration: line-through;
    text-decoration-color: red;
  }
</style>