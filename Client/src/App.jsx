import { useState } from 'react'
import './App.css'
import Navbar, { NavbarItem } from './components/Navbar'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Dashboard from './components/Dashboard';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MostLiked from './pages/MostLiked';
import MostRelevant from './pages/MostRelevant';

function App() {
  return (
    <section className='bg-gray-100 flex'>
      <BrowserRouter>
      <Navbar>
        <NavbarItem
          icon={<MdOutlineSpaceDashboard size={20}/>}
          text={"Dashboard"}
          active
        />
        <NavbarItem
          icon={<ImStatsDots size={20}/>}
          text={"Statistics"}
        />
        <NavbarItem
          icon={<IoSettingsOutline size={20}/>}
          text={"Settings"}
        />
        <NavbarItem
          icon={<IoIosHelpCircleOutline size={20}/>}
          text={"Help"}
        />
      </Navbar>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/mostliked' element={<MostLiked/>}/>
        <Route path='/mostrelevant' element={<MostRelevant/>}/>
      
      
      </Routes>

      </BrowserRouter>
    </section>
  )
}

export default App
