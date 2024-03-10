import React, { useEffect, useState } from 'react'
import LineChart2 from '../charts/LineChart2'
import { getdata } from '../api';

const LineComponent = () => {
    const [vals, setVals] = useState([])
    
    useEffect(()=>{
        const getLikelihoodData= async()=>{
            const data = await getdata("?_fields=likelihood;_id");
            // console.log(data)
            const counts = new Map();
            
            for (const d of data) {
                counts.set(d["likelihood"], 1 + (counts.get(d["likelihood"]) ?? 0))
            }

            const idk = [];
            counts.forEach((v, k) =>  idk.push({likelihood: k, v}));
            idk.map((e)=> e.likelihood===null?e.likelihood=0:e.likelihood)

            setVals(idk);
        }
        getLikelihoodData()
    }, []);
    
    return (
        <div className=' border-2 bg-white rounded-md shadow-md mx-4 hover:shadow-lg'>
            <h1 className='mx-8 mt-8 text-center text-2xl font-bold '>Number of likelihoods in the data</h1>
            <h1 className='text-center secondaryText '>For eg. Around 250 data's got the likelihood of 2</h1>
            <LineChart2 data={vals}/>
        </div>
    )
}

export default LineComponent
