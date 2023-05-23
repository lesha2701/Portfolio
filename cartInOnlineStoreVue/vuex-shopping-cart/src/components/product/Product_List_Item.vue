<template>
    <div class="card">
      <div class="card-content">
        <div class="content">
          <h4>{{ productItem.title }}</h4>
          <br />
          <img :class="item-img" :src="productItem.image_tag" class="mt-4">
          <!-- <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
            class="image"
            v-for="image, imageIndex in images"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
          ></div> -->
        </div>
        <div class="media">
          <div class="media-right">
            <a class="button is-primary is-light">
              <strong>$ {{ productItem.price }}</strong>
            </a>
          </div>
          <div>
            <a
            class="button is-rounded is-pulled-right"
            @click="addCartItem(productItem)"
            >
            <strong>Add to Cart</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
import VueGallery from 'vue-gallery';
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  }, 
  // data() {
  //   return {
  //     images: ['1.png', '1_1.jpg', '1_2.jpeg'],
  //     index: null
  //   }
  // },
  // components: {
  //   'gallery': VueGallery
  // },
  
};
</script>

<style>
  .item-img {
    width: 60%;
  }
</style>