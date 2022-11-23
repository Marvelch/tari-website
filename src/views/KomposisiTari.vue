<template>
  <HeaderV />
  <div class="">
    <h1 class="font-bold px-11 pt-11 pb-11 text-2xl">KOMPOSISI TARI</h1>
  </div>
  <div class="container mx-auto mb-9 pb-32 text-left">
    <!-- Gerak -->
    <h2 class="font-bold mb-2 text-lg">GERAK</h2>
    <div class="md:p-1 dark:bg-red-800"></div>
    <div class="text-left ml-9 mt-11">
      <h4 class="font-bold">Desain Atas</h4>
      <small class="ml-1">Penjelasan</small>
    </div>
    <div class="md:p-1 dark:bg-red-800 mt-10"></div>
    <div class="text-left ml-9 mt-11">
      <h4 class="font-bold">Desain Dramatik</h4>
      <small class="ml-1">Penjelasan</small>
    </div>
    <!-- End Gerak -->
    <!-- Pentas -->
    <h2 class="font-bold mb-2 text-lg mt-12">PENTAS</h2>
    <div class="md:p-1 dark:bg-red-800"></div>
    <div class="text-left ml-9 mt-11">
      <h4 class="font-bold">Desain Atas</h4>
      <small class="ml-1">Penjelasan</small>
    </div>
    <div class="md:p-1 dark:bg-red-800 mt-10"></div>
    <div class="text-left ml-9 mt-11">
      <h4 class="font-bold">Desain Dramatik</h4>
      <small class="ml-1">Penjelasan</small>
    </div>
    <!-- End Pentas -->
  </div>
  <FooterV />
</template>

<script>
  // @ is an alias to /src
  import HeaderV from '@/components/HeaderV.vue'
  import FooterV from '@/components/FooterV.vue'

  export default {
    name: 'KomposisiTari',
    components: {
      HeaderV,
      FooterV
    }
  }
</script>