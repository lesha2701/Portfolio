<template>
  <div>
    <h2>Weather in {{ city }}</h2>
    <ul>
      <li>Temperature: {{ temp }}</li>
      <li>Feels like: {{ feelsLike }}</li>
      <li>Humidity: {{ humidity }}</li>
    </ul>
  </div>
</template>

<script>

export default {
    props: [
        'city',
        'temp',
        'feelsLike',
        'humidity'
    ]
}
</script>

<style>
    
</style>