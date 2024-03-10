import React, { useEffect, useState } from 'react'
import { getdata } from '../api';
import PieChart from '../charts/PieChart';
import * as d3 from 'd3';

const PieComponent = () => {
    const [vals, setVals] = useState([]);
    const [all, setAll] = useState(0);
    
    useEffect(()=>{
        const getTopic= async()=>{
            const data = await getdata("?_fields=topic;_id");
            // console.log(data)
            const value = new Map();
            
            for (const d of data) {
                value.set(d["topic"], 1 + (value.get(d["topic"]) ?? 0))
            }

            const idk = [];
            let all = 0;
            let others = 0;

            value.forEach((v, k) => {
                if(v>20){
                    idk.push({label: k, value:v}) 
                }
                else{
                    others += v;
                }
                all += v;
            });

            idk.push({label:"mixed",value:others})
            idk.map((e)=> e.label===""?e.label="Others":e.label)

            setVals(idk);
            setAll(all);
            // console.log(idk);
        }
        getTopic()
    }, []);

    const colorScale = d3     
        .scaleSequential()      
        .interpolator(d3.interpolateWarm)      
        .domain([0, vals.length]);

    return (
        <div className=' border-2 bg-white rounded-md shadow-md mx-4 hover:shadow-lg'>
            <h1 className='mx-8 mt-8 text-center text-2xl font-bold '>Number of times a specific topic present in the data</h1>
            <h1 className='text-center secondaryText '>For eg. fields that contains the topic = Oil present 40.3% times</h1>
            
            <div className='justify-center items-center text-center mx-auto w-2/4'>
                <PieChart data={vals} total={all}/>
            </div>
            <div className=' p-2 flex'>
                {vals.map(({label, value}, i) => {
                    return <p key={i}  style={{ color: colorScale(i)}}>
                        
                        <span>{(value/all *100).toFixed(1)} - {label}</span>
                        </p>
                })}
            </div>
        </div>
    )
}

export default PieComponent
