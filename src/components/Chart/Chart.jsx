import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'
import styles from './Chart.module.css'

const Chart = ({data:{confirmed,recovered,deaths},country}) => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI();
    },[])
    
    const lineChart = (
        dailyData ?
        <Line
        
        data={{
            labels:dailyData.map(date => date.reportDate),
            datasets:[{
                label : "Confirmed" , 
                data : dailyData.map(data => data.confirmed.total),
                borderColor : "#3333ff",
                fill : true
                },
                {
                label : "Deaths",
                data : dailyData.map(data => data.deaths.total),
                borderColor: 'rgb(255,0,0)',
                fill : true
                }
              ]
        }}

        />: null

    )
    const barChart =(
        confirmed ? (
            <Bar
             data = {{
                 labels:["Infected",'Recovered','Deaths'],
                 datasets : [
                     {
                         label:'People',
                         backgroundColor : ['rgb(0,0,255)','rgb(0,255,0)','rgb(255,0,0)'],
                         data : [confirmed.value,recovered.value,deaths.value]
                     }
                 ]
             }}
             options={{
                 legend:{display : false},
                 title :{display:true,text:`Current state in ${country}`}
             }}
            />):null
        )

    return (
        <div className={styles.container}>
            {country ? barChart:lineChart}
        </div>
    ) 
}

export default Chart;