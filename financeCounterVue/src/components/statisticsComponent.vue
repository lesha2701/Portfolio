<template>
    <div class="statistics">
        <div class="statistics-title">
            <h3 class="statistics-title-text">Информация о финансах</h3>
            <a @click="updateInfo" href="#" class="statistics-title-update">Обновить статистику</a>
            <p class="statistics-title-total">Общая сумма: {{ sumInc - sumExp }} руб.</p>
        </div>
        <div class="statistics-block">
            <div class="statistics-income statistics-block-item">
                <p class="stat-title">Доходы</p>
                <div class="allExp">
                    <p class="stat-total">Общая сумма доходов: {{ sumInc }} руб.</p>
                </div>
                <div class="select-exp">
                    <p>Информация по отдельной категории:</p>
                    <div class="select-exp-option">
                        <select v-model.lazy="categoryInc" class="form-stat" name="select" id="form-select">
                            <option value="Зарплата">Зарплата</option>
                            <option value="Стипендия">Стипендия</option>
                            <option value="Родители">Родители</option>
                            <option value="Подарок">Подарок</option>
                            <option value="Прочее">Прочее</option>
                        </select>
                        <a @click="getInfoInc" href="#">Узнать</a>
                    </div>
                    <div v-if="canSeeInc" class="maxMinInfo">
                        <ul class="infoItems">
                            <li>Максимальный доход: {{ maxInc }} руб.</li>
                            <li>Миниммальный доход: {{ minInc }} руб.</li>
                            <li>Дата последнего дохода: {{ dateInc }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="statistics-expenses statistics-block-item">
                <p class="stat-title">Расходы</p>
                <div class="allExp">
                    <p class="stat-total">Общая сумма трат: {{ sumExp }} руб.</p>
                </div>
                <div class="select-exp">
                    <p>Информация по отдельной категории:</p>
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
                        <ul class="infoItems">
                            <li>Максимальная трата: {{ max }} руб.</li>
                            <li>Миниммальная трата: {{ min }} руб.</li>
                            <li>Дата последней траты: {{ date }}</li>
                        </ul>
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
            categoryInc: '',
            canSeeInc: false,
            max: '',
            min: '',
            maxInc: '',
            minInc: '',
            date: '',
            dateInc: '',
            sumExp: 0,
            sumInc: 0,
            expenses: []
        }
    },
    mounted() {
        axios
        .get(`http://localhost:3000/expenses`)
        .then(response => {
            response.data.forEach(element => {
                this.sumExp += element.price
            });
        });
        axios
        .get(`http://localhost:3000/income`)
        .then(response => {
            response.data.forEach(element => {
                this.sumInc += element.price
            });
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
            });
            axios
            .get(`http://localhost:3000/expenses?_sort=date&_order=desc`)
            .then((response) => {
                this.date = response.data[0].date
            });
        },
        getInfoInc() {
            this.canSeeInc = true;
            axios
            .get(`http://localhost:3000/income?category=${this.categoryInc}&_sort=price&_order=desc`)
            .then(response => {
                this.maxInc = response.data[0].price
            });
            axios
            .get(`http://localhost:3000/income?category=${this.categoryInc}&_sort=price&_order=asc`)
            .then(response => {
                this.minInc = response.data[0].price
            });
            axios
            .get(`http://localhost:3000/income?_sort=date&_order=desc`)
            .then((response) => {
                this.dateInc = response.data[0].date
            });
        },
        updateInfo() {
            this.sumExp = 0
            this.sumInc = 0
            axios
            .get(`http://localhost:3000/expenses`)
            .then(response => {
                response.data.forEach(element => {
                    this.sumExp += element.price
                });
            });
            axios
            .get(`http://localhost:3000/income`)
            .then(response => {
                response.data.forEach(element => {
                    this.sumInc += element.price
                });
            })
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
        margin: 10px 0 5px;
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

    .statistics-block-item {
        box-sizing: border-box;
        padding: 10px 5px;
    }

    .stat-title {
        font-size: 18px;
        margin-bottom: 10px;
        text-decoration: underline;
    }

    .stat-total {
        margin-bottom: 10px;
    }

    .select-exp {
        display: flex;
        flex-direction: column;
        gap: 5px;    
    }

    .select-exp-option {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .statistics-title-total {
        font-size: 20px;
        margin-top: 10px;
    }

    .infoItems {
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .infoItems li {
        padding: 0;
    }
</style>