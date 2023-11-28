<template>
    <div class="v-table-row">
        <div class="row">{{ tableData.id }}</div>
        <div class="row">{{ tableData.name }}</div>
        <div class="row">{{ tableData.username }}</div>
        <div class="row">{{ tableData.role }}</div>
        <div class="row">{{ tableData.incpector }}</div>
        <div class="row">{{ tableData.created_at }}</div>
        <div class="row">{{ tableData.updated_at }}</div>
    </div>
</template>

<script>

export default {
    props: {
        tableData: Object,
    },
}
</script>

<style scoped>
.v-table-row {
    display: flex;
    justify-content: space-around;
}

.row {
    flex-basis:25%;
    padding: 8px 16px;
    text-align: left;
    font-size: 14px;
    width: 112px;
    border-left: solid 1px #e7e7e7;
    border-right: solid 1px #e7e7e7;
    border-bottom: solid 1px #e7e7e7;
    word-break: break-all;
}
.v-table__user {
    background: rgb(200, 200, 200);
}

</style>