import React, { useEffect, useState } from 'react'
import Barchart from '../charts/BarChart'
import { getdata } from '../api'

const VisualCard = () => {
    const [vals, setVals] = useState([])
    useEffect(()=>{
        const getsectorData= async()=>{
            const data = await getdata("?_fields=intensity;sector;_id");

            const vals = new Map();
            const counts = new Map();
            
            for (const d of data) {
                vals.set(d["sector"], d["intensity"] + (vals.get(d["sector"]) ?? 0))
                counts.set(d["sector"], 1 + (counts.get(d["sector"]) ?? 0))
            }

            const idk = [];
            // console.log(vals, counts);
            vals.forEach((v, k) =>  idk.push({sector: k, intensity: Math.floor(v / counts.get(k))}));

            setVals(idk);
            // console.log(idk);
            
            idk.map((e)=> e.sector===""?e.sector="Others":e.sector)
        }
        getsectorData()
    }, []);
    
    return (
        <div className=' border-2 bg-white rounded-md shadow-md mx-4 hover:shadow-lg'>
            <h1 className='mt-8 text-center text-2xl font-bold '>Mean Intensity among different sectors</h1>
            <h2 className='secondaryText text-center'>For eg. The Mean intensity of the Energy sector is around 9</h2>
            <Barchart data1={vals}/>
        </div>
    )
}

export default VisualCard
