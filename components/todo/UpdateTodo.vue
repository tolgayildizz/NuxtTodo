<template>
  <div
    class="update-container container-fluid d-flex flex-column justify-content-center align-items-center"
  >
    <div class="card shadow pt-2 pb-2" style="width: 30rem;">
      <div class="card-body">
        <h5 class="card-title">Edit Todo</h5>
        <input type="text" v-model="loadedTodo.text" class="form-control mt-3 mb-3" value="edited todo..">
        <a href="#" @click="$emit('hideUpdateContainerEvent', true)" class="card-link btn btn-sm btn-outline-danger">Cancel</a>
        <a href="#" @click="$emit('updateTodoEvent', loadedTodo)" class="card-link btn btn-sm btn-outline-warning">Update</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      required:false,
      type:Object
    }
  },
  computed: {
    loadedTodo() {
      return this.todo ? {...this.todo} : {
        _id:null,
        text:null,
      }
    }
  }
};
</script>
