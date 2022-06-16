import './Card.css'
import { useState } from 'react'
import { motion,AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons';
import Chart from 'react-apexcharts'


const Card = (props) => {

    const [expanded , setExpanded] = useState(false)


  return (
      <AnimateSharedLayout>
          {
              expanded?(
               <ExpandedCard param={props} setExpanded={()=>setExpanded(false)} />
              ):
              <CompactCard param = {props} setExpanded={()=>setExpanded(true)} />
          }
      </AnimateSharedLayout>
  )
}

// CompactCard Layout

function CompactCard ({param,setExpanded}){
    const Png = param.png;

    return(
        <motion.div className="CompactCard"
            style = {{
                background : param.color.backGround,
                boxShadow : param.color.boxShadow,
            }}
            onClick = {setExpanded}
            layoutId = 'expandableCard'
            >
            <div className="radialBar">
                {/* PROGRESSBAR MODEL DEPENDS ON YOUR CHOICE */}
                <CircularProgressbar
                value = {param.barValue}
                text = {`${param.barValue}%`}
                // styles={buildStyles({
                //     textColor: "red",
                //     pathColor: "turquoise",
                //     trailColor: "deeppink"
                //   })}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value} </span>
                <span>Last 24 Hours</span>
            </div>
        </motion.div>
    )
}


function ExpandedCard ({param, setExpanded}){

    const data = {
        options : {
            chart:{
                type: "area",
                height:"auto",
                // stacked: true,

            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top:0,
                left:0,
                blur:3,
                color: "#000",
                opacity: 0.35,
            },
            fill : {
                colors: ["#fff"],
                type: "gradient",
            },
            datalabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["white"],
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


    return(
        
        <motion.div className="ExpandedCard"
        style = {{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow,
        }}  
        layoutId = 'expandableCard'     
        >
            <div style = {{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
                <UilTimes onClick={setExpanded}/> 
            </div>
            <span> {param.title}</span>
                <div className="chartContainer">
                    <Chart series = {param.series} type = 'area' options = {data.options} />
                </div>
                <span>Last 24 Hours</span>
        </motion.div>
    )
}



export default Card