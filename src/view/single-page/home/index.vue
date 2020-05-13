<template>
  <div>
    <Row>
      <Col span="18">
      <div id="indicators" style="height: 500px;"></div>
      </Col>
      <Col span="6">
      <div id="economic" style="height: 500px;"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
import echarts from "echarts"
import { on, off } from '@/libs/util'
export default {
  name: 'Home',
  data() {
    return {
      indicators: null,
      economic: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      on(window, "resize", this.resize)
    })
    this.setEcaharts()
  },
  beforeDestroy() {
    off(window, "resize", this.resize)
  },
  methods: {
    resize() {
      this.indicators.resize()
    },
    getMaxDays(year, month) {
      return new Date(year, month, 0).getDate()
    },
    setEcaharts() {
      this.indicators = echarts.init(document.getElementById('indicators'))
      this.indicators.setOption({
        title: {
          text: '净资产收益率（%）',
          x: 'center'
        },
        color: ['#3e6591', '#eb7d22', '#d73f45'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: 250
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#777'
            }
          }
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          splitLine: {
            show: true
          },
          axisTick: {
            length: 100,
            lineStyle: {
              color: '#ccc'
            }
          },
          data: ['最近第1年', '最近第2年', '最近第3年', '最近第1年', '最近第2年', '最近第3年', '最近第1年', '最近第2年', '最近第3年', '最近第1年', '最近第2年', '最近第3年']
        }, {
          nameLocation: 'start',
          nameTextStyle: {
            fontWeight: 'bold'
          },
          position: 'left',
          offset: 220,
          axisLine: {
            onZero: false,
            show: false
          },
          axisTick: {
            length: 100,
            inside: true,
            lineStyle: {
              color: '#ccc'
            }
          },
          axisLabel: {
            inside: true
          },
          inverse: true,
          data: ['国网', '唯捷城配', '快狗速运', '驹马配送']
        }],
        series: [{
          name: "武侯",
          type: 'bar',
          data: [10, 9, 8, 2, 1, 1, 2, 1, 1, 2, 1, 1],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#008000'
              }
            }
          }
        }, {
          name: "锦江",
          type: 'bar',
          data: [10, 9, 8, 2, 1, 1, 2, 1, 1, 2, 1, 1],
          label: {
            normal: {
              show: true,
              position: 'right',
              textStyle: {
                color: '#FFA500'
              }
            }
          }
        }]
      })
    }
  }
}
</script>
