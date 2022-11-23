<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 drop-shadow-sm shadow-lg shadow-red-100 mb-1">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase" href="#pablo">
          <img src="../assets/logo.png" class="w-20" alt="" srcset="">
          </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none">
            <li class="nav-item">
              <router-link to="/" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/unsurtari" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Unsur Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/komposisitari" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Komposisi Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/bentuktari" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Bentuk Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/jenistari" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Jenis Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/fungsitari" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Fungsi Tari</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/visualisasi" class="flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <i class="fab fa-pinterest text-lg leading-lg opacity-75" /><span class="ml-2">Visualisasi</span>
              </router-link>
            </li>
            <li class="nav-item search">
              <div class="pt-2 relative mx-auto text-red-800">
                <input class="border-2 border-red-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-red-800 focus:outline-none" type="search" name="search" placeholder="Search">
                  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                    <svg class="text-red-800 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "HeaderV",
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>

  <style scoped src="../styles/style.css"></style>