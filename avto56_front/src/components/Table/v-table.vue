<template>
    <div class="v-table">
        <div class="v-table__header">
            <p>Время</p>
            <p>Понедельник</p>
            <p>Вторник</p>
            <p>Среда</p>
            <p>Четверг</p>
            <p>Пятница</p>
            <p>Суббота</p>
            <p>Воскресенье</p>
        </div>
        <div class="v-table__body" v-if="params == 'all'">
           <vTableRow
            v-for="row in table"
            :tableData="row"
            :name="nameUser"
            :key="row.id"
           />
        </div>
        <div class="v-table__body" v-if="params == 'update'">
           <vTableRowRecordVue
            v-for="row in table"
            :tableData="row"
            :key="row.id"
           />
        </div>
        <div class="v-table__body" v-if="params == 'update_admin'">
           <vTableRowRecordAdminVue
            v-for="row in table"
            :tableData="row"
            :users="users"
            :key="row.id"
           />
        </div>
    </div>
</template>

<script>
import vTableRowRecordAdminVue from './v-table-row-record-admin.vue'
import vTableRowRecordVue from './v-table-row-record.vue'
import vTableRow from './v-table-row.vue'

export default {
    name: "v-table",
    components: {
        vTableRow,
        vTableRowRecordVue,
        vTableRowRecordAdminVue
    },

    props: {
        table: Object,
        params: String,
        nameUser: String,
        users: Object
    },
}
</script>

<style scoped>
.v-table {
    max-width: 900px;
    width: 900px;
    margin: 50px auto;
}

.v-table__header {
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px #e7e7e7;
}

.v-table__header p {
    flex-basis: 25%;
    text-align: center;
    margin-bottom: 8px;
    font-size: 14px;
}

@media (max-width: 1100px) {
    .v-table {
        width: 900px;
    }

    .v-table__header p {
        font-size: 14px;
    }
}
</style>