<template>
    <div class="form">
        <h3 class="form-title">Добавление {{ name }}</h3>
        <div class="form-block">
            <label class="form-label" for="form-select">Выберите категорию</label>
            <select v-if="name === 'расходов'" v-model.lazy="category" class="formText form-select" name="select" id="form-select">
                <option value="Еда">Еда</option>
                <option value="Одежда">Одежда</option>
                <option value="Развлечение">Развлечение</option>
                <option value="Подписки">Подписки</option>
                <option value="Транспорт">Транспорт</option>
                <option value="Прочее">Прочее</option>
            </select>
            <select v-if="name == 'доходов'" v-model.lazy="category" class="formText form-select" name="select" id="form-select">
                <option value="Зарплата">Зарплата</option>
                <option value="Стипендия">Стипендия</option>
                <option value="Родители">Родители</option>
                <option value="Подарок">Подарок</option>
                <option value="Прочее">Прочее</option>
            </select>
        </div>
        <div class="form-block">
            <label class="form-label"  for="form-price">Введите сумму</label>
            <input v-model="price" class="formText" type="text" placeholder="Сумма" id="form-price">
        </div>
        <div class="form-block">
            <label class="form-label"  for="form-date">Выберите дату</label>
            <input v-model="date" class="formText" type="date" name="" id="form-date">
        </div>
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
            date: '',
            formLabelExp: true,
            formLabelInc: false
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
                    price: Number(this.price),
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
        margin-bottom: 20px;
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

    .form-select {
        width: 100%;
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

    .categoty-text {
        color: #666;
    }

    .form-label {
        font-size: 12px;
        color: #666;
    }

    .form-block {
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin-bottom: 10px;
    }
</style>