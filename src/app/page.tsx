"use client"
import Dashboard from '@/components/Dashboard/Dashboard'
import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import Image from 'next/image'
import { useAppSelector } from "@/redux/hooks"
export default function Home() {
  const menuActive = useAppSelector((state) => state.dashBoardSlice.openMenu)
  console.log(menuActive)
  return (
    <div className='flex flex-col h-screen'>
      <Header />

      <div className=" flex overflow-hidden w-full h-full bg-[--background-dark-elevated-secondary]"   >
        <Sidebar />
        <div className="relative flex flex-col flex-1 overflow-hidden">
          <div className=" bg-[#27272A] h-11 flex items-center border-[1px] border-[#414144]">
            {/* <div> */}
            {/* {menuActive && <button className="">Строительно-монтажные работы</button>} */}

            {menuActive ? <button className="pl-[.9375rem]  pr-[.9375rem] border-[1px] border-[#414144] h-full text-lg text-white " >Строительно-монтажные работы</button> : ""}

            {/* </div> */}

          </div>
          <main className='flex overflow-hidden w-full bg-[#202124] h-full'>
            <Dashboard />

          </main>
        </div>
      </div>
    </div>
  )
}
