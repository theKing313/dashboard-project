"use client"

import Image from "next/image"
import './Header.scss'
import Link from "next/link"

export default function Header() {

    return (
        <header className="bg-[#27272A] h-11 border-[1px] border-b-[#414144] border-t-0 border-x-0 ">
            <div className="header-container ">
                <div className="flex gap-x-5">
                    <button className="burger">
                        <Image
                            className={`flex justify-center `}
                            // left: `${8 * index}px`,
                            //
                            // loader={() => '/preloader.png'}
                            src={'/icon.svg'}
                            alt="cover"
                            width={21.5}
                            height={21.5}
                            sizes="100vw"
                            objectFit='cover'
                            unoptimized
                        ></Image>
                    </button>
                    <button className="">
                        <Image
                            className={`flex justify-center `}
                            // left: `${8 * index}px`,
                            //
                            // loader={() => '/preloader.png'}
                            src={'/icon-back.svg'}
                            alt="cover"
                            width={21.5}
                            height={21.5}
                            sizes="100vw"
                            objectFit='cover'
                            unoptimized
                        ></Image>
                    </button>
                </div>
                <nav className='menu h-full'>
                    <ul className='menu-items '>
                        <button className='menu-items__link' >Dashboard</button>
                        <button className='menu-items__link'>Advanced Quarry</button>
                    </ul>
                </nav>
            </div>
        </header>

    )
}
