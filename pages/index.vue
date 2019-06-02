<template>
  <div class="container main-container pt-5">
      <h3 class="text-center">Express.js ToDo App | Nuxt.js</h3>
      <TodoForm @addTodoEvent="addTodo($event)"/>
        <h3 class="text-center mt-5 mb-3">Todos</h3>
        <Alert v-if="todos.length == 0"/>
        <Todos v-else @deleteTodoEvent="deleteTodo($event)" @updateTodoEvent="showUpdateContainer($event)" :todos="todos"/>
        <UpdateTodo :todo="toUpdateTodo" @updateTodoEvent="updateTodo($event)" @hideUpdateContainerEvent="showUpdate = false" :class="{'show-update-container': showUpdate}"/>
  </div>
</template>

<script>
import TodoForm from "@/components/todo/TodoForm";
import Todos from "@/components/todo/Todos";
import UpdateTodo from "@/components/todo/UpdateTodo";
import Alert from "@/components/todo/Alert";
export default {
  components: {
    TodoForm,
    Todos,
    UpdateTodo,
    Alert
  },
  data() {
    return {
      showUpdate:false,
      toUpdateTodo: null,
    }
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch('addTodo', todo);
    },
    deleteTodo(todo) {
      this.$store.dispatch("deleteTodo", todo);
    },
    showUpdateContainer(todo) {
      this.showUpdate = true;
      this.toUpdateTodo = todo;
    },
    updateTodo(todo) {
      this.$store.dispatch('updateTodo', todo);
      this.showUpdate = false;
    }
  },
  computed: {
    todos() {
      return this.$store.getters.getTodos;
    }
  }
}
</script>
