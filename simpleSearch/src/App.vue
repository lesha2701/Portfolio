<script>
  import Cars from './components/Cars.vue';
  import axios from 'axios';

  export default {
    data() {
      return {
        cars: [],
        carsQuery: [],
        queryName: '',
        queryPriceMin: '',
        queryPriceMax: '',
        query: ''
      }
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:3000/cars`);
        this.cars = res.data;
        console.log(this.cars)
      } catch (e) {
        console.log(e)
      }
    },
    components: {
      Cars
    },
    methods: {
      carsQuery() {
        if (this.queryName) {
          return this.cars.filter((car) => car.name.includes(this.queryName))
        }
        return this.cars
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="search">
        <input v-model="queryName" class="search-input" type="text" placeholder="Марка">
        <input v-model="queryPriceMin" class="search-input" type="text" placeholder="Мин. цена">
        <input v-model="queryPriceMax" class="search-input" type="text" placeholder="Макс. цена">
        <input v-model="query" class="search-input" type="text" placeholder="Мин. год">
        <input v-model="query" class="search-input" type="text" placeholder="Макс. год">
    </div>
    <Cars :cars="carsQuery" />
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Arial', sans-serif;
  }

  .container {
    width: 60%;
    margin: 0 auto;
  }

  .search {
        padding: 20px;
        background-color: #e6e6e6;
        width: auto;
        margin: 20px 0;
        border-radius: 12px;
        display: flex;
        justify-content: space-between;
    }

    .search-input {
        background-color: transparent;
        outline: none;
        border: none;
        background-color: #f0efef;
        padding: 10px;
    }

</style>
