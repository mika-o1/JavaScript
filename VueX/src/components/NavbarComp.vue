<template>
    <div>
        <!-- {{ actName}} -->
        <!-- {{ allTodos[3].name }} -->
        <p v-if="changeColor === true">{{ allTodos[3].name }}</p>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['actName'],
  computed: mapGetters(["allTodos", "changeColor"])
};
</script>