<template>
  <headerComponent />
  <div class="container">
    <div class="catalog">
      <filterComponent />
      <catalogComponent />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import headerComponent from './components/headerComponent.vue'
import filterComponent from './components/filterCompopnent.vue'
import catalogComponent from './components/catalogComponent.vue'

export default {
  components: {
    headerComponent,
    filterComponent,
    catalogComponent
  },
  data() {
    return {
      products: [],
      name: '',
      price: 0,
      id: 145
    }
  },
  mounted() {
    axios
    .get('http://localhost:3001/product')
    .then((response) => {
      this.products = response.data
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
}

#app {
  font-family: 'Inter', sans-serif;
  max-width: 1920px;
  margin: 0 auto;
  color: #5A5B6A;
}

.container {
  padding: 30px 213px;
}

.catalog {
  display: flex;
}
</style>
