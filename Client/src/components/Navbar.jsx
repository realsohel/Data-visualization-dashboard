import React, { createContext, useContext, useState } from 'react'
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { FiMoreVertical } from "react-icons/fi";

const NavbarContext = createContext()

const Navbar = ({children}) => {

    const [expanded, setExpanded] = useState(true)


    return (
        <aside className={`h-screen ${expanded ? "w-[18%]" : ""} sticky top-0`}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    <img src="./images/black-doffer.png" alt="" 
                        className={`overflow-hidden transition-all ${
                            expanded ? "w-32" : "w-0"
                        }`}
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <LuChevronFirst /> : <LuChevronLast />}
                    </button>
                </div>

                <NavbarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3 mt-8 border-t pt-4">{children}</ul>
                </NavbarContext.Provider>
                
                <div className="border-t flex p-3 bg-gray-50">
                    <img src="./images/hacker.png" alt="" 
                        className='bg-blue-100 w-10 h-10 rounded-md'
                    />
                    <div 
                        className={`
                            flex justify-between items-center
                            overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
                        `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">
                                Sohel Salmani
                            </h4>
                            <span className='text-xs text-gray-600'>
                                salmanisohail26@gmail.com
                            </span>
                        </div>
                        <FiMoreVertical size={20} className='cursor-pointer'/>
                    </div>
                </div>

            </nav>
        </aside>
    )
}

export function NavbarItem({icon,text,active}){
    const { expanded } = useContext(NavbarContext)
    return(
        <li className={`
            relative flex items-center py-2 px-3 my-1 font-medium rounded-md *
            cursor-pointer transition-colors
            ${
                active
                    ?"bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-400"
                    : "hover:bg-indigo-50 text-gray-600 "
            }
            `}
        >
            {icon}
            <span 
                className={`overflow-hidden transition-all ${
                    expanded ? "w-52 ml-3" : "w-0"
                }`}
            >
                {text}
            </span>
        </li>
    )
}
export default Navbar
