<template>
  <div>
    
  </div>
</template>

<!-- <template>
  <div class="chart-wrapper p-5">
          
    <apexcharts
      width="1250"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import { HTTP } from "@/axios";
export default {
  name: "ApexChart",
  components: {
    apexcharts: VueApexCharts,
   
  },
  data: function () {
    return {
      chartData: [],
    chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: []
        }
      },
      series: [{
        name: 'series-1',
        data: []
      }]
    
   
    }
       
  },
created(){


},
mounted(){
  HTTP.post(`/api/corporate/account-balances/`)
      .then((response) => {
      this.chartData = response.data.load_wallet_balance
      this.chartData = response.data.debit_wallet_balance
      console.log("chartData ", response);
      this.renderChart()
      })
      .catch((error) => {
        console.log(error);
      });
},
methods:{
      
    renderChart() {
    this.$refs.chartOptions.renderChart({
      series: [{
        name: 'Data',
        data: this.chartData
      }],
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: this.chartData
      }
    })
  }
}
};
</script>

<style>
.chart-wrapper {
}
</style> -->

<!-- <apexchart width="380" type="donut" :options="options" :series="series"></apexchart> -->

     <!-- <apexchart
      type="donut"
      :options="options"
      :series="options.series"
    ></apexchart> -->
    <!-- <apexchart width="380" type="donut" :options="options" :series="series"></apexchart> -->


 <!-- //  apexchart: VueApexCharts, -->
<!-- // colors: [
      //     '#03d87f',
      //     '#f5325c',
      //     '#8ecae6',
      //     '#db3a34',
      //     '#219ebc',
      //     '#ffb703',
      //     '#fb8500',
      //      '#db3a34',
      //     '#219ebc',
      //     '#ffb703',
      //     '#fb8500',
      //   ], -->