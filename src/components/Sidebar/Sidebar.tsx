'use client'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { setOpenMenu } from "@/redux/features/dashBoardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image"
import { useState } from "react"
import './Sidebar.scss'

export default function Sidebar() {
    const menuActive = useAppSelector((state) => state.dashBoardSlice.openMenu)
    const dispatch = useAppDispatch()

    return (
        <section className='flex-[0_1_234px] pl-[1.25rem] bg-[#27272A] pr-[1.25rem]' >
            <div className="w-full">

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-[#A1A1AA] text-sm">Название проекта</AccordionTrigger>
                        <AccordionContent>
                            <button className="flex gap-x-2 items-center " onClick={() => { dispatch(setOpenMenu()) }}>
                                <div className="">
                                    <Image
                                        className='flex justify-center '
                                        // loader={() => '/preloader.png'}
                                        src={'/menu-icon.svg'}
                                        alt="cover"
                                        width={22}
                                        height={22}
                                        sizes="100vw"
                                        // Make the image display full width
                                        // style={{
                                        //     width: '100%',
                                        //     height: 'auto',
                                        // }}
                                        // blurDataURL="/preloader.png"
                                        objectFit='cover'
                                        // placeholder="blur" // Optional blur-up while loading
                                        unoptimized

                                    ></Image>
                                </div>
                                <div className="text-sm text-white">CMP</div>

                            </button>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    )
}
