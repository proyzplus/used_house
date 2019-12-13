<template>
  <div class="detail">
    <top></top>
    <div class="ennior">
      <div class="ennior_le">
        <img src="https://z1.muscache.cn/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg" alt />
      </div>
      <div class="ennior_ri">
        <div class="ri_top">
          <div class="top_le">
            <img src="https://z1.muscache.cn/im/pictures/8762e453-7978-4311-aff7-4625da64a615.jpg" />
          </div>
          <div class="top_ri">
            <img src="https://z1.muscache.cn/im/pictures/6668d5f4-0f9c-4d2a-a54a-3bd4b70acb20.jpg" />
          </div>
        </div>
        <div class="ri_top">
          <div class="top_le">
            <img
              src="https://z1.muscache.cn/4ea/air/v2/pictures/92e9ca38-cfe2-44b2-bd83-c54fabe5031a.jpg"
            />
          </div>
          <div class="top_ri">
            <img src="https://z1.muscache.cn/im/pictures/c0e0e56a-22c6-4054-aa74-f4c3359ee925.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="rooms">
      <div class="rooms_pl">
        <div class="rooms_top">
          <p style="font-size: 12px;fontweight:600;color: firebrick;">杭州市 · 整间LOFT</p>
          <h1>Lisen2·林森公寓银泰旁榻榻米巨屏投影舒适两床环境优美</h1>
          <p>󰄄2间卧室󰄃2张床 󰄁1间卫生间󰄂最多住4人</p>
          <p class="sit">
            <span>4.7分</span>
            <span>171条评论</span>
            <span>高性价比</span>
            <span>可以做饭</span>
            <span>可存行李</span>
          </p>
        </div>
        <div class="tooms_pj">
          <h2>详细评价</h2>
          <div class="pj_list">
            <div v-for="(item,index) in pj" :key="index">
              <div class="pj_top">
                <div class="block">
                  <el-avatar :size="50" :src="item.img"></el-avatar>
                </div>
                <p style="margin-left: 8px;">{{item.name}}</p>
                <el-rate
                  style="margin-top: 18px;margin-left: 8px;"
                  v-model="value5"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{4.8}"
                ></el-rate>
              </div>
              <p>{{item.word}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="price">
        <div class="tonight">
          <h3>
            ￥160
            <span style="font-size: 12px;">元/晚</span>
          </h3>
          <van-rate v-model="value" readonly />
          <span style="font-szie:10px;">171条评价</span>
        </div>
        <div class="tonight">
          <h3>日期</h3>
          <el-date-picker
            style="margin-bottom: 12px;"
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </div>
        <div class="tonight">
          <h3>人数</h3>
          <el-select style="margin-bottom: 12px;" v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="tonight">
          <button>立即预定</button>
          <p style="text-align: center;font-size: 10px;">你暂时不会被收费</p>
        </div>
        <p style="margin-left: 60px;font-size: 14px;">这个房源备受关注。</p>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "./topheader";
import bottom from "./bottom";
export default {
  name: "house_detail",
  components: {
    top,
    bottom
  },
  data() {
    return {
      pj: [
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/96fbf230-9077-483e-b75c-b5eedda931c5.jpg",
          name: "广泛的个人",
          word: "很不错的一次体验,装修风格简约大方,有家的舒适感,朋友都很喜欢!"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/15a9a88c-3a9c-4cd0-98eb-4b63792ac82a.jpg",
          name: "尹思晴",
          word: "整体非常不错"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/19f33a3c-2284-41a1-8f96-9470e8e69bf2.jpg",
          name: "子豪",
          word:
            "整体是不错的,可能中午打扫时间比较紧张,一些难清洁的污渍还留在沙发上"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/9d28a78d-d978-44e8-b2f3-165a820bb1c2.jpg",
          name: "尹思晴",
          word: "装修风格简约大方,有家的舒适感"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/7dde251c-82b6-4e71-9f3d-db2483f9f014.jpg",
          name: "洲",
          word: "一般一房东态度很好 吹风机是坏的又外卖买了一个送来｡般"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/96fbf230-9077-483e-b75c-b5eedda931c5.jpg",
          name: "广泛的个人",
          word: "很不错的一次体验,装修风格简约大方,有家的舒适感,朋友都很喜欢!"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/15a9a88c-3a9c-4cd0-98eb-4b63792ac82a.jpg",
          name: "尹思晴",
          word: "整体非常不错"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/19f33a3c-2284-41a1-8f96-9470e8e69bf2.jpg",
          name: "子豪",
          word:
            "整体是不错的,可能中午打扫时间比较紧张,一些难清洁的污渍还留在沙发上"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/9d28a78d-d978-44e8-b2f3-165a820bb1c2.jpg",
          name: "尹思晴",
          word: "装修风格简约大方,有家的舒适感"
        },
        {
          img:
            "https://z1.muscache.cn/im/pictures/user/7dde251c-82b6-4e71-9f3d-db2483f9f014.jpg",
          name: "洲",
          word: "一般一房东态度很好 吹风机是坏的又外卖买了一个送来｡般"
        }
      ],
      value5: 4.8,
      value: 4,
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "1人"
        },
        {
          value: "选项2",
          label: "2人"
        },
        {
          value: "选项3",
          label: "3人"
        },
        {
          value: "选项4",
          label: "4人"
        },
        {
          value: "选项5",
          label: "5人"
        }
      ]
    };
  }
};
</script>
<style scoped>
.tooms_pj {
  overflow: auto;
  height: 666px;
}
.pj_top {
  display: flex;
}
.rooms_top {
  border-bottom: 1px solid lightgray;
}
.sit span {
  padding: 6px;
  background-color: aquamarine;
  border-radius: 20px;
  font-size: 12px;
}
button {
  width: 140px;
  height: 49px;
  text-align: center;
  border: 0;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: firebrick;
  border-radius: 8px;
  color: yellowgreen;
}
.tonight {
  width: 80%;
  margin: auto;
  border-bottom: 1px solid lightgray;
}
.rooms_pl {
  width: 55%;
  height: 1000px;
}
.price {
  width: 40%;
  height: 500px;
  border: 1px solid lightgray;
}
.rooms {
  width: 66%;
  height: 1000px;
  margin: auto;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
  height: 100%;
  transition: all 0.8s;
  cursor: pointer;
}
img:hover {
  transform: scale(1.2);
}
.ri_top {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
}
.top_le,
.top_ri {
  width: 50%;
  height: 300px;
}
.ennior_le,
.ennior_ri {
  width: 50%;
  height: 600px;
}
.ennior {
  width: 80%;
  height: 600px;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
</style>