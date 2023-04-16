<template>
    <h2 class="title">Узнай погоду в любом городе</h2><br/>
    <div>
        <input v-model="city" type="text" class="text" placeholder="Город...">
        <button v-if="canSee" @click="getWeatherData" class="btn"><span>Узнать погоду</span></button>
        <weatherComponent 
        :city="this.city"
        :temp="this.temp.toFixed(1)"
        :feelsLike="this.feelsLike.toFixed(1)"
        :humidity="this.humidity"
        v-if="temp"
        />
    </div>
</template>

<script>
import {gsap} from 'gsap';
import axios from 'axios';
import weatherComponent from './weather/weatherComponent.vue';

export default {
    components: {
        weatherComponent
    },
    data() {
        return {
            city: '',
            canSee: false,
            canAnimation: 0,
            temp: null,
            feelsLike: null,
            humidity: null
        }
    },
    computed: {
        textLength() {
            return this.city.length;
        }
    },
    watch: {
        textLength() {
            this.canSee = this.textLength > 0;
            if (this.canSee == false) {
                this.canAnimation = 0
            }
        }
    },

    updated() {
        if (this.canSee && this.canAnimation == 0) {
            const tl = gsap.timeline();

            tl
            .from('.btn', {
                opacity: 0,
                y: -15,
                duration: .6,
            })
            this.canAnimation += 1
        }
    },
    methods: {
        async getWeatherData() {
            const apiKey = '798d7ec6a2d1c7d510730b228d3c8a95';
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`)
            this.temp = response.data.main.temp - 273
            this.feelsLike = response.data.main.feels_like - 273
            this.humidity = response.data.main.humidity
        },
        seeWeather() {
            console.log('123')
        }
    }
}
</script>

<style>
    .text {
    background-color: transparent;
    outline: none;
    border: 1px solid #aaa;
    padding: 10px 15px;
    border-radius: 10px;
    color: #aaa;
    }

    .text:focus {
        border: 1px solid #fff;
    }

    .title {
        position: relative;
    }

    .btn {
        width: 120px;
        margin-left: 10px;
        transition: all .3s;
        border-radius: 10px;
        border: 2px solid#269926;
        background-color: transparent;
        position: relative;
        padding: 10px 15px;
        cursor: pointer;
    }

    .btn span {
        color: #aaa;
        transition: .4s ease-in-out;

    }

    .btn::before {
        content: '';
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        height: 106%;
        width: 0;
        background-color: #269926;
        border-radius: 5px;
        display: block;
        transition: .4s ease-in-out;
    }

    .btn:hover::before {
        width: 116px;
    }

    .btn:hover span {
        color: #232323;
    }

</style>