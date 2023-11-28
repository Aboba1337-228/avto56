
<template>
    <div class="v-schedule-name">
        <vModalVue
            :users="TableAdmin.users" 
            v-if="Modal" />
        <div class="v-container">
            <div class="v-inner-top">
                <vSideBarVue />
                <div 
                v-bind:class="{'v-schedule-name__data': true, 'v-schedule-name__load': LoadAdmin}">
                    <h2>Расписание: {{ $route.params.name }} </h2>
                    <p>Неделя: {{ $route.params.week }} </p>
                    <vLoaderVue 
                        v-if="LoadAdmin"
                    />
                    <div class="v-schedule-name__items">
                        <h3 class="v-schedule-name__error">{{ MessageAdmin }}</h3>
                        <vTable
                            :table="TableAdmin.table"
                            params="update_admin"
                            :nameUser="Role"
                            :users="TableAdmin.users"
                        />
                    </div>
                        
                        <div class="v-pagination__container">
                            <p>Выбор недели:</p>
                            <div class="v-table__pagination">
                                <router-link 
                                    :to="'/schedule/incpector/'+$route.params.name+'/'+$route.params.year+'/'+page" 
                                    v-bind:class="{'page': true}" 
                                    v-for="page in 52"
                                    :key="page"
                                    @click.prevent="fetchTableAdmin({
                                        'name': $route.params.name,  
                                        'week': `${page}`, 
                                        'year': $route.params.year
                                    })"
                                >{{page}}</router-link>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSideBarVue from '@/components/SideBar/v-side-bar.vue'
import vLoaderVue from '@/components/Loader/v-loader.vue'
import vTable from '@/components/Table/v-table.vue'
import { mapActions, mapGetters } from 'vuex'
import vModalVue from '@/components/Modal/v-modal.vue'

export default {
    components: {
        vSideBarVue,
        vLoaderVue,
        vTable,
        vModalVue,
    },

    computed: mapGetters(['Role', 'Modal', 'TableAdmin', 'LoadAdmin', 'MessageAdmin']),
    methods: {
        ...mapActions(['fetchTableAdmin']),
        submit(page) {
            this.fetchTableAdmin({
                'name': this.$route.params.name,  
                'week': `${page}`, 
                'year': this.$route.params.year})
        }
    },
    mounted() {
        this.fetchTableAdmin({
            "name": this.$route.params.name,  
            "week": this.$route.params.week, 
            "year": this.$route.params.year})
    },

}
</script>

<style scoped>
.v-schedule-name__data {
    margin: 20px;
    width: 980px;
    position: relative;
}

.v-schedule-name__load {
    opacity: 0.6;
} 

.v-schedule-name__error {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    top: 170px;
    color: #ff0000;
}

.v-pagination__container {
    max-width: 320px;
    margin: 0 auto;
    margin-top: 100px;
}

.v-table__pagination {
    display: flex;
    overflow-y: scroll; 
    width: 300px;
    height: 60px;
    background: rgb(254, 254, 254);
}

.page {
    width: 100%;
    height: 30px;
    border: solid 1px #e7e7e7;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 5px 2.5px;
    padding: 0px 12px;
    text-decoration: none;
    color: #000;
}

.page:hover {
    background: #eaeaea;
    cursor: pointer;
}

@media (max-width: 950px) {
  .v-schedule-name__data {
    margin: 0px 10px;
  }

  .v-schedule-name__items {
    overflow-y: scroll;
    width: 550px;
  }
}

@media (max-width: 800px) {
  .v-schedule-name__items {
    overflow-y: scroll;
    width: 450px;
  }
}

@media (max-width: 500px) {
  .v-schedule-name__items{
    overflow-y: scroll;
    width: 350px;
  }
}

@media (max-width: 300px) {
  .v-schedule-name__items {
    overflow-y: scroll;
    width: 300px;
  }
}
</style>