<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Ficha de Anamnese</div>
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

        <div class="text-h5 tx-italic-bold q-mb-md">Detalhes do Paciente</div> 

        <div class="row q-pa-md-4">
            <div class="col q-gutter-sm">
                <q-checkbox v-model="fumante" label="Fumante" />
            </div>
            <div class="col q-gutter-sm">
                <q-checkbox v-model="lentes" label="Lentes de contato" />
            </div> 
            <div class="col q-gutter-sm">
                <q-checkbox v-model="alergia" label="Alergia" />
            </div>        
        </div>

        <div class="row q-pa-md-4">
            <div class="col q-gutter-sm">
                <q-checkbox v-model="hepatite" label="Hepatite" />
            </div>
            <div class="col q-gutter-sm">
                <q-checkbox v-model="vitiligo" label="Vitiligo" />
            </div> 
            <div class="col q-gutter-sm">
                <q-checkbox v-model="queloide" label="Quelóide" />
            </div>        
        </div>

        <div class="row q-pa-md-4">
            <div class="col q-gutter-sm">
                <q-checkbox v-model="diabetes" label="Diabetes" />
            </div>
            <div class="col q-gutter-sm">
                <q-checkbox v-model="manchas" label="Manchas na Pele" />
            </div> 
            <div class="col q-gutter-sm">
                <q-checkbox v-model="herpes" label="Herpes" />
            </div>        
        </div>

        <div class="row q-pa-md-4">
            <div class="col q-gutter-sm">
                <q-checkbox v-model="cancer" label="Cancer" />
            </div> 
            <div class="col q-gutter-sm">
                <q-checkbox v-model="cardiaco" label="Problemas cardíacos" />
            </div>
            <div class="col q-gutter-sm">
                <q-checkbox v-model="marcapasso" label="Portador de Marcapasso" />
            </div>       
        </div>

    </div>
       
</template>

<script>
export default {
    data () {
    return {
      escolha: 'nao',
      searchField: '',
      fumante: false,
      lentes: false,
      alergia: false,
      hepatite: false,
      vitiligo: false,
      queloide: false,
      diabetes: false,
      manchas: false,
      herpes: false,
      cancer: false,
      cardiaco: false,
      marcapasso: false
    }
  }
    
}
</script>

<style lang="scss">

</style>