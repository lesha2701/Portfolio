<template>
    <header class="header">
        <div class="header__start">
            <div class="header__logo">
                <img src="/W.png" alt="">
            </div>
            <div class="header__nav">
                <ul class="nav__items">
                    <li class="nav__item"><a href="#" class="nav__item-link">Sell on Shopka</a></li>
                    <li class="nav__item"><a href="#" class="nav__item-link">Register</a></li>
                </ul>
            </div>
        </div>
        <div class="header__search">
            <img src="/Vector.png" alt="#" class="search__icon-left">
            <input 
            v-model="search"
            type="text" placeholder="Search" class="search__text">
            <img 
            @click="clearSearch"
            src="/Vector1.png" alt="#" class="search__icon-right">
        </div>
        <div class="header__profile">
            <a href="#" class="profile__btn">Sign In</a>
            <a href="#" class="profile__btn">My Cart</a>
        </div>
  </header>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        }
    },
    methods: {
        clearSearch() {
            this.search = ''
        }
    }
}
</script>

<style>
    .header {
        display: flex;
        align-items: center;
        padding: 16px;
        justify-content: space-between;
    }

    .header__start {
        display: flex;
        align-items: center;
    }

    .nav__items {
        display: flex;
        gap: 20px;
        list-style: none;
    }

    .nav__item-link {
        text-decoration: none;
        letter-spacing: 0.004em;
        font-size: 18px;
        line-height: 158%;
        font-weight: 500;
        color: #5A5B6A;
        margin-left: 22px;
    }

    .header__search {
        display: flex;
        align-items: center;
        padding: 8px 18px;
        background: #EDEDF0;
        border-radius: 99px;
    }

    .search__text {
        background-color: transparent;
        border: none;
        outline: none;
        width: 600px;
        font-weight: 400;
        font-size: 18px;
        line-height: 158%;
        color: #19191D;
    }

    .search__icon-left {
        margin-right: 12px;
    }

    .search__icon-right {
        cursor: pointer;
        margin-left: 12px;
    }

    .header__profile {
        display: flex;
        gap: 20px;
    }

    .profile__btn {
        font-weight: 700;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.0075em;
        color: #2264D1;
        text-decoration: none;
        padding: 8px 12px;
        border: 2px solid rgba(22, 64, 225, .3);
        border-radius: 5px;
    }
</style>