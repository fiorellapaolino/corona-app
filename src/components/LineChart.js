import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../pages/Infected.scss'

function LineChart({ data }) {
/* 
  const runData = () => {
    console.log(data.map(d => new Date(d.infect_date)))
    const uniqueValues = data.filter((element, index) => {
      return data.findIndex(auxElement => new Date(auxElement.infect_date).getMinutes() === new Date(element.infect_date).getMinutes()) === index;
    });

    console.log(uniqueValues.map(val => new Date(val.infect_date).getMinutes()))

    const parsedData = uniqueValues.map(val => data.filter(d => d.infect_date === val.infect_date).length);

/*     const parsedData = uniqueValues.map(val => ({
      x: new Date(val.infect_date).getMinutes(),
      y: data.filter(d => new Date(d.infect_date).getMinutes() === new Date(val.infect_date).getMinutes()).length
    })); 

    return parsedData;
  }
 */

  const runData = () => {
    const uniqueValues = data.filter((element, index) => {
      return data.findIndex(auxElement => new Date(auxElement.infect_date).getFullYear() === new Date(element.infect_date).getFullYear()) === index;
    });

    let datamap = uniqueValues.map(date => {
      return { 
        x: new Date(date.infect_date).getFullYear() , 
        y: parseInt(date.id)

        /* x: parseInt(date.infect_date), 
        y: data.filter(d => new Date(d.infect_date).getMinutes() === new Date(date.infect_date).getMinutes()).length */ }
    })
    console.log(datamap)

    return (datamap)
  }

  const options = {
    chart: {
      width: 900,
      height: 530,
      backgroundColor: 'whitesmoke',
      shadow: {
        color: 'rgba(0, 0, 0, 0.1)',
        offsetX: 1,
        offsetY: 1,
        opacity: '0.1',
        width: 10
      },
      borderRadius: 10,
    },
    legend: {
      itemStyle: {
        color: '#000',
        fontWeight: 'bold'
      }
    },  //yAxis: 0,
    //xAxis: 0,
    xAxis: {
      labels: {
        style: {
          color: '#000',
          font: '14px Trebuchet MS, Verdana, sans-serif',
          fontSize: '20px',
        }
      }
    },
    title: {
      text: 'Confirmed Cases Covid-19',
      style: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: '25px',
      }
    },
    yAxis: {
      labels: {
        style: {
          color: '#000',
          font: '14px Trebuchet MS, Verdana, sans-serif'
        }
      },
      credits: {
        enabled: false
      },
      /* categories: [data.infect_date], */
      title: {
        style: {
          color: '#000',
          fontWeight: 'bold',
          fontSize: '12px',
          fontFamily: 'Trebuchet MS, Verdana, sans-serif'
        }
      }
    },
    series: [/* {
      type: 'column',
    
      name: 'People Infected',
      data: runData()
    }, */
    {
      type: 'spline',
      name: 'Amount',
      data: runData(),
    }]
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        data={data}
      />
    </div>
  )
}

export default LineChart
