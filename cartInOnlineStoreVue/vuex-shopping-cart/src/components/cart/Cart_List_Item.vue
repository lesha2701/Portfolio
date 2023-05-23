<template>
    <div class="box">
      <div class="cart-item__details">
        <p class="is-inline">{{cartItem.title}}</p>
        <div>
          <span class="cart-item--price has-text-info has-text-weight-bold">
            ${{cartItem.price}} X {{cartItem.quantity}}
          </span>
          <a href="#" @click="addCartItem(cartItem)">Добавить</a>
          <a href="#" @click="removeCartItem(cartItem)">Удалить</a>
        </div>
        
      </div>
    </div>
  </template>
  <script>
  import { mapActions } from 'vuex';
  export default {
    name: 'CartListItem',
    props: ['cartItem'],
    methods: {
      ...mapActions([
        'addCartItem',
        'removeCartItem'
      ])
    }
  }
  </script>