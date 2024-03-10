import React, { useEffect, useState } from 'react'
import LikeCard from '../components/LikeCard';
import { getdata } from '../api';
import RingLoader from 'react-spinners/RingLoader';

const MostRelevant = () => {
    const [relevant,setRelevant] = useState([]);
    const[loading,setLoading] = useState(false)
    
    useEffect(()=>{
        const getLiked= async()=>{
            setLoading(true)
            const data = await getdata();
            
            const count=[];
            for(let i =0;i<data.length;i++){
                if(data[i].relevance>3){
                    count.push(data[i]);
                }
            }
            // console.log(count);
            setRelevant(count)
            setLoading(false)
    }
    getLiked()
    },[])

// console.log(relevant)

    return (
        <div className='m-4 '>

        {
            loading && (
            <div className='absolute items-center justify-center w-[50%] m-auto top-64 right-0'>
                <RingLoader  color="rgb(129 140 248 /1)"/>
            </div>
        )}
        {
            !loading && (
            <div>

            <div >
                <h1 className=' mt-4 text-3xl text-indigo-400 font-bold'>Most Liked Data</h1>
            </div>

            <div className="mt-8 mx-2  grid grid-cols-4 gap-4" >
                {
                    relevant.map((data)=>{
                    return (
                        <div className="mode bg-white border p-4 w-[100%] shadow-md  rounded-lg mb-6" key={data._id}>
                        <LikeCard dumpdata={data} />
                        </div>
                    )
                })
                }
                </div>
            
            </div>
        )}
        </div>
)}


export default MostRelevant
