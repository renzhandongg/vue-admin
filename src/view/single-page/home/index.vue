<template>
  <div style='width:1610px'>
    <div class="content">
      公司主要经营指标市场竞争力简表
    </div>
    <Row>
      <Col span="18">
      <div id="indicators" style="height: 400px"></div>
      </Col>
      <Col span="6">
      <div id="economic" style="height: 400px"></div>
      </Col>
    </Row>
    <Row >
      <Col span="6">
      <div id="investmentBank" style="height: 400px"></div>
      </Col>
      <Col span="6">
      <div id="threeNewBoard" style="height: 400px"></div>
      </Col>
      <Col span="6">
      <div id="assets" style="height: 400px"></div>
      </Col>
    </Row>
  </div>
</template>

<script>
import echarts from "echarts"
import { on, off ,getEle} from '@/libs/util'
export default {
  name: 'Home',
  data() {
    return {
      indicators: null,
      economic: null,
      investmentBank:null,
      threeNewBoard:null,
      assets:null,
      option :{
         title: {
            text: '主要指标',
            textStyle:{
               fontSize:14
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        // toolbox: {
        //     show: true,
        //     feature: {
        //         mark: {show: true},
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        calculable: true,
        legend: {
            data: ['我司','xx司'],
            itemGap: 5
        },
        // grid: {
        //     top: '12%',
        //     left: '1%',
        //     right: '10%',
        //     containLabel: true
        // },
        xAxis: [
            {
                type: 'category',
                data: ['总额','市场份额','行业排名']
            }
        ],
        yAxis: [
            {
                type: 'value',
                // name: 'Budget (million USD)',
                axisLabel: {
                    formatter: function (a) {
                        a = +a;
                        return isFinite(a)
                            ? echarts.format.addCommas(+a / 1000)
                            : '';
                    }
                }
            }
        ],
        // dataZoom: [
        //     {
        //       type:'slider',
        //     },
        //     {
        //         show: true,
        //         start: 94,
        //         end: 100
        //     }
        // ],
        series: [
            {
                name: '我司',
                type: 'bar',
                data:[1,2,3]
            },
            {
                name: 'xx司',
                type: 'bar',
                data: [5,6,7]
            }
        ]
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      // on(window, "resize", this.resize)
    })
    this.setIndicatorsEcaharts();
    this.setEconomicEcharts();
    this.setInvestmentBankEcharts();
    this.setThreeNewBoardEcharts();
    this.setAssetsEcharts();
  },
  beforeDestroy() {
    off(window, "resize", this.resize)
  },
  methods: {
    resize() {
      this.indicators.resize()
      this.indicators.resize()
    },
    setIndicatorsEcaharts() {
      this.indicators = echarts.init(document.getElementById('indicators'));
      this.indicators.setOption(this.option)
    },
    setEconomicEcharts(){
      this.economic = echarts.init(document.getElementById('economic'));
      let option = {
        title: {
            text: '经济业务',
            textStyle:{
               fontSize:14
            }
        },
          xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
              type: 'value'
          },
          grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
          series: [{
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
          }]
      };
      this.economic.setOption(option)
    },
    setInvestmentBankEcharts(){
      this.investmentBank = echarts.init(document.getElementById('investmentBank'));
      let obj = {
          text: '投行业务',
          textStyle:{
               fontSize:14
            }
      }
      let option ={... this.option,title:obj}
      this.investmentBank.setOption(option)
    },
    setThreeNewBoardEcharts(){
      this.threeNewBoard = echarts.init(document.getElementById('threeNewBoard'));
      let obj = {
          text: '新三板业务',
          textStyle:{
               fontSize:14
            }
      }
      let option ={... this.option,title:obj}
      this.threeNewBoard.setOption(option)
    },
    setAssetsEcharts(){
      this.assets = echarts.init(document.getElementById('assets'));
      let obj = {
          text: '资产管理业务',
          textStyle:{
               fontSize:14
            }
      }
      let option ={... this.option,title:obj}
      this.assets.setOption(option)
    }
  }
}
</script>
<style>
  .content{
    text-align: center;
    font-size: 24px;
    padding: 0 0 10px 0;
  }
</style>
