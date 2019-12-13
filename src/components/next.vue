<template>
  <div>
    <top></top>
    <div class="next">
      <div class="next_word">
        <div class="position">
          <h2>你好！</h2>
          <p>我们很高兴你想了解我们的故事</p>
          <p>下面我将为你详细介绍我们的初衷!</p>
          <button @click="next">下一步</button>
        </div>
      </div>
      <div class="next_img">
        <img src="https://a0.muscache.com/pictures/3cb57617-2b34-40e5-9a84-2ace12912ade.jpg" />
      </div>
    </div>
  </div>
</template>
<script>
import top from "./topheader";
export default {
  name: "next",
  components: {
    top
  },
  data() {
    return {};
  },
  methods: {
    next() {
      this.$router.push({ name: "introduce" });
    }
  }
};
</script>
<style scoped>
button{
  width: 120px;
  height: 50px;
  border: 0;
  background-color: aquamarine;
  border-radius: 8px;
  color: #ffffff;
}
.position {
  padding-top: 300px;
  position: relative;
  left: 40%;
}
img {
  width: 100%;
  height: 870px;
}
.next_img {
  width: 40%;
  height: 100%;
}
.next_word {
  width: 60%;
  height: 100%;
}
.next {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
</style>