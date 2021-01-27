<template>
    <div >
      <div class="text-h5 tx-italic-bold q-mb-md">Busca de Informações do Paciente</div>
        <q-select rounded outlined bottom-slots v-model="model" :options="options" label="Nome do Paciente" counter maxlength="12" :dense="dense" :options-dense="denseOpts">
        <template v-slot:before>
          <q-icon name="account_box" />
        </template>

        <template v-slot:append>
          <q-icon v-if="model !== ''" name="close" @click.stop="model = ''" class="cursor-pointer" />
          <q-icon name="search" @click.stop />
        </template>

        <template v-slot:hint>
          Digite o nome do paciente
        </template>
      </q-select>
    </div>    
</template>

<script>
export default {
      data () {
    return {
      model: null,

      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],

      dense: false,
      denseOpts: false
    }
  }
}
</script>

<style lang="scss">

</style>