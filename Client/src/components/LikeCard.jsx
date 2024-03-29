import React from 'react'

const LikeCard = ({dumpdata}) => {
    return (
            <div className="liked-card ">
                <h1 className='primaryText'>
                    {dumpdata.title.length>40?`${dumpdata.title.slice(0,40)}...`:dumpdata.title}
                </h1>

                <div className='my-4 text-md border-t'>
                    <span className='font-medium text-gray-400'>
                    Insight : {""}
                    </span> 
                    <span className='secondaryText'>
                    {dumpdata.insight.length>25?`${dumpdata.insight.slice(0,25)}...`:dumpdata.insight}
                    </span>
                </div>
                <div className='mt-1 text-md '>
                    <span className='font-medium text-gray-400'>
                    Source : {""}
                    </span> 
                    <span className='secondaryText'>
                    { dumpdata.source}
                    </span>
                </div>

                <div className='mt-1 text-md '>
                    <div>
                    <span className='font-medium text-gray-400 '>
                        Sector  : {""}
                        
                    </span> 
                    <span className='secondaryText'>
                    { dumpdata.sector?dumpdata.sector:"None"}
                    </span>
                    </div>
                    <div>
                    <span className='font-medium text-gray-400 '>
                        Pestle : {""}
                    </span> 
                    <span className='secondaryText'>
                    { dumpdata.pestle}
                    </span>
                    </div>

                    <div className='mt-1 text-md '>
                        <span className='font-medium text-gray-400'>
                            {"Relevance : "}
                        </span> 
                        <span className='secondaryText'>
                        { dumpdata.relevance}
                        </span>
                    </div>
                </div>

                <div className=''>
                    <a href={dumpdata.url} target='__blank' 
                    className='bg-indigo-400 border rounded-md p-2 text-white  float-right hover:shadow-md'>
                    Read more
                    </a>
                </div>
            </div>
    )
}

export default LikeCard
