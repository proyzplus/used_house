<template>
  <div class="index">
    <top></top>
    <div class="swiper">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width: 100%;height: 650px;border-radius: 6px;" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="select">
      <div class="chose">
        <button>房源选择</button>
      </div>
      <div class="select_list" @mouseleave="leavre">
        <input type="text" @click="display" placeholder="输入目的地、城市或者景点" style="display:block;" />
        <div v-if="dis" class="input_select">
          <div class="select_top">
            <p>温馨提示：您还可以输入城市 + 景点、区县名进行搜索，如：巴黎 埃菲尔铁塔</p>
            <hr />
          </div>
          <div class="city_list">
            <div class="city" v-for="item in city_list" :key="item">
              <h2>{{item}}</h2>
              <div class="hot_city">
                <ul>
                  <li v-for="item in hot_city_one" :key="item">
                    <p>{{item}}</p>
                  </li>
                </ul>
                <ul>
                  <li v-for="item in hot_city_two" :key="item">
                    <p>{{item}}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="winter">
      <p>
        优选特惠 --
        <span style="font-size: 12px;">特惠房源低至 7 折</span>
      </p>
    </div>
    <div class="list">
      <ul>
        <li v-for="item in list" :key="item">
          <p>{{item}}</p>
        </li>
      </ul>
    </div>
    <div class="house_list">
      <div class="lis" v-for="(item,index) in house" :key="index" @click="hdetail">
        <div class="lis_img">
          <img :src="item.img" />
        </div>
        <p style="font-size:12px;font-weight:600;">{{item.pa}}</p>
        <p style="font-weight:600;">{{item.pb}}</p>
        <p style="font-size:12px;color: chocolate;">{{item.pc}}</p>
      </div>
    </div>
    <div class="house_list">
      <div class="lis" v-for="(item,index) in houses" :key="index" @click="detail">
        <div class="lis_img">
          <img :src="item.img" />
        </div>
        <p style="font-size:12px;font-weight:600;">{{item.pa}}</p>
        <p style="font-weight:600;">{{item.pb}}</p>
        <p style="font-size:12px;color: chocolate;">{{item.pc}}</p>
      </div>
    </div>
    <div class="house_list">
      <div class="lis" v-for="(item,index) in house" :key="index">
        <div class="lis_img">
          <img :src="item.img" />
        </div>
        <p style="font-size:12px;font-weight:600;">{{item.pa}}</p>
        <p style="font-weight:600;">{{item.pb}}</p>
        <p style="font-size:12px;color: chocolate;">{{item.pc}}</p>
      </div>
    </div>
    <div class="house_list">
      <div class="lis" v-for="(item,index) in houses" :key="index">
        <div class="lis_img">
          <img :src="item.img" />
        </div>
        <p style="font-size:12px;font-weight:600;">{{item.pa}}</p>
        <p style="font-weight:600;">{{item.pb}}</p>
        <p style="font-size:12px;color: chocolate;">{{item.pc}}</p>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from "./topheader";
import bottom from "./bottom";
export default {
  name: "index",
  components: {
    top,
    bottom
  },
  data() {
    return {
      dis: false,
      images: [
        "https://z1.muscache.cn/pictures/hongbao/marquee/original/22643606-3f29-4beb-a521-958da703d0b0.jpg",
        "https://z1.muscache.cn/pictures/hongbao/marquee/original/b7907972-c4ba-4e19-8737-92cb246973f6.jpg",
        "https://z1.muscache.cn/pictures/hongbao/marquee/original/d2acad28-b15a-4619-9977-06615a70d35b.jpg",
        "https://z1.muscache.cn/pictures/hongbao/marquee/original/ca845c98-bb1f-42b2-bc50-95fbb796d697.jpg",
        "https://z1.muscache.cn/pictures/hongbao/marquee/original/32a32250-163b-4ea6-9407-06e636e2e9f4.jpg"
      ],
      city_list: ["国内热门城市", "国外度假城市", "冬季好去处"],
      hot_city_one: ["北京", "成都", "重庆", "上海"],
      hot_city_two: ["广州", "深圳", "武汉", "哈尔滨"],
      list: [
        "北京",
        "成都",
        "重庆",
        "上海",
        "广州",
        "深圳",
        "武汉",
        "哈尔滨",
        "北京",
        "成都"
      ],
      house: [
        {
          img:
            "https://z1.muscache.cn/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/4ea/air/v2/pictures/92e9ca38-cfe2-44b2-bd83-c54fabe5031a.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/4ea/air/v2/pictures/0e370afc-3da4-40b9-bb0e-b7dab6cdbeea.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥396 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/4ea/air/v2/pictures/cac53f7d-f2b3-4843-9bdb-9d55d5f7780a.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        }
      ],
      houses: [
        {
          img:
            "https://z1.muscache.cn/im/pictures/ee7959c3-401c-4fb3-b93a-b790cb00e1c0.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/f7361799-97d5-4864-8beb-a7efaacd7b0a.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/d958edb9-6485-44aa-8585-7962501d660d.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥396 每晚"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/dac5c8c7-0bfc-49fb-b2a5-dcc52f9aee75.jpg",
          pa: "整套公寓 · 1张床",
          pb: "藝净- 复古花，太古里旁高层花园电影套房",
          pc: "￥496 每晚"
        }
      ]
    };
  },
  methods: {
    hdetail() {
      this.$router.push({ name: "hdtail" });
    },
    detail() {
      this.$router.push({ name: "detail" });
    },
    display() {
      this.dis = true;
    },
    leavre() {
      this.dis = false;
    }
  }
};
</script>

<style scoped>
.lis_img {
  width: 333px;
  height: 222px;
}
.lis_img img {
  width: 100%;
  height: 100%;
}
.lis p {
  text-align: left;
  line-height: 8px;
}
.house_list {
  width: 80%;
  height: 340px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.list {
  width: 80%;
  margin: auto;
  height: 80px;
  margin-top: 12px;
}
.list li:hover {
  background-color: chocolate;
  color: #ffffff;
}
.winter {
  width: 80%;
  height: 50px;
  margin: auto;
  background-color: antiquewhite;
  border-radius: 12px;
  line-height: 50px;
}
.winter p {
  text-align: left;
  padding-left: 24px;
}
.hot_city {
  margin-top: -16px;
}
.city {
  width: 32%;
  height: 160px;
  text-align: center;
}
ul {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
}
p {
  text-align: center;
}
li {
  width: 25%;
}
li:hover {
  color: firebrick;
  cursor: pointer;
  border: 1px solid darkgoldenrod;
  border-radius: 8px;
}
.city_list {
  width: 90%;
  margin: auto;
  height: 160px;
  display: flex;
  justify-content: space-around;
}
.select_top {
  width: 90%;
  height: 30px;
  margin: auto;
}
.select_top p {
  font-size: 12px;
  color: bisque;
}
.input_select {
  width: 100%;
  height: 220px;
  border: 1px solid lightgray;
  background-color: #ffffff;
}
.select_list input {
  width: 100%;
  height: 54px;
  border: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 18px;
}
.select_list {
  width: 89.8%;
  height: 60px;
  border: 1px solid lightgray;
}
.select {
  width: 80%;
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
}
.chose {
  width: 10%;
  height: 60px;
  border: 0;
}
button {
  width: 160px;
  height: 60px;
  background: #f1f1f1;
  border: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
