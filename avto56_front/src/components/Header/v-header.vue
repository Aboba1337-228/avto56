<template>
    <header class="v-header">
        <div class="v-container">
            <vBurgerVue 
                :vIF="false"
                :paramsSubmit="true"
                icon="☰"
            />
            <router-link to="/" class="v-logo">
                <img src="../../assets/logo.png" alt="">
            </router-link>
        </div>
    </header>
</template>

<script>
import vBurgerVue from '../UI/Burger/v-burger.vue'

export default {
    components: {
        vBurgerVue,
    }
}
</script>

<style scoped>
.v-header {
    border-bottom: 5px solid  #ff4040;
    padding: 15px 10px;
    text-align: center;
}
</style>