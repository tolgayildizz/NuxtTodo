<template>
      <div class="row">
          <Todo 
            v-for="(todo) in todos" 
            :todo="todo" 
            :key="todo._id" 
            @deleteTodoEvent="$emit('deleteTodoEvent', $event)"
            @updateTodoEvent="$emit('updateTodoEvent', $event)"/>
      </div>
</template>

<script>
import Todo from '@/components/todo/Todo';
export default {
    components: {
        Todo,
    },
    props: {
        todos: {
            required:true,
            type:Array,
        }
    }
}
</script>
