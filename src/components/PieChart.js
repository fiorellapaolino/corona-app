import React from 'react';
import Highcharts from "highcharts/highstock";
import variablePie from "highcharts/modules/variable-pie.js";
import HighchartsReact from "highcharts-react-official";
function PieChart({ dataCountries }) {

/*   const country=[];
  const infected=[]; */

  /* const mapData = () => { */
 /*    for(const obj of dataCountries){
      console.log(dataCountries)
      country.push(parseFloat(obj.country))
      infected.push(parseInt(obj.infected))

    } */
 /*  } */
  const mapData = () => {
    let datamap = dataCountries.map(c => {
      return { name: c.country, y: parseInt(c.infected) }
    })
    console.log(datamap)

    return (datamap)
  }

  variablePie(Highcharts);

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      height: 600,
      width: 900
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
/*     tooltip: {
      pointFormat: '{series.y}'
    }, */
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>'
        },
        showInLegend: true,
      }
    },
    series: [{
      name: 'Infected',
      colorByPoint: true,
      data: mapData()
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        dataCountries={dataCountries}
      />
    </div>
  );
};

export default PieChart
