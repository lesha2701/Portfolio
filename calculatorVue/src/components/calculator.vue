<template>
    <div class="calculator">
        <input class="calculatorInput" type="text" value="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                result: '',
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                operations: ['+', '-', '*', '/']
            }
        }
    }
</script>

<style>

</style>