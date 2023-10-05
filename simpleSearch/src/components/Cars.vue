<script>
import { defineProps} from 'vue';
import Car from './Car.vue';

export default {
    data() {
        return {

        }
    },
    props: {
        cars: Array
    },
    components: {
        Car
    }
}
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