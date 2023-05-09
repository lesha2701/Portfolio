<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </li>
  </ul>
  <input type="text" v-model="name">
  <input type="text" v-model="price">
  <a href="#" @click="addData">Добавить</a>
</template>

<script>
import axios from 'axios'

export default {
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
  },
  methods: {
    addData() {
      axios
      .post('http://localhost:3001/product', {
        id: this.id,
        name: this.name,
        price: this.price
      })
      .then(
        this.addId(),
        axios
        .get('http://localhost:3001/product')
        .then((response) => {
          this.products = response.data
      })
      );
    },
    addId() {
      this.id += 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
