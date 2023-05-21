<template>
    <div class="main">
        <div class="main-title">
            <h1>Счетчик финансов</h1>
        </div>
        <statisticsComponent />
        <div class="main-distribution">
            <div class="dist-income">
                <a @click="showIncome" href="#" class="main-btn main-btn-green">Доходы</a>
            </div>
            <div class="dist-expenses">
                <a @click="showExpenses" href="#" class="main-btn main-btn-red">Расходы</a>
            </div>
        </div>
        <div class="main-exp-inc">
            <div class="main-exp-inc-wrapper">
                <formComponent
                :name="name2"
                :link="link2"
                v-if="canSeeIncome"/>
                <formComponent
                :name="name1"
                :link="link1"
                v-if="canSeeExpenses" />
            </div>
        </div>
    </div>
</template>

<script>
import statisticsComponent from './statisticsComponent.vue';
import formComponent from './formComponent.vue';

export default {
    components: {
        statisticsComponent,
        formComponent,
    },
    data() {
        return {
            canSeeIncome: false,
            canSeeExpenses: true,
            name2: 'доходов',
            name1: 'расходов',
            link2: 'income',
            link1: 'expenses',
            k: 1
        }
    },
    methods: {
        showIncome() {
            this.canSeeIncome = true
            this.canSeeExpenses = false
        },
        showExpenses() {
            this.canSeeExpenses = true
            this.canSeeIncome = false
        }
    }
}
</script>

<style>

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-title {
    text-align: center;
    margin-bottom: 20px;
}

.main-distribution {
    display: flex;
    gap: 30px;
    margin: 20px 0;
}

.main-btn {
    padding: 8px 25px;
    border-radius: 5px;
    color: #222;
}

.main-btn-green {
    background-color: rgb(62, 197, 62);
}

.main-btn-red {
    background-color: rgb(210, 81, 81);
}
</style>