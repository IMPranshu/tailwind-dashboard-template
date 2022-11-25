import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {

  const chartData = {
    labels: ['No Risk', 'Medium Risk', 'High Risk'],
    datasets: [
      {
        label: 'Popluation',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        hoverBorderColor: tailwindConfig().theme.colors.white,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Population</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );


  // var data = {
  //   datasets: [{
  //     data: [300, 50, 100],
  //     backgroundColor: [
  //       "#F7464A",
  //       "#46BFBD",
  //       "#FDB45C"
  //     ]
  //   }],
  //   labels: [
  //     "Red",
  //     "Green",
  //     "Yellow"
  //   ]
  // };

  $(document).return(
    function() {
      var canvas = document.getElementById("myChart");
      var ctx = canvas.getContext("2d");
      var myNewChart = new Chart(ctx, {
        type: 'pie',
        data: data
      });

      canvas.onclick = function(evt) {
        var activePoints = myNewChart.getElementsAtEvent(evt);
        if (activePoints[0]) {
          var chartData = activePoints[0]['_chart'].config.data;
          var idx = activePoints[0]['_index'];

          var label = chartData.labels[idx];
          var value = chartData.datasets[0].data[idx];

          var url = "http://example.com/?label=" + label + "&value=" + value;
          console.log(url);
          alert(url);
        }
      };
    }
  )

  return (<div style="width: 300px; height: 300px">
  <canvas id="myChart"></canvas>
</div>);




}

export default DashboardCard06;
