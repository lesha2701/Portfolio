<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    car: Object
})
</script>

<template>
    <div class="car">
        <img class="car-img" :src="car.img" alt="">
        <div class="car-info">
            <div class="car-info--left">
                <p class="car-info--name">{{car.name}}, {{ car.year }}</p>
                <p class="car-info-descr">{{ car.mileage }} км, {{ car.power }} л.с., {{ car.fuel }}</p>
            </div>
            <div class="car-info--right">
                <p class="car-info--price">{{ car.price }} руб.</p>
                <p class="car-info--estimation">нормальная цена</p>
            </div>
        </div>
    </div>
</template>

<style>
.car {
    display: flex;
    gap: 30px;
    border-radius: 12px;
    transition: all 0.2s;
    padding: 20px;
    border-top: 1px solid #ededed;
}

.car:hover {
    background-color: #ededed;
}

.car-info {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    float: right;
}

.car-img {
    width: 272px;
    height: 204px;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
}

.car-info--name {
    font-size: 18px;
    margin-bottom: 10px;
    color: #000;
}

.car-info-descr {
    font-size: 15px;
    opacity: 0.9;
}

.car-info--price {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
}

.car-info--estimation {
    color: hsl(152, 53%, 46%);
    background: hsl(132, 65%, 95%);
    padding: 5px;
    border-radius: 12px;
    font-size: 13px;
    padding: 4px 10px
}
</style>