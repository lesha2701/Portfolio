<template>
    <div class="form">
        <h3 class="form-title">Добавление {{ name }}</h3>
        <input v-model="category" class="formText" type="text" placeholder="Категория">
        <input v-model="price" class="formText" type="text" placeholder="Сумма">
        <input v-model="date" class="formText" type="date" name="" id="">
        <button @click="addItem" class="formBtn">Добавить</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: [
        'name',
        'link'
    ],
    data() {
        return {
            category: '',
            price: '',
            date: ''
        }
    },
    methods: {
        addItem() {
            axios.get(`http://localhost:3000/${this.link}`)
            .then(response => {
                const maxIdObj = response.data.reduce((acc, obj) => obj.id > acc.id ? obj : acc, { id: -1 });
                axios.post(`http://localhost:3000/${this.link}`, {
                    id: maxIdObj.id + 1,
                    category: this.category,
                    price: this.price,
                    date: this.date
                })
                .then(response => console.log(response),
                this.category = '',
                this.price = '',
                this.date = '')
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        }
    }
}
</script>

<style>
    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid #eee;
        padding: 20px;
        border-radius: 10px;
    }

    .formText {
        background-color: #333;
        outline: none;
        border: none;
        padding: 15px 10px;
        color: #ccc;
        transition: all .3s;
        width: 250px;
    }

    .formText:focus {
        border-radius: 7px;
    }

    .formBtn {
        align-self: center;
        padding: 10px;
        background-color: #c6a94b;
        border: none;
        transition: all .3s;
        font-size: 16px;
        margin-top: 15px;
        width: 150px;
    }

    .formBtn:hover {
        border-radius: 7px;
    }

    .form-title {
        align-self: center;
        margin-bottom: 15px;
    }
</style>