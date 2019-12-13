<template>
  <div class="feel">
    <top></top>
    <div class="vedio">
      <video-player
        style="width: 100%;height: 500px;"
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </div>
    <div class="box_onde">
      <div class="onde_top">
        <h2>展示您的特长</h2>
        <p>体验类别丰富，有音乐表演、舞蹈课、品酒等，您可以毫无束缚地尽情发挥。以下是部分精选类别。</p>
      </div>
      <div class="onde_amain">
        <div class="amain_list" v-for="(item,index) in onlyou" :key="index">
          <div class="amain_list_img">
            <img :src="item.img" alt />
          </div>
          <h2 style="padding-left: 20px;">{{item.title}}</h2>
          <p style="padding-left: 20px;">{{item.word}}</p>
        </div>
      </div>
    </div>
    <div class="box_onde">
      <div class="onde_top">
        <h2>我们全程为您提供支持</h2>
        <p>专门针对您开展体验的需求而提供的文章和见解等资源、为您和参与者提供24小时客服支持、提高体验曝光率等。</p>
      </div>
      <div class="onde_amain">
        <div class="amain_left">
          <div>
            <img src="https://a0.muscache.com/airbnb/static/packages/icon-uc-alarm.e0a2b02f.gif" />
            <p>达成目标</p>
          </div>
          <div>
            <img src="https://a0.muscache.com/airbnb/static/packages/icon-uc-calendar.ace59291.gif" />
            <p>安排体验</p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/airbnb/static/packages/icon-uc-money-saved.0d988c4e.gif"
            />
            <p>接受付款</p>
          </div>
          <div>
            <img src="https://a0.muscache.com/airbnb/static/packages/icon-uc-graph.3f8bd411.gif" />
            <p>数据支持</p>
          </div>
        </div>
        <div class="amain_right">
          <h2 style="margin-top: 160px;">为您量身打造的工具</h2>
          <p
            style="width: 80%;"
          >通过控制面板，您可以查看有价值的建议、收到改进建议，查看世界各地的参与者如何通过搜索和筛选功能发现您的体验，另外还有无忧支付和其他功能。</p>
        </div>
      </div>
    </div>
    <bottom></bottom>
  </div>
</template>
<script>
import top from "./topheader";
import bottom from "./bottom";
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
export default {
  name: "feel",
  components: {
    top,
    bottom
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            src:
              "https://cloudvideo.ziroom.com/440100_102341/20191031_20875577.mp4",
            // "http://vd4.bdstatic.com/mda-imiwy17sj97i46rz/hd/mda-imiwy17sj97i46rz.mp4", // 路径
            type: "video/mp4" // 类型
          },
          {
            src: "//path/to/video.webm",
            type: "video/webm"
          }
        ],
        poster:
          "https://z1.muscache.cn/im/pictures/951a100f-cfbd-48ea-8954-91da4c0cf24c.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      onlyou: [
        {
          img:
            "https://a0.muscache.com/im/pictures/36ad251f-02c2-486a-965f-1d473e25e509.jpg",
          title: "文化与历史",
          word: "分享您所在城市著名地标背后的故事"
        },
        {
          img:
            "https://a0.muscache.com/im/pictures/eca85a07-8fad-4648-a4a4-b4c9283fdd65.jpg",
          title: "美食",
          word: "您可以组织美食之旅、烹饪课、用餐体验及其他活动"
        },
        {
          img:
            "https://a0.muscache.com/im/pictures/1ecf2c03-5b86-4af3-a194-c18764eafbb3.jpg",
          title: "自然与户外",
          word: "组织大自然徒步之旅、水上运动、山地运动等精彩活动"
        }
      ]
    };
  }
};
</script>
<style scoped>
.amain_left img {
  width: 66px;
  height: 66px;
  border: 1px solid firebrick;
  padding: 24px 12px;
  border-radius: 40%;
}
.amain_left img:hover{
  margin-top: 6px;
  cursor: pointer;
}
.amain_left p{
  text-align: center;
  color: firebrick;
}
.amain_left {
  display: flex;
  justify-content: space-around;
  margin-top: 120px;
}
.amain_left,
.amain_right {
  width: 50%;
  height: 100%;
}
.amain_list_img {
  width: 100%;
  height: 340px;
}
img {
  width: 100%;
  height: 100%;
}
.amain_list {
  width: 30%;
  height: 460px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.onde_amain {
  width: 80%;
  margin: auto;
  height: 460px;
  margin-top: 24px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  justify-content: space-between;
}
.onde_top {
  width: 100%;
  height: 60px;
  line-height: 26px;
  background-color: firebrick;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
}
.box_onde {
  width: 80%;
  margin: auto;
  margin-top: 20px;
  height: 550px;
}
.vedio {
  width: 80%;
  height: 500px;
  margin: auto;
}
.feel {
  width: 100%;
  height: 100%;
}
</style>