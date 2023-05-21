<template>
    <div class="statistics">
        <div class="statistics-title">
            <h3 class="statistics-title-text">Информация о финансах</h3>
            <a href="#">Обновить статистику</a>
        </div>
        <div class="statistics-block">
            <div class="statistics-income statistics-block-item">
                <p>Доходы</p>
            </div>
            <div class="statistics-expenses statistics-block-item">
                <p>Расходы</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
        flex-grow: 1;
    }
</style>