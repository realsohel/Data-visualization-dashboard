import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import {Link} from 'react-router-dom'
import LinePlot from './day3';
const Dashboard = () => {
    const data = [{
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
    }]
    return (
        <div className='m-4 w-[100%]'>
            <div className=' mt-4 flex justify-between'>
                <div >
                    <h1 className='text-3xl text-indigo-400 font-bold'>Hi Sohel Salmani</h1>
                    <span className='secondaryText mt-8 font-normal'>Welcome back to Black-Coffer Dashboard</span>
                </div>

                <div className='mx-2 '>
                    <button className='button my-auto shadow-md'>
                        + Add Dashlet
                    </button>
                </div>
            </div>

            <div className="flex  my-6 space-x-16">
                <div className="card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:shadow-lg hover:cursor-pointer">
                    <div className="flex justify-between">
                        <span className=' text-lg text-blue-400  font-semibold '>Most Liked data</span>
                        <span className='my-auto '><FaStar color='Gold'/></span>
                    </div>
                    <span className='secondaryText font-normal'>
                        Data that got 4 likelihood
                    </span>
                    <div className="flex w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
                        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-400" style={{width:"80%"}}> </div>
                    </div>

                    <div className="py-2 ">
                    <Link to="/mostliked" className='text-white font-semibold px-2 py-2 text-right bg-blue-400 rounded-md float-right text'>
                        View all
                    </Link>
                    </div>
                </div>
                
                <div className="card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:cursor-pointer">
                    <div className="flex justify-between">
                        <span className=' text-lg text-red-500  font-semibold '>Most Relevant data</span>
                        <span className='my-auto '><MdDataObject size={20} color='tomato'/></span>
                    </div>
                    <span className='secondaryText font-normal'>
                        Data  relevance more than 3
                    </span>
                    <div className="flex w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
                        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-red-400" style={{width:"75%"}}> </div>
                    </div>

                    <div className="py-2 ">
                    <Link to="/mostrelevant" className='text-white font-semibold px-2 py-2 text-right bg-red-500 rounded-md float-right text'>
                        View all
                    </Link>
                    </div>
                </div>

                <div className="card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:cursor-pointer">
                    <div className="flex justify-between">
                        <span className=' text-lg text-green-400  font-semibold '>Most Relevant data</span>
                        <span className='my-auto '><FaStar color='Gold'/></span>
                    </div>
                    <span className='secondaryText font-normal'>
                        Data that got 4 likelihood
                    </span>
                    <div className="flex w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
                        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-green-400" style={{width:"80%"}}> </div>
                        
                    </div>
                </div>
            </div>
            
            <LinePlot data={data}/>
            
        </div>
    )
}

export default Dashboard
