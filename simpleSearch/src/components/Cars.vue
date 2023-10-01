<script setup>
import { defineProps} from 'vue';
import Car from './Car.vue';

const props = defineProps({
    cars: Array
})
</script>

<template>
    <div>
        <ul>
            <li
            v-for="car in cars"
            :key="car.id"
            >
            <Car :car="car"></Car>
            </li>
        </ul>
    </div>
</template>

<style>
ul {
    list-style: none;
    display: flex;
    flex-direction: column;
}
</style>