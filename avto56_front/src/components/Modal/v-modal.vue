<template>
    <div class="modal">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Изминение раписания</h3>
                <a 
                    @click.prevent="close()" 
                    title="Close" 
                    class="close">×</a>
            </div>
            <div class="modal-body">
                <select v-model="name">
                    <option value="">Освободить</option>
                    <option value="Закрыто админом">Закрыть</option>
                    <option
                        v-for="user in users"
                        :key="user.id" 
                        :value="user.name">{{ user.name }}</option>
                </select>

                <vButtonVue
                    @click.prevent="submit()" 
                    text="Изменить"
                />
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import vButtonVue from '../UI/Button/v-button.vue'
export default {
    props: {
        users: Object
    },

    components: {
        vButtonVue
    },

    data() {
        return {
            name: ""
        }
    },

    computed: mapGetters(['ModalData']),

    methods: {
        ...mapMutations(['updateModal']),
        ...mapActions(['fetchWritingTable']),
        submit() {
            this.fetchWritingTable(this.name)
            alert('Изминение приминены!')
        },
        close() {
            this.updateModal([false,"",""])
        }
    }
}

</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99999;
    opacity: 1;
    -webkit-transition: opacity 200ms ease-in; 
    -moz-transition: opacity 200ms ease-in;
    transition: opacity 200ms ease-in;
    /* pointer-events: none; */
    margin: 0;
    padding: 0;
}

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
@media (min-width: 576px) {
  .modal-dialog {
      max-width: 500px;
      margin: 30px auto; 
  }
}
.modal-content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
}
@media (min-width: 768px) {
  .modal-content {
      -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
      box-shadow: 0 5px 15px rgba(0,0,0,.5);
  }
}

.modal-header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid #eceeef;
}
.modal-title {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 500;
}

.close {
    float: right;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: .5;
    text-decoration: none;
    z-index: 9999;
    cursor: pointer;
}

.modal-body {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

select {
    height: 34px;
    font-size: 18px;
    border: 0px;
    border-bottom: 2px solid #000;
    outline: none;
}
</style>