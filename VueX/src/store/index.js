import Vue from "vue";
import Vuex from "vuex";
import fetchData from "./modules/fetchData.js";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        fetchData
    }
})
