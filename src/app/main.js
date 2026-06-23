import { createApp } from 'vue'

import '@fontsource-variable/inter/index.css'
import '@/assets/styles/main.css'

import App from './App.vue'
import { router } from '@/plugins/router'
import { pinia } from '@/plugins/pinia'
import { i18n } from '@/plugins/i18n'
import { vuetify } from '@/plugins/vuetify'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
