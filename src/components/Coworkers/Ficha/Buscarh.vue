<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações de Colaboradores</div>
        <q-input
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

        <!-- <q-list 
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

        </q-list> -->

    </div>        
</template>

<script>
export default {
    data () {
    return {
   
      searchField: ''
      
    }
  },
}
</script>

<style lang="scss">

</style>