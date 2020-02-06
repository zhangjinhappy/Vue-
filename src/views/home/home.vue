<template>
  <div class="home">
    <div style="display: flex;height: 300px;">
      <div class="homediv">
        <span class="spanmoney"><span>总销售额:</span>
          <p>&yen;5201314</p>
        </span>
        <div class="hnextdiv">
          <span>
            <el-progress
              type="circle"
              :width=79
              :percentage="70"
            ></el-progress>
          </span>
        </div>
        <div style="width: 100%;text-align: center;vertical-align: center">
          <div style="height: 0px;width: 87%;margin: 47px auto auto 20px;
                          padding-top: 1px;background-color: rgba(64,158,255,0.4);"></div>
        </div>

        <div class="daysales">
          日平均销售额:&yen;1314520
        </div>
      </div>
      <div class="homediv">
        <span class="spanmoney"><span>总销售额:</span>
          <p>&yen;5201314</p>
        </span>
        <div class="hnextdiv">
          <span>
            <el-progress
              type="circle"
              :width=79
              :percentage="70"
            ></el-progress>
          </span>
        </div>
        <div style="width: 100%;text-align: center;vertical-align: center">
          <div style="height: 0px;width: 87%;margin: 47px auto auto 20px;
                          padding-top: 1px;background-color: rgba(64,158,255,0.4);"></div>
        </div>

        <div class="daysales">
          日平均销售额:&yen;1314520
        </div>
      </div>
      <div class="homediv">
        <span class="spanmoney"><span>总销售额:</span>
          <p>&yen;5201314</p>
        </span>
        <div class="hnextdiv">
          <span>
            <el-progress
              type="circle"
              :width=79
              :percentage="70"
            ></el-progress>
          </span>
        </div>
        <div style="width: 100%;text-align: center;vertical-align: center">
          <div style="height: 0px;width: 87%;margin: 47px auto auto 20px;
                          padding-top: 1px;background-color: rgba(64,158,255,0.4);"></div>
        </div>

        <div class="daysales">
          日平均销售额:&yen;1314520
        </div>
      </div>
      <div class="homediv">
        <span class="spanmoney"><span>总销售额:</span>
          <p>&yen;5201314</p>
        </span>
        <div class="hnextdiv">
          <span>
            <el-progress
              type="circle"
              :width=79
              :percentage="70"
            ></el-progress>
          </span>
        </div>
        <div style="width: 100%;text-align: center;vertical-align: center">
          <div style="height: 0px;width: 87%;margin: 47px auto auto 20px;
                          padding-top: 1px;background-color: rgba(64,158,255,0.4);"></div>
        </div>

        <div class="daysales">
          日平均销售额:&yen;1314520
        </div>
      </div>
    </div>
    <div
      style="width:97%;height: 100px;"
      class="homedivschart"
    >
      <schart
        :canvasId="canvasId"
        class="big"
        :options="options"
      />
    </div>
  </div>
</template>
<script>
import Schart from 'vue-schart'
export default {
  data() {
    return {
      canvasId: 'myCanvas',
      type: 'bar',
      options: {
        title: {
          text: '最近一周各品类销售图'
        },
        labels: ['周一', '周二', '周三', '周四', '周五'],
        datasets: [
          {
            label: '家电',
            fillColor: 'rgba(241, 49, 74, 0.5)',
            data: [234, 278, 270, 190, 230]
          },
          {
            label: '百货',
            data: [164, 178, 190, 135, 160]
          },
          {
            label: '食品',
            data: [144, 198, 150, 235, 120]
          }
        ]
      }
    }
  },
  components: {
    Schart
  }
}
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  overflow: auto;
}
.homediv {
  border: 1px solid #ffffff;
  background-color: #ffffff;
  width: 300px;
  height: 180px;
  box-shadow: 2px 2px 2px #aaaaaa;
  margin: 0px auto auto 10px;
}
.homediv:first-child {
  margin-left: 0;
}
.spanmoney > span {
  display: inline-block;
  color: rgb(194, 196, 199);
  font-size: 18px;
  margin: 7px auto auto 10px;
}
.spanmoney > p {
  font-size: 26px;
  text-indent: 12px;
}
.hnextdiv {
  text-indent: 12px;
  margin-top: 10px;
}
.hnextdiv > span:first-child {
  float: right;
  margin-right: 30px;
  margin-top: -63px;
}
.daysales {
  font-size: 18px;
  color: #2b3b4b;
  margin: 4px auto auto 30px;
}
.homedivschart {
  position: absolute;
  top: 290px;
  left: 20px;
}
.big {
  width: 100%;
  height: 300px;
}
</style>
