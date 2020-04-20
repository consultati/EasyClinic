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
          <q-tab name="search" icon="search" label="Busca" />
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
            <div class="text-h5 tx-italic-bold q-mb-md">Informações Básicas</div>
              <q-form @submit="onSubmit" class="q-mt-md">
                <div class="row q-col-gutter-sm">
                  <div class="col-md-6">
                    <q-input autofocus
                      type ="text"
                      label ="Nome Completo"
                      class ="q-mt-md"
                      v-model ="customerName"
                      :rules ="[val => !!val || 'Campo Obrigatório']"
                    />
                  </div>
                  <div class="col-md-2">
                    <q-input autofocus
                      type ="number"
                      label ="CPF"
                      class ="q-mt-md"
                      v-model ="customerCPF"
                      :rules ="[val => !!val || 'Campo Obrigatório']"
                  />
                  </div>
                  <div class="col-md-4">
                    <q-input autofocus
                      type ="email"
                      label ="e-Mail"
                      class ="q-mt-md"
                      v-model ="customerEmail"
                      :rules ="[val => !!val || 'Campo Obrigatório', isValid('email')]"
                  />
                  </div>                  
                </div>
                  
                  <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                       <q-select
                        type ="text"
                        label ="Sexo"
                        class ="q-mt-md"
                        v-model ="customerSex"
                        :options="sex"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
                       <q-select
                        label ="Estado Civil"
                        class  ="q-mt-md"
                        v-model ="customerStatus"
                        :options="status"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                        />
                    </div>
                    <div class="col-md-4">
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
                    </div>
                  </div>
                  <div class="row q-col-gutter-sm">
                    <div class="col-md-2">
                      <q-select
                        label = "Logradouro"
                        class  ="q-mt-md"
                        v-model="customerPlace"
                        :options="options"
                      />
                    </div>
                    <div class="col-md-8">
                      <q-input
                        type="text"
                        label = "Endereço"
                        class  ="q-mt-md"
                        v-model="customerAddress"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>
                      <div class="col-md-2">
                      <q-input
                        type="number"
                        label = "Número"
                        class  ="q-mt-md"
                        v-model="customerNumber"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>                    
                  </div>

                  <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                      <q-input
                        label = "Bairro"
                        class  ="q-mt-md"
                        v-model="customerDistrict"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>
                    <div class="col-md-4">
                      <q-input
                        type="text"
                        label = "Cidade"
                        class  ="q-mt-md"
                        v-model="customerCity"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>
                      <div class="col-md-2">
                      <q-input
                        type="text"
                        label = "Estado"
                        class  ="q-mt-md"
                        v-model="customerState"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>
                      <div class="col-md-2">
                      <q-input
                        type="number"
                        label = "CEP"
                        class  ="q-mt-md"
                        v-model="customerCEP"
                        :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>                     
                  </div> 

                  <div class="row q-col-gutter-sm">
                    <div class="col-md-4">
                      <q-input
                        type="number"
                        label = "Tel Residencial"
                        class  ="q-mt-md"
                        v-model="customerTelres"
                      />
                    </div>
                    <div class="col-md-4">
                      <q-input
                        type="number"
                        label = "Tel Comercial"
                        class  ="q-mt-md"
                        v-model="customerTelcml"
                      />
                    </div>
                      <div class="col-md-4">
                      <q-input
                        type="number"
                        label = "Tel Celular"
                        class  ="q-mt-md"
                        v-model="customerTelcel"
                      />                   
                    </div>                     
                  </div>                                 

                  <div class="row q-col-gutter-sm">
                    <div class="col-md-6">                     
                      <q-input
                          type   ="text"
                          label ="Profissão"
                          class  ="q-mt-md"
                          v-model ="customerWork"
                          :rules ="[val => !!val || 'Campo Obrigatório']"
                      />
                    </div>
                    <div class="col-md-6">                     
                      <q-input
                          type   ="text"
                          label ="Recomendado por"
                          class  ="q-mt-md"
                          v-model ="customerRefer"
                      />
                    </div>
                  </div> 
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
            <div class="text-h5 tx-italic-bold q-mb-md">Perfil do Paciente</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="anamnese">
            <div class="text-h5 tx-italic-bold q-mb-md">Anamnese</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="history">
            <div class="text-h5 tx-italic-bold q-mb-md">Histórico do Paciente</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          </q-tab-panel>

          <q-tab-panel name="search">
            <div class="text-h5 tx-italic-bold q-mb-md">Pesquisar Paciente</div>
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
      customerCPF: '',
      customerEmail: '',
      customerSex: '',
      customerStatus: '',
      customerWork: '',
      customerDate: '',
      customerPlace: '',
      customerAddress: '',
      customerNumber: '',
      customerDistrict: '',
      customerCity: '',
      customerState: '',
      customerCEP: '',
      customerTelres: '',
      customerTelcml: '',
      customerTelcel: '',
      customerRefer: '',
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
  },
  methods: {
    onSubmit () {
      alert('Cadastro Efetuado!');
      // depois vamos criar uma função
    },
    isValid(key) {
      return val => {
        if (key == 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))
          return 'Email Inválido';
        if (key == 'password' && val.length < 6)
          return 'Senha Inválida';
        return true;
      };
    }
  },
}
</script>

<style lang="scss">
  .tx-italic-bold {
    font-style: italic;
    font-weight: bold;
    color: lightslategrey;
  }

</style>
