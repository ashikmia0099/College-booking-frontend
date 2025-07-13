import React from 'react'
// import profileimage from '../../../../public/images/blogsimages/Container.png'
import Image from 'next/image'
import { IoMdLogOut } from 'react-icons/io'

function SidebarHeader() {
  return (
    <div className=' border-b pb-5'>

      <div className='  items-center gap-5 px-5 py-2 pt-5'>
        
        {/* text */}
        <div>
          <h4 className=' text-xl font-semibold text-[#ffffff]'>Ashik Ahammed</h4>
          
        </div>
     
      </div>
    </div>
  )
}

export default SidebarHeader