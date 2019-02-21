import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        email: null,
    },
    actions: {
        saveEmail(state, email) {
            return state.commit('saveEmail', email);
        }
    },
    mutations: {
        saveEmail(state, email) {
            debugger
            state.email = email;
            console.log(this.state);
        }
    }
});