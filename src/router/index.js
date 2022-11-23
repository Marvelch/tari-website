import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UnsurTari from '../views/UnsurTari.vue'
import KomposisiTari from '../views/KomposisiTari.vue'
import BentukTari from '../views/BentukTari.vue'
import JenisTari from '../views/JenisTari.vue'
import FungsiTari from '../views/FungsiTari.vue'
import Visualisasi from '../views/Visualisasi.vue'
import Provinsi from '../views/Provinsi.vue'
import Tari from "../views/Tari.vue"
import NamaTari from "../views/NamaTari.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/unsurtari',
    name: 'unsurtari',
    component: UnsurTari
  },
  {
    path: '/komposisitari',
    name: 'komposisitari',
    component: KomposisiTari
  },
  {
    path: '/bentuktari',
    name: 'bentuktari',
    component: BentukTari
  },
  {
    path: '/jenistari',
    name: 'jenistari',
    component: JenisTari
  },
  {
    path: '/fungsitari',
    name: 'fungsitari',
    component: FungsiTari
  },
  {
    path: '/visualisasi',
    name: 'visualisasi',
    component: Visualisasi
  },
  {
    path: '/provinsi',
    name: 'provinsi',
    component: Provinsi
  },
  {
    path: '/tari',
    name: 'tari',
    component: Tari
  },
  {
    path: '/namatari',
    name: 'namatari',
    component: NamaTari
  }
  ,
  {
    path: '/unsurtari',
    name: 'unsurtari',
    component: UnsurTari
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
