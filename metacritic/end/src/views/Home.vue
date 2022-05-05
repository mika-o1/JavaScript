<template>
  <div class="container">
      <Movies />
  </div>
</template>

<script>
import Movies from '@/components/movie-list.vue'


export default {
  name: "Home",
  components: {
    Movies
  },
  data() {
    return {
      hello: "Hello Vue!",
      status: 1,
      img: 'https://www.metacritic.com/images/icons/metacritic-icon.svg',
      inp: '',
      arr: [
        {
          id: 1,
          name: "John",
        },
        {
          id: 2,
          name: "Bob",
        },
      ],
    };
  },
  methods: {
    eventHandler() {
      if (this.status === 1) {
        this.status = 2;
      } else {
        this.status = 1;
      }
    },
  },
};
</script>
