<template>
    <button class="v-btn">
        {{ text }}
    </button>
</template>

<script lang="ts">

export default {
    props: {
        text: String
    }
}
</script>


<style scoped>
.v-btn {
    background: #f00000;
    font-size: 18px;
    color: #fff;
    padding: 10px 20px;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s;
    width: 120px;
    margin: 9px 0px;
}

.v-btn:hover {
    background: #f93c3c;
}
</style>