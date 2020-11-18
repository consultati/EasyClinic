
const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/Public.vue') 
      },
      { 
        path: '/customer', 
        component: () => import('pages/Customer.vue') 
      },
      { 
        path: '/coworkers', 
        component: () => import('pages/Coworkers.vue') 
      },
      { 
        path: '/proced', 
        component: () => import('pages/Proced.vue') 
      },
      { 
        path: '/auth', 
        component: () => import('pages/PageAuth.vue') 
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
