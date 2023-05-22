<template>
    <div class="statistics">
        <div class="statistics-title">
            <h3 class="statistics-title-text">Информация о финансах</h3>
            <a @click="updateInfo" href="#">Обновить статистику</a>
        </div>
        <div class="statistics-block">
            <div class="statistics-income statistics-block-item">
                <p>Доходы</p>
            </div>
            <div class="statistics-expenses statistics-block-item">
                <p>Расходы</p>
                <div class="allExp">
                    <p>Общая сумма трат: {{ sumExp }}</p>
                </div>
                <div class="select-exp">
                    <p>Максимальная и минимальная трата</p>
                    <div class="select-exp-option">
                        <select v-model.lazy="category" class="form-stat" name="select" id="form-select">
                            <option value="Еда">Еда</option>
                            <option value="Одежда">Одежда</option>
                            <option value="Развлечение">Развлечение</option>
                            <option value="Подписки">Подписки</option>
                            <option value="Транспорт">Транспорт</option>
                            <option value="Прочее">Прочее</option>
                        </select>
                        <a @click="getInfo" href="#">Узнать</a>
                    </div>
                    <div v-if="canSeeInfo" class="maxMinInfo">
                        <p>Максимальная трата на еду: {{ max }} руб.</p>
                        <p>Миниммальная трата на еду: {{ min }} руб.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            category: '',
            canSeeInfo: false,
            max: '',
            min: '',
            sumExp: this.getSum(),
            expenses: []
        }
    },
    mounted() {
        axios.get('http://localhost:3000/expenses')
        .then(response => {
            this.expenses = response.data;
        });
    },
    methods: {
        getInfo() {
            this.canSeeInfo = true;
            axios
            .get(`http://localhost:3000/expenses?category=${this.category}&_sort=price&_order=desc`)
            .then((response) => {
                this.max = response.data[0].price
            });
            axios
            .get(`http://localhost:3000/expenses?category=${this.category}&_sort=price&_order=asc`)
            .then((response) => {
                this.min= response.data[0].price
            })
        },
        updateInfo() {
            this.sumExp = 0
            axios
            .get(`http://localhost:3000/expenses`)
            .then(response => {
                response.data.forEach(element => {
                    this.sumExp += element.price
                });
            });
        },
        getSum() {
            let sum = 0;
            this.expenses.forEach(element => {
                sum += element.price
            });
            return sum;
        }
    }
}
</script>

<style>
    .statistics {
        border: 1px solid #ccc;
        width: 90%;
        padding: 0 20px;
        margin-bottom: 15px;
    }

    .statistics-title {
        text-align: center;
        margin: 10px 0;
    }

    .statistics-title-text {
        margin-bottom: 5px;
    }

    .statistics-block {
        display: flex;
    }

    .statistics-block-item {
        width: 50%;;
    }

    .form-stat {
        background-color: #333;
        outline: none;
        border: none;
        padding: 5px 5px;
        color: #ccc;
        transition: all .3s;
        width: 150px;
    }
</style>