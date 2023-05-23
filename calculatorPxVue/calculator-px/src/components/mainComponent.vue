<template>
    <div class="container">
        <div class="calc">
            <div class="calc__title">
                <h2 class="calc__title-text">Конвентатор пикселей</h2>
            </div>
            <div class="calc__form">
                <div class="form-counter">
                    <label class="form-text" for="form-count">Введите количество пикселей</label>
                    <input v-model="count" class="form-count" type="text" placeholder="Количество" id="form-count">
                </div>
                <div class="form-counter">
                    <label class="form-text" for="form-count">Во что конвертируем</label>
                    <select v-model.lazy="category" class="form-count" id="form-select">
                        <option value="Em">Em</option>
                        <option value="Сантиметр">Сантиметры</option>
                        <option value="Пунктов">Пункты</option>
                    </select>
                </div>
            </div>
            <div @click="getResult" class="calc-result">
                <a class="form-btn" href="#">Вычислить</a>
            </div>
            <div v-if="canSee" class="calc-finish">
                <P>Результат:</P>
                <div class="calc-fonish-block">
                    <p>{{ result }} {{ category }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            category: '',
            result: 0,
            canSee: false
        }
    },
    methods: {
        getResult() {
            this.canSee = !this.canSee
            if (this.category === 'Em') {
                this.result = (this.count / 16).toFixed(2)
            } else if (this.category === 'Сантиметр') {
                this.result = (this.count / 38).toFixed(2)
            } else {
                this.result = (this.count / 1.3).toFixed(2) 
            }
        }
    }
}
</script>

<style>
    .container {
        border: 1px solid #eee;
        width: 30%;
        margin: 0 auto;
        padding: 10px;
    }

    .calc__title-text {
        text-align: center;
    }

    .calc__title {
        margin-bottom: 10px;
    }

    .form-counter {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .form-count {
        color: #eee;
        align-self: flex-start;
        padding: 10px 15px;
        outline: none;
        border: none;
        background-color: #333;
        font-size: 16px;
    }

    .form-text {
        color: #777;
        font-size: 12px;
        margin-bottom: 3px;
    }

    .calc__form {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .calc {
        display: flex;
        flex-direction: column;
    }

    .calc-result {
        margin: 20px 0 10px;
        padding: 10px 20px;
        background-color: rgb(44, 206, 44);
        align-self: flex-start;
        cursor: pointer;
    }

    .calc-result a {
        text-decoration: none;
        color: #333;
    }
</style>