<template>
    <div class="v-cabet-all">
        <div class="v-container">
            <div class="v-inner-top">
                <vSideBarVue />
                <div class="v-cabet-all__data">
                    <h2>Список курсантов</h2>
                    <div 
                        v-bind:class="{'v-cabet-all__table': true, 'v-cabet-all__load': load}">
                        <vLoaderVue 
                            v-if="load"
                        />
                        <div class="v-cabet-all__params">
                            <vTableUsersVue 
                                :table="table"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vSideBarVue from '@/components/SideBar/v-side-bar.vue'
import vTableUsersVue from '@/components/Table/Users/v-table-users.vue'
import vLoaderVue from '@/components/Loader/v-loader.vue'
import API from '@/api/api'
import config from '@/config/config'

export default {
    components: {
        vSideBarVue,
        vTableUsersVue,
        vLoaderVue
    },

    data() {
        return {
            load: true,
            table: []
        }
    },

    mounted() {
        this.AllUsers()
    },

    methods: {
        AllUsers() {
            API.post(`${config.api.url}/auth/users/all`)
            .then(response => {
                this.table = response.data
                this.load = false
            })
        }
    }
}
</script>

<style scoped>
.v-cabet-all__data {
    width: 980px;
    margin: 20px;
}

.v-cabet-all__table {
    position: relative;
    display: flex;
    justify-content: center;
}

.v-cabet-all__load {
    opacity: 0.5;
}

@media (max-width: 950px) {
  .v-cabet-all__data {
    margin: 0px 10px;
  }

  .v-cabet-all__params {
    overflow-y: scroll;
    width: 550px;
  }
}

@media (max-width: 800px) {
  .v-cabet-all__params {
    overflow-y: scroll;
    width: 450px;
  }
}

@media (max-width: 500px) {
  .v-cabet-all__params{
    overflow-y: scroll;
    width: 350px;
  }
}

@media (max-width: 300px) {
  .v-cabet-all__params {
    overflow-y: scroll;
    width: 300px;
  }
}
</style>