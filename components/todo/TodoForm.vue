<template>
  <div class="row">
    <div class="col-md-6 offset-3 mt-5 d-flex">
      <input v-model="todoText" @keyup="change()" @keyup.enter="addTodo" ref="todoTextInputs" type="text" :class="{'is-invalid': isInvalid}" placeholder="add todo..." class="form-control form-control-lg mr-1">
      <button @click="addTodo" class="btn btn-outline-dark">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoText: "",
      isInvalid:false
    };
  },
  methods: {
    addTodo() {
      if (this.todoText !== "") {
        this.$emit("addTodoEvent", this.todoText);
        this.todoText = "";
        this.$nextTick(() => this.$refs.todoTextInputs.focus());
        this.isInvalid = false;
      }
      else {
        this.isInvalid = true;
      }
    },
    change() {
      if(this.todoText !== "") {
        this.isInvalid = false;
      }
    }
  }
};
</script>
