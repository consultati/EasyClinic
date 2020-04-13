<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="absolute-center">
          Easy Clinic
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
      width="250"
    >
      <q-list dark>
        <q-item-label
          header
          class="text-white text-bold"          
        >
          Menu Principal
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Fichas de Cadastro',
          caption: 'Dados de Pacientes',
          icon: 'account_box',
          link: '/customer'
        },
        {
          title: 'Colaboradores',
          caption: 'Cadastro de Profissionais',
          icon: 'supervisor_account',
          link: '/coworkers'
        },
        {
          title: 'Procedimentos',
          caption: 'Cadastro de Procedimentos',
          icon: 'assignment',
          link: ''
        },
        {
          title: 'Agenda',
          caption: 'Agendamento de Consultas',
          icon: 'event',
          link: ''
        },
        {
          title: 'Administração',
          caption: 'Financeiro',
          icon: 'local_atm',
          link: ''
        },
        {
          title: 'Settings',
          caption: 'Configurações',
          icon: 'settings',
          link: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .q-drawer {
    .q-router-link--exact-active {
      color: orange !important;
      font-style: italic;
      font-weight: bold;    
    }
  }
</style>
