import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import {Link} from 'react-router-dom'
import VisualCard from './VisualCard';
import LineComponent from './LineComponent';
import PieComponent from './PieComponent';
import OilReserve from './OilReserve';
import { ImFilesEmpty } from "react-icons/im";

const Dashboard = () => {
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

            <div className="flex  my-4 space-x-16">
                <div className="mode card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:shadow-[rgb(129 140 248 /1)] hover:cursor-pointer">
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
                
                <div className="mode card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:cursor-pointer">
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

                <div className="mode card border-2  w-60 p-2 mx-2 my-4  rounded-md bg-white flex flex-col space-y-2 shadow-md hover:cursor-pointer">
                    <div className="flex justify-between">
                        <span className=' text-lg text-green-400  font-semibold '>Dummy Card</span>
                        <span className='my-auto '><ImFilesEmpty color='green'/></span>
                    </div>
                    <span className='secondaryText font-normal'>
                        Dummy card for looking good
                    </span>
                    <div className="flex w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-400">
                        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-green-400" style={{width:"80%"}}> </div>
                    </div>
                    <div className="py-2 ">
                        <Link to="/mostrelevant" className='text-white font-semibold px-2 py-2 text-right bg-green-500 rounded-md float-right text'>
                            View all
                        </Link>
                    </div>
                </div>
            </div>
            
            <div className='flex  my-10'>
                <LineComponent/>
                <PieComponent/>
            </div>

            <div className="flex my-2">
                <VisualCard />
            </div>

            <div className="">
                <OilReserve/>
            </div>
        </div>
    )
}

export default Dashboard
