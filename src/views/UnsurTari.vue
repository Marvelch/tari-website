<template>
  <HeaderV />
  <div class="">
      <h1 class="font-bold px-11 pt-11 pb-11 text-2xl">UNSUR TARI</h1>
  </div>
  <div class="container mx-auto mb-9 pb-32">
      <div class="md:p-1 dark:bg-red-800"></div>
      <!-- Tari Tradisional -->
      <div class="text-left ml-9 mt-11">
        <h4 class="font-bold">Expresi</h4>
        <small class="ml-1">Penjelasan</small>
      </div>
      <!-- End Tari Trandisional -->
      <div class="md:p-1 dark:bg-red-800 mt-10"></div>
      <!-- Tari Nontradisional -->
      <div class="text-left ml-9 mt-11">
          <h4 class="font-bold">Gerak Tari</h4>
          <small class="ml-1">Penjelasan</small>
      </div>
      <!-- End Tari Nontradisional -->
  </div>
  <FooterV />
</template>

<script>
  // @ is an alias to /src
  import HeaderV from '@/components/HeaderV.vue'
  import FooterV from '@/components/FooterV.vue'

  export default {
      name: 'UnsurTari',
      components: {
          HeaderV,
          FooterV
      }
  }
</script>