<template>
    <div class="products__list">
        <ul class="products__items">
            <li v-for="product in products"
            :key="product.id"
            class="products__item">
                <cardComponent 
                :id="product.id"
                :image="product.image"
                :name="product.name"
                :price="product.price"
                :descr="product.descr"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import cardComponent from './cardComponent.vue';

export default {
    components: {
        cardComponent
    },
    mounted() {
        axios
        .get('http://localhost:3001/product')
        .then((response) => {
            this.products = response.data
            console.log(response.data)
        })
    },
    data() {
        return {
            products: []
        }
    }
}
</script>

<style>
.products__list {
    width: auto;
    box-shadow: 0px 1px 2px rgba(58, 58, 68, 0.24), 0px 2px 4px rgba(90, 91, 106, 0.24);
    border-radius: 8px;
}

.products__items {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0;
    padding: 16px;
}
</style>