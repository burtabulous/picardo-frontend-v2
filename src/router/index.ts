// import Vue from "vue";
// import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

// // 3rd party imports
// import Auth from '@okta/okta-vue'

// // our own imports
// import Dashboard from '@/components/Dashboard'

// Vue.use(Auth, {
//   issuer: 'https://dev-66142316.okta.com/oauth2/default',
//   client_id: '0oa53ku6eYQcatWpV5d6',
//   redirect_uri: 'https://localhost:5001/implicit/callback',
//   scope: 'openid profile email'
// })

// Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [
//   {
//     path: "/",
//     name: "Home", 
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'Dashboard',
//       component: Dashboard,
//       props: true
//     },
//     // {
//     //   path: '/implicit/callback',
//     //   component: Auth.handleCallback()
//     // },
//   ]
// });

// router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

// export default router;

// Vue imports
import Vue from 'vue'
import Router from 'vue-router'

// 3rd party imports
import Auth from '@okta/okta-vue'

// our own imports
import Dashboard from '@/components/Dashboard'

Vue.use(Auth, {
  issuer: 'https://dev-66142316.okta.com/oauth2/default',
  client_id: '0oa53jkhxgYzI89yA5d6',
  redirect_uri: 'https://localhost:5001/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      props: true
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
  ]
})

router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router
