import React, { useEffect, useState } from 'react'
import { getMostLiked } from '../api';
import LikeCard from '../components/LikeCard';

const MostLiked = () => {
  const [liked,setLiked] = useState([]);
  
  
  useEffect(()=>{
    const getdata = async()=>{
      const data = await getMostLiked();
      setLiked(data);
    }
    getdata()
  },[])
  // console.log(liked)
  // console.log(liked.data[0].end_year)

  const dumpdata = {
    "end_year": "",
    "intensity": 4,
    "sector": "Energy",
    "topic": "gas",
    "insight": "OGA Overview 2016",
    "url": "https://www.ogauthority.co.uk/media/2825/oga-overview-october-2016.pdf",
    "region": "Northern Europe",
    "start_year": "",
    "impact": "",
    "added": "October, 23 2016 04:55:41",
    "published": "October, 14 2016 00:00:00",
    "country": "United Kingdom",
    "relevance": 2,
    "pestle": "Industries",
    "source": "ogauthority",
    "title": "The sustained decline in global oil and gas prices has brought into sharp focus the significant risks facing the mature UK offshore oil and gas industry.",
    "likelihood": 2
}

  return (
    <div className='m-4 '>
      <div >
        <h1 className=' mt-4 text-3xl text-indigo-400 font-bold'>Most Liked Data</h1>
      </div>

      <div className="mt-8 mx-2  grid grid-cols-4 gap-4" >
        {
            liked.map((data)=>{
              return (
                <div className="bg-white border p-4 w-[100%] shadow-md hover:shadow-lg rounded-lg mb-6" key={data._id}>
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
