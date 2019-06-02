import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            todos: [],
        },
        mutations: {
            setTodos(state, todos) {
                state.todos = todos;
            },
            addTodo(state, todo) {
                state.todos.push(todo);
            },
            deleteTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => t._id == todo._id);
                if (todoIndex > -1) {
                    state.todos.splice(todoIndex, 1);
                }
            },
            updateTodo(state, todo) {
                let todoIndex = state.todos.findIndex(t => t._id == todo._id);
                if (todoIndex > -1) {
                    state.todos.splice(todoIndex, 1, todo);
                }
            },
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.$axios.get('/get-all').then((response) => {
                    vuexContext.commit('setTodos', response.data.docs);
                }).catch((err) => {
                    console.log(err);
                })
            },
            addTodo(vuexContext, todo) {
                this.$axios.post("/save", { todoText: todo }).then((response) => {
                    vuexContext.commit('addTodo', {
                        _id: response.data.data._id,
                        text: response.data.data.text,
                    });
                });
            },
            deleteTodo(vuexContext, todo) {
                this.$axios.delete('/delete', {data:{todo:todo}}).then((response) => {
                    vuexContext.commit('deleteTodo', todo);
                })
            },
            updateTodo(vuexContext, updatedTodo) {
                this.$axios.put('/update', {todo: updatedTodo}).then((response)=> {
                    vuexContext.commit('updateTodo', updatedTodo);
                })
                
            },
        },
        getters: {
            getTodos(state) {
                return state.todos;
            }
        }
    });
};

export default createStore;