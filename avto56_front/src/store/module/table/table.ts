import API from '@/api/api'
import config from '@/config/config'
import router from '@/router'
import iTableAdmin from '@/store/Interface/interfaceTableAdmin'
import {Module} from 'vuex'

const TableAdmin: Module<iTableAdmin, {}> = {
    state: {
        table: [],
        load: true,
        message: ""
    },

    mutations: {
        updateTableAdmin(state: any, table: object) {
            state.table = table
        },

        updateLoad(state: any, load: boolean) {
            state.load = load
        },

        updateMessage(state: any, message: string) {
            state.message = message
        }
    },

    actions: {
        fetchTableAdmin({commit, state}, data) {
            API.post(`${config.api.url}/auth/table/admin/index`,
            {
                incpector: data.name,
                week: data.week,
                year: data.year,
            })
            .then(response => {
                if(response) {                    
                    commit('updateTableAdmin', response.data)
                    commit('updateLoad', false)
                    if(response.data.table.length == 0) {
                        commit('updateMessage', "Таблица с расписание не найдена!")
                    } else {
                        commit('updateMessage', "")
                    }
                }
            })
        }
    },

    getters: {
        TableAdmin(state: any) {
            return state.table
        },

        LoadAdmin(state: any) {
            return state.load
        },

        MessageAdmin(state: any) {
            return state.message
        }
    }
}

export default TableAdmin