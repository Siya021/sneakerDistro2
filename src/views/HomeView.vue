<template>
  <div>
    <Picture />
    <div class="row">
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <h1 class="lead">Coming Soon</h1>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <Puma />
    </div>
  </div>
</template>

<script>
import Picture from '../components/Picture.vue';
import Puma from '@/components/Puma.vue';
export default {
  components: {
    Picture,
    Puma
  }
}
</script>

<style scoped>
.lead {
  background-color: orange;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.row {
  text-align: center;
  border: solid orange;
}
</style>
