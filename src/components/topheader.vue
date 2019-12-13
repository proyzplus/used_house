<template>
  <div class="top">
    <div class="top_left">
      <img @click="index" src="../assets/logo.png" alt />
    </div>
    <div class="top_right">
      <ul>
        <li>
          <p @click="tot">开展体验</p>
        </li>
        <li>
          <p @click="tof">故事</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "top",
  data() {
    return {};
  },
  methods: {
    index() {
      this.$router.push({ name: "index" });
    },
    tot() {
      this.$router.push({ name: "feel" });
    },
    tof() {
      this.$router.push({ name: "next" });
    }
  }
};
</script>
<style scoped>
p:hover {
  color: firebrick;
  cursor: pointer;
}
.top_right {
  width: 200px;
  height: 60px;
}
ul {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.top_left {
  width: 140px;
  height: 60px;
}
.top_left img {
  width: 140px;
  height: 60px;
}
.top {
  width: 80%;
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
</style>