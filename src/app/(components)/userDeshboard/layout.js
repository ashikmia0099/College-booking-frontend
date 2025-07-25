
import React from 'react'
import SidebarHeader from './Sidebar/SidebarHeader'
import Sidebar from './Sidebar/Sidebar'



function UserDeshboard_layout({ children }) {
  return (
    <div className=' grid grid-cols-12 max-w-7xl mx-auto bg-[#191919] h-[100vh] '>
      <div className=' col-span-3  border-r grid  grid-rows-12 h-[100vh]'>
        <div className='row-span-2 '>
        <SidebarHeader></SidebarHeader>
       
        </div>
        <div className='row-span-9  overflow-y-auto'>
        <Sidebar></Sidebar>
        </div>
      
      </div>
      <div className=' col-span-9 h-[100vh] overflow-y-auto'>
        <main>
          {children}
        </main>
      </div>
     
      
    </div>
  )
}

export default UserDeshboard_layout


