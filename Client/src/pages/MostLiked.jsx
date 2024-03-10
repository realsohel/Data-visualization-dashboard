import React, { useEffect, useState } from 'react'
import { getMostLiked, getdata } from '../api';
import LikeCard from '../components/LikeCard';
import RingLoader from "react-spinners/RingLoader";

const MostLiked = () => {
  const [liked,setLiked] = useState([]);
  const[loading,setLoading] = useState(false)
  
  
  useEffect(()=>{
    const getLiked= async()=>{
      setLoading(true)
      const data = await getdata("?likelihood=4");
      setLiked(data);
      setLoading(false)
    }
    getLiked()
  },[])

  return (
    <div className='m-4 w-full'>
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
                liked.map((data)=>{
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
  )
}

export default MostLiked
