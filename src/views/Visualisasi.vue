<template>
    <HeaderV />
    <div class="Visualisasi">
      <h1>This is an Visualisasi page</h1>
    </div>
    <FooterV />
</template>

<script>
// @ is an alias to /src
import HeaderV from '@/components/HeaderV.vue'
import FooterV from '@/components/FooterV.vue'


export default {
  name: 'Visualisasi',
  components: {
    HeaderV,
    FooterV

  }
}
</script>