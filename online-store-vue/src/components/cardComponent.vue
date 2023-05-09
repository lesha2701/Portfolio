<template>
    <article class="card">
        <img class="card__image" :src="image" alt="">
        <p class="card__name">{{ name }}</p>
        <p class="card__price">${{ price }}</p>
        <p class="card__descr">{{ descr }}</p>
        <a href="#" class="card__btn">Add in cart</a>
    </article>
</template>

<script>
    export default {
        props: [
            'id',
            'image',
            'name',
            'price',
            'descr'
        ]
    }
</script>

<style>
.card {
    padding: 16px;
}

.card__name {
    width: 227px;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.0275em;
    color: #19191D;
    margin: 12px 0 8px;
}

.card__price {
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 8px;
}

.card__descr {
    width: 227px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: 0.018em;
    color: #787885;
    margin-bottom: 12px;
    height: 41px;
}

.card__btn {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.0075em;
    color: #2264D1;
    text-decoration: none;
    padding: 6px 10px;
    border: 1px solid rgba(22, 64, 225, .3);
    border-radius: 5px; 
    text-align: center;
}

@media screen and (max-width: 1919px) {
    .card__name {
        width: 270px;
    }
}

@media screen and (max-width: 1675px) {
    .card__name {
        width: 190px;
        font-size: 14px;
    }

    .card__image {
        width: 180px;
    }

    .card__descr {
        font-size: 12px;
    }

    .card__price {
        width: 180px;
    }

    .card__descr {
        width: 180px;
    }
}
</style>