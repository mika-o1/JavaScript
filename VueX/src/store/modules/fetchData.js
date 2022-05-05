import axios from 'axios';

export default {
    actions: {
        async FetchAction(result) {
            const res = await axios.get(`http://localhost:3001/todos`);
            const newTodos = res.data;
            result.commit('updateTodos', newTodos);
        },
        ChangeTextColor(result) {
            result.commit('updateColor')
        }
    },
    mutations: {
        updateTodos(state, newTodos) {
            state.todos = newTodos
        },
        updateColor(state) {
            state.color = true
        }
    },
    state: {
        todos: [],
        color: false
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        changeColor(state) {
            return state.color
        }
    }
}