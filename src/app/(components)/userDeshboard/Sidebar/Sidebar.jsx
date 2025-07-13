
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory, MdFolderShared, MdContactPhone } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';
import { CiBoxList, CiViewList } from 'react-icons/ci';
import { FcBusinessContact } from 'react-icons/fc';



function Sidebar() {
  const pathname = usePathname();

  // Separate dropdown states
  const [AllUsersdropDown, setAllUsers] = useState(false);
  
  const [workDropdown, setWorkDropdown] = useState(false);
  


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;

  return (
    <div className="bg-[#191919] h-full ">
      <div className="max-w-[1596px] ">

        {/* Login logout users */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full">
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaUsers /></span>
              <Link href="/userDeshboard/User_Data_Edit"><span>Update Profile Data</span></Link>
              
            </div>
          </div>
        </li>




        {/* News */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full">
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNetworkWired /></span>
              <Link href="/userDeshboard/Password_Edit"><span>Update Password</span></Link>
            </div>
          </div>
        </li>
      </div>
    </div>
  );
}

export default Sidebar;