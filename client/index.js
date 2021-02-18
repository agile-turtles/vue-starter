import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'

import App from '@/components/App'
import '@/assets/styles/app.scss'
import '@/assets/styles/fonts/roboto.css'

export default new Vue({
  el: '#app',
  render: (h) => h(App),
})
