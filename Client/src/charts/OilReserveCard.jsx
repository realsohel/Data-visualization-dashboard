import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import {countryCode} from '../utils/CountryCode';
import ReactCountryFlag from 'react-country-flag';

const OilReserveCard = ({data}) => {
    return (
        <div  className='mode  cursor-pointer mx-2 my-3 bg-indigo-50   border shadow-md p-4 flex justify-between'>
            {
                data.country==="Others"? <div className='bg-blue-200 rounded-full px-2 my-auto font-semibold'>OTH</div>
                : <ReactCountryFlag countryCode={countryCode.get(data.country)} style={{ fontSize: "2.5rem" }} svg className='rounded-full'/>
            }
            
            <span className='text-lg font-bold m-auto text-indigo-400'>{data.country} </span>
            <div className={`my-auto ${data.v>5 ? "text-green-500" :"text-red-500"} text-lg font-bold flex space-x-1`}>
                <span className='m-auto'> 
                    {data.v>5 ? <TiArrowSortedUp/>  :<TiArrowSortedDown/>}
                </span> 
                <span>{data.v}</span>
            </div>
        </div>
    )
}

export default OilReserveCard
