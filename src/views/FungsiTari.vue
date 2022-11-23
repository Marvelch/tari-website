<template>
  <HeaderV />
  <div class="">
      <h1 class="font-bold px-11 pt-11 pb-11 text-2xl">FUNGSI TARI</h1>
  </div>
  <div class="container mx-auto mb-9 pb-32">
      <div class="md:p-1 dark:bg-red-800"></div>
      <!-- Tari Tunggal -->
      <div class="text-left ml-9 mt-8">
          <h4 class="font-bold">Sosial</h4>
          <small class="ml-1">Penjelasan</small>
      </div>
      <!-- End Tari Tunggal -->
      <div class="md:p-1 dark:bg-red-800 mt-10"></div>
      <!-- Tari Pasangan -->
      <div class="text-left ml-9 mt-8">
          <h4 class="font-bold">Pendidikan</h4>
          <small class="ml-1">Penjelasan</small>
      </div>
      <!-- End Tari Pasangan -->
      <div class="md:p-1 dark:bg-red-800 mt-10"></div>
      <!-- Tari Kelompok -->
      <div class="text-left ml-9 mt-8">
          <h4 class="font-bold">Ekonomi</h4>
          <small class="ml-1">Penjelasan</small>
      </div>
      <!-- End Tari Kelompok -->
  </div>
  <FooterV />
</template>

<script>
  // @ is an alias to /src
  import HeaderV from '@/components/HeaderV.vue'
  import FooterV from '@/components/FooterV.vue'

  export default {
      name: 'FungsiTari',
      components: {
          HeaderV,
          FooterV
      }
  }
</script>