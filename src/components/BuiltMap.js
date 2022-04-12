import React from 'react'
import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

import map from "@highcharts/map-collection/custom/world.geo.json";

function BuiltMap({dataCountries}) {

    const builtData = () => {
        let datamap = dataCountries.map(c => {
          return { name: c.country, y: parseInt(c.infected) }
        })
        console.log(datamap)
    
        return (datamap)
      }
    HighchartsMap(Highcharts);

    const options = {
        chart: {
            borderWidth: 1,
            width: 800,
            height: 500,
            map: map
        },

        title: {
            text: 'World population 2013 by country'
        },

        subtitle: {
            text: 'Demo of Highcharts map with bubbles'
        },

        legend: {
            enabled: false
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        rangeSelector: {
            enabled: true
          },
        
        series: [{
            name: 'Countries',
            color: '#E0E0E0',
            enableMouseTracking: false
        }, {
            type: 'mapbubble',
            name: 'Population 2016',
            joinBy: ['iso-a3', 'code3'],
            data: builtData(),
            minSize: 4,
            maxSize: '12%',
            tooltip: {
                pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
            }
        }]
    }

    return (
        <div id="container">
            <HighchartsReact
                options={options}
                dataCountries={dataCountries}
                constructorType={"mapChart"} />
        </div>
    )
}

export default BuiltMap