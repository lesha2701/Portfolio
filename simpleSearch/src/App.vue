<script setup>
  import Cars from './components/Cars.vue';
  import searchBar from './components/searchBar.vue';
  import {ref} from 'vue'

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
</script>

<template>
  <div class="container">
    <searchBar />
    <Cars :cars="cars" />
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
</style>
