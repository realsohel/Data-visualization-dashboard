import React, { useEffect, useState } from 'react'
import { getdata } from '../api';
import ReactCountryFlag from "react-country-flag"
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import {countryCode} from '../utils/CountryCode';
import OilReserveCard from '../charts/OilReserveCard';


const OilReserve = () => {
    const [vals, setVals] = useState([])
    
    useEffect(()=>{
        const getLikelihoodData= async()=>{
            const data = await getdata("?topic=oil&_fields=topic;_id;country");
            // console.log(data)
            const vals = new Map();
            
            for (const d of data) {
                vals.set(d["country"], 1 + (vals.get(d["country"]) ?? 0))
            }

            const idk = [];
            vals.forEach((v, k) =>  idk.push({country: k, v}));
            idk.map((e)=> e.country===''?e.country="Others":e.country)

            setVals(idk);
            // console.log(idk);
        }
        getLikelihoodData()
    }, []);
    
    return (
        <div className=' my-8 bg-white '>
            <h1 className=' text-xl font-bold text-center py-4'>Topic of Oil  across the World</h1>
            <h2 className='secondaryText  text-center '>For eg. the topic of oil has come up 51 times with the country USA. </h2>
            <div className='my-4 grid grid-cols-3 gap-4 '>

                {
                    vals.map((data,indk)=>{
                        return <div key={indk}>
                            <OilReserveCard data={data} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default OilReserve
