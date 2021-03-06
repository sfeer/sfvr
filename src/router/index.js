import Vue from 'vue';
import Router from 'vue-router';

import SwitchStation from '../views/SwitchStation';
import Substation from '../views/Substation';
import DebugScene from '../views/DebugScene';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {path: '/s1', name: 's1', component: SwitchStation},
    {path: '/s2', name: 's2', component: SwitchStation},
    {path: '/s3', name: 's3', component: SwitchStation},
    {path: '/s4', name: 's4', component: Substation},
    {path: '/s5', name: 's5', component: Substation},

    {path: '/scene/:scene', component: SwitchStation},
    {path: '/debug/:panoCode', component: DebugScene}
  ]
})
