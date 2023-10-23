'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import './dashboard.scss'
import { useEffect, useState } from 'react'
import { getAllItems, setNewItem, deleteItem, changeItem } from '@/redux/features/dashBoardSlice'
import Image from 'next/image'
import ListItem from '../ListItem/ListItem'


type TEntry = {
    rowName: string,
    id: string,
    salary: string,
    machineOperatorSalary: string,
    estimatedProfit: string,
    child?: [],
}


export default function Dashboard() {
    const menuActive = useAppSelector((state) => state.dashBoardSlice.openMenu)
    const activeForm = useAppSelector((state) => state.dashBoardSlice.activeForm)
    const items = useAppSelector((state) => state.dashBoardSlice.items)

    const dispatch = useAppDispatch()
    useEffect(() => {
        if (items.length !== 0) {
            dispatch(getAllItems())
        }
    }, [])

    const [parentId, setParentId] = useState<null | number>(null)



    // testing 
    const [childParent, setChildParent] = useState(false)


    const [searchsalary, setSearchSalary] = useState<string>('0')
    const [equipmentCost, setEquipmentCost] = useState<string>('0')
    const [searchRowName, setSearchRowName] = useState<string>('')
    const [searchMaterials, setSearchMaterials] = useState<string>('0')
    const [searchOverheads, setSearchOverheads] = useState<string>('0')
    const [searchEstimatedProfit, setSearchEstimatedProfit] = useState<string>('0')


    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
        e.preventDefault();
        const newItem = {
            equipmentCosts: equipmentCost,
            estimatedProfit: searchEstimatedProfit,
            machineOperatorSalary: 0,
            mainCosts: 0,
            materials: searchMaterials,
            mimExploitation: 0,
            overheads: searchOverheads,
            parentId: parentId,
            rowName: searchRowName,
            salary: searchsalary,
            supportCosts: 0
        }
        dispatch(setNewItem(newItem))

    }




    // testing 
    function Entry({ entry, depth }: { entry: any, depth: number }) {

        console.log(entry)
        return (
            <>
                {/*border-[1px] border-y-[#414144] border-x-0 */}
                <div className="w-full border-item">
                    {<div style={{ paddingLeft: `${25}px` }}>
                        <ListItem
                            item={entry}
                            childParent={true}
                            depth={depth + 1}
                            setParentId={setParentId}
                            parentId={parentId}
                        >
                        </ListItem>
                        {entry.child?.map((entry: any, index: number) => <Entry key={index} entry={entry} depth={depth + 1}></Entry>)}
                    </div >}
                </div>
            </>
        )
    }
    return (
        <section className='w-full'>
            <div className={`pl-[.9375rem] grid grid-cols-8 gap-4 h-[2.5rem]  items-center border-[1px] border-[#414144]`}>
                <div className='text-[#A1A1AA] text-sm '>Уровень</div>
                <div className='text-[#A1A1AA] text-sm col-span-3'>Наименование работ</div>
                <div className='text-[#A1A1AA] text-sm'>Основная з/п</div>
                <div className='text-[#A1A1AA] text-sm'>Оборудование</div>
                <div className='text-[#A1A1AA] text-sm'>Накладные расходы</div>
                <div className='text-[#A1A1AA] text-sm'>Сметная прибыль</div>
            </div>
            {menuActive &&
                <>
                    {items && items?.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <ListItem
                                    item={item}
                                    setParentId={setParentId}
                                    parentId={parentId}
                                ></ListItem>
                                {item?.child.map((item: any, index: number) => { return (<Entry key={index} entry={item} depth={0}></Entry>) })}
                            </div>
                        )

                    })}
                    {/*  && activeForm && */}
                    {items.length === 0 || activeForm ?
                        <>

                            <form className='search-form w-full pl-[.9375rem]' onSubmit={handleSubmit}>

                                <div className='search-form-elem'>
                                    <div className={`${childParent && 'pl-6'} grid grid-cols-8 gap-4 h-[3.75rem]  items-center`}>
                                        <Image
                                            className='flex justify-center '
                                            // loader={() => '/preloader.png'}
                                            src={'/artilce.svg'}
                                            alt="cover"
                                            width={22}
                                            height={22}
                                            sizes="100vw"
                                            objectFit='cover'
                                            unoptimized

                                        ></Image>

                                        <input type="text" className='form-control ' placeholder='New item' onChange={(e) => { setSearchRowName(e.target.value) }} />
                                        <input type="text" className='form-control col-span-3' placeholder='0' onChange={(e) => { setSearchSalary(e.target.value) }} />


                                        <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchMaterials(e.target.value) }} />
                                        <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchOverheads(e.target.value) }} />

                                        {/* <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setEquipmentCost(e.target.value) }} /> */}
                                        <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchEstimatedProfit(e.target.value) }} />
                                        <button className='hidden'></button>
                                    </div >

                                </div>

                            </form>


                        </>
                        : ''}
                </>

            }
        </section >
    )
}
