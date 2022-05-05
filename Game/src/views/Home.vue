<template>
  <div class="container">
    <!-- <tictac /> -->
    <space />
  </div>
</template>

<script>
// import tictac from '@/components/tictactoe'
import space from '@/components/space'

export default {
  name: "Home",
  components: {
    // tictac,
    space
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
