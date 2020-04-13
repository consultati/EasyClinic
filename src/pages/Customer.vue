<template>
  <q-page padding>

    <q-splitter
      v-model="splitterModel"
      
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal bg-white"
        >
          <q-tab name="info" icon="note_add" label="Novo Cadastro" />
          <q-tab name="profile" icon="account_box" label="Perfil do Paciente" />
          <q-tab name="anamnese" icon="info" label="Ficha de Anamnese" />
          <q-tab name="history" icon="history" label="Histórico do Paciente" />
          <q-tab name="search" icon="search" label="Buscar" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
        <!-- Formulário de Informações Básicas do Paciente -->
          <q-tab-panel name="info">
            <div class="text-h4 tx-italic-bold q-mb-md">Informações Básicas</div>
              <q-form @submit="onSubmit" class="q-mt-md">
                  <q-input autofocus
                      type ="text"
                      label ="Nome Completo"
                      class ="q-mt-md"
                      v-model ="customerName"
                      :rules ="[val => !!val || 'Campo Obrigatório']"
                  />
                  <div class="row q-col-gutter-sm">
                    <div class="col-md-6">
                       <q-select
                        type ="text"
                        label ="Sexo"
                        class ="q-mt-md"
                        v-model ="customerSex"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                   </div>
                    <div class="col-md-6">
                       <q-select
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="customerStatus"
                        :options="status"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                  </div>
                                  
                    <q-input
                        label = "Data de Nascimento"
                        v-model="customerDate"
                        class  ="q-mt-md">
                        <template v-slot:append>
                          <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                              <q-date
                                v-model="customerDate"
                                mask = "DD-MM-YYYY"
                                @input="() => $refs.qDateProxy.hide()"
                              />
                            </q-popup-proxy>
                          </q-icon>
                        </template>
                    </q-input>
                    <q-select
                        label = "Logradouro"
                        class  ="q-mt-md"
                        v-model="spotModal"
                        :options="options"
                    />
                    <q-input
                        type   ="text"
                        label ="Profissão"
                        class  ="q-mt-md"
                        v-model ="customerWork"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                    />

                  <q-btn
                      type    ="submit"
                      label  ="Enviar"
                      size    ="lg"
                      color   ="primary"
                      class   ="full-width q-mt-md"
                  />
              </q-form>
          </q-tab-panel>

          <q-tab-panel name="profile">
            <div class="text-h4 q-mb-md">Perfil do Paciente</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="anamnese">
            <div class="text-h4 q-mb-md">Anamnese</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="history">
            <div class="text-h4 q-mb-md">Histórico do Paciente</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="search">
            <div class="text-h4 q-mb-md">Buscar</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>

  </q-page>
</template>

<script>
export default {
  name: 'PageCustomer',
  data () {
    return {
      splitterModel: 20,
      tab: 'info',
      customerName: '',
      customerSex: '',
      customerStatus: '',
      customerWork: '',
      customerDate: '',
      spotModal: '',
      fileup: '',
      options: [
        'Rua', 'Avenida', 'Rodovia', 'Estrada','Alameda'
      ],
      status: [
        'Solteiro', 'Casado', 'Divorciado', 'Viúvo'
      ],
      sex: [
        'Masculino', 'Feminino'
      ]
    }
  }
}
</script>

<style lang="scss">
  .tx-italic-bold {
    font-style: italic;
    font-weight: bold;
  }

</style>
