<script setup>
  import Cars from './components/Cars.vue';
  import {ref, computed} from 'vue'

  const cars = ref([
    {
      id: 1,
      name: 'Hyundai Tucson',
      fuel: 'Дизель',
      price: 3600000,
      year: 2021,
      mileage: 17900,
      power: 186,
      country: 'Южная Корея',
      img: '/car1.jpg'
    },
    {
      id: 2,
      name: 'Skoda Fabia',
      fuel: 'Бензин',
      price: 250000,
      year: 2003,
      mileage: 181000,
      power: 75,
      country: 'Чехия',
      img: '/car2.jpg'
    },
    {
      id: 3,
      name: 'Infiniti FX30d',
      fuel: 'Дизель',
      price: 1600000,
      year: 2012,
      mileage: 214758,
      power: 238,
      country: 'Япония',
      img: '/car3.jpg'
    },
    {
      id: 4,
      name: 'Daewoo Nexia',
      fuel: 'Бензин',
      price: 130000,
      year: 2006,
      mileage: 250000,
      power: 	75,
      country: 'Южная Корея',
      img: '/car4.jpg'
    },
    {
      id: 5,
      name: 'Mitsubishi Pajero',
      fuel: 'Бензин',
      price: 310000,
      year: 2009,
      mileage: 	161000,
      power: 	165,
      country: 'Япония',
      img: '/car5.jpg'
    },
    {
      id: 6,
      name: 'Kia Spectra',
      fuel: 'Бензин',
      price: 250000,
      year: 2006,
      mileage: 	150000,
      power: 	101,
      country: 'Южная Корея',
      img: '/car6.jpg'
    },
    {
      id: 7,
      name: 'Volkswagen Jetta',
      fuel: 'Бензин',
      price: 450000,
      year: 2014,
      mileage: 	159877,
      power: 	122,
      country: 'Германия',
      img: '/car7.jpg'
    }
  ])

  const queryName = ref('');
  const queryPriceMin = ref('');
  const queryPriceMax = ref('');

  const queryCars = computed(() => {
    let c = cars.value;

    if (queryName.value){
      c = c.filter((car) => car.name.indexOf(queryName.value) !== -1)
    } else if (queryPriceMin.value || queryPriceMax.value) {
      c = c.filter((car) => ((car.price > queryPriceMin.value) || (car.price < queryPriceMax.value)))
    }

    return c;
  })

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
    <Cars :cars="queryCars" />
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
