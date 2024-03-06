import React, { useEffect, useState } from 'react'
import { getMostLiked, getdata } from '../api';
import LikeCard from '../components/LikeCard';

const MostLiked = () => {
  const [liked,setLiked] = useState([]);
  
  
  useEffect(()=>{
    const getLiked= async()=>{
      const data = await getdata("?likelihood=4");
      setLiked(data);
    }
    getLiked()
  },[])

  return (
    <div className='m-4 '>
      <div >
        <h1 className=' mt-4 text-3xl text-indigo-400 font-bold'>Most Liked Data</h1>
      </div>

      <div className="mt-8 mx-2  grid grid-cols-4 gap-4" >
        {
            liked.map((data)=>{
              return (
                <div className="mode bg-white border p-4 w-[100%] shadow-md  rounded-lg mb-6" key={data._id}>
                  <LikeCard dumpdata={data}/>
                </div>
              )
            })
          }
        </div>
      
    </div>
  )
}

export default MostLiked
