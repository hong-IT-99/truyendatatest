import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        up(state){
            state.counter++
        },
        down(state){
            state.counter--
        }
    },
    actions: {
        up(vueContext){
            vueContext.commit('up')
        },
        down(vueContext){
            vueContext.commit('down')
        }
    }
})