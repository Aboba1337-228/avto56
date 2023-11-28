<template>
  <div class="table">
    <div class="v-container">
      <div class="v-table__inner">
        <vSideBar />
        <div class="v-table__data">
          <h1 class="v-name__inpector">Раписание:</h1>
          <p>Инструктор: {{ tableResponse.incpector }}</p>
          <div class="v-table__params">
              <v-loader 
                v-if="load"
              />
              <div 
                v-bind:class="{'v-table__writing': true, 'v-table__load': load}">
                <vTable
                  params="all"
                  :nameUser="tableResponse.name" 
                  :table="tableResponse.table"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vTable from '@/components/Table/v-table.vue';
import vSideBar from '@/components/SideBar/v-side-bar.vue';
import API from '@/api/api';
import config from '@/config/config';
import vLoader from '../../components/Loader/v-loader.vue'

export default {
  components: {
    vTable,
    vSideBar,
    vLoader
  },

  data() {
    return {
      tableResponse: [],
      load: true
    }
  },

  mounted() {
      this.allTable()
  },

  methods: {
    async allTable() {
      API.post(`${config.api.url}/auth/table/all`)
      .then(response => {
        this.tableResponse = response.data
        this.load = false
      })
    }
  }
}

</script>

<style>
.v-table__inner {
  display: flex;
  justify-content: space-between;
}

.v-name__inpector {
  margin: 15px 0px;
}

.v-table__data {
  width: 980px;
  margin-left: 15px;
}

.v-table__params {
  position: relative;
  display: flex;
  justify-content: center;
}

.v-table__load {
  opacity: 0.5;
}

@media (max-width: 950px) {
  .v-table__data {
    margin: 0px 10px;
  }

  .v-table__writing {
    overflow-y: scroll;
    width: 550px;
  }
}

@media (max-width: 800px) {
  .v-table__writing {
    overflow-y: scroll;
    width: 450px;
  }
}

@media (max-width: 500px) {
  .v-table__writing {
    overflow-y: scroll;
    width: 350px;
  }
}

@media (max-width: 300px) {
  .v-table__writing {
    overflow-y: scroll;
    width: 300px;
  }
}
</style>
