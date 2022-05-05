<template>
    <div>
        {{ allTodos[curID].name }}
    </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";


export default {
  data() {
      return {
          curID: this.$route.params.id,
      };
  },
  computed: mapGetters(['allTodos']),
  methods: mapActions(['FetchAction']),
  async mounted() {
    this.FetchAction();
  },
};
</script>