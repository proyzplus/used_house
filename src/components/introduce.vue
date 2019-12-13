<template>
  <div class="introduce">
    <top></top>
    <div class="intr_main">
      <div class="intr_left">
        <ul>
          <li v-for="(item,index) in intr" :key="index">
            <p>{{item}}</p>
          </li>
        </ul>
      </div>
      <div class="intr_right">
        <div v-for="(item,index) in intrd" :key="index">
          <h2>{{item.title}}</h2>
          <p style="width:67%;">{{item.word}}</p>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "./topheader";
import bottom from "./bottom";
export default {
  name: "introduce",
  components: {
    top,
    bottom
  },
  data() {
    return {
      intr: [
        "入门指南",
        "如何使用",
        "咱的计划",
        "您的账号",
        "我的社区",
        "信任与安全"
      ],
      intrd: [
        {
          title: "安心房源保障",
          word:
            "人工审核所有中国房源页面信息，入住更放心.若发现房源严重不符合描述并影响入住，经核实与协调仍无法入住，我们将最高全额退款并补偿您首晚房费若入住时发现房间未经打扫或有明显清洁问题，经核实与协调仍无法入住，我们将最高全额退款并补偿您首晚房费"
        },
        {
          title: "入住真实可靠",
          word:
            "人工审核所有中国房源页面信息，入住更放心.若入住时发现房间未经打扫或有明显清洁问题，经核实与协调仍无法入住，我们将最高全额退款并补偿您首晚房费"
        },
        {
          title: "旅居一尘不染",
          word:
            "若入住时发现房间未经打扫或有明显清洁问题，经核实与协调仍无法入住，我们将最高全额退款并补偿您首晚房费"
        },
        {
          title: "费用透明安全",
          word:
            "若房东无故取消订单或提出不合理的站外收款，经核实与协调仍无法入住，我们将最高全额退款并补偿您首晚房费我们为您解决各种问题，包括协助重新预订、退款等；还设有高达 500 万人民币的房东保障金计划以及为房源和体验提供保障的保险计划"
        }
      ]
    };
  }
};
</script>
<style scoped>
li:hover {
  color: firebrick;
  cursor: pointer;
}
.intr_right {
  width: 60%;
  height: 700px;
  padding-top: 30px;
}
ul {
  width: 80%;
  margin: auto;
  margin-top: 120px;
}
.intr_left {
  width: 20%;
  height: 100%;
}
.intr_main {
  width: 80%;
  margin: auto;
  height: 700px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.introduce {
  width: 100%;
  height: 100%;
}
</style>