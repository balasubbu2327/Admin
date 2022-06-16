import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'

const CustomerReview = () => {
    const data = {
        series: [
            {
                name: "Review",
                data: [10,50,30,90,40,120,100],
            }
        ],
        options : {
            chart:{
                type: "area",
                height:"auto",
                // stacked: true,

            },
            fill : {
                colors: ["#aa5884"],
                type: "gradient",
            },
            datalabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff5db3"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2021-05-11T00:00.000Z",
                    "2021-05-11T01:30.000Z",
                    "2021-05-11T02:30.000Z",
                    "2021-05-11T03:30.000Z",
                    "2021-05-11T04:30.000Z",
                    "2021-05-11T05:30.000Z",
                    "2021-05-11T06:30.000Z",
                ],
            },
        }
    }

  return (
      <div className="CustomerReview">
        <Chart series = {data.series} options={data.options} type='area' />
      </div>
  )
}

export default CustomerReview