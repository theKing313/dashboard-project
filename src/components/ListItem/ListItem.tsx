import { changeItem, createNewItem, deleteItem } from '@/redux/features/dashBoardSlice';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import React, { useState } from 'react'

const ListItem = ({ item, depth, setParentId, parentId }: any) => {
    console.log(depth)
    console.log(item)
    // const [parentId, setParentId] = useState<any>(null)
    const [activeForm, setActiveForm] = useState(false)

    const dispatch = useAppDispatch()
    const handleItemClick = (id: number) => {
        // setActiveForm(!activeForm)
        setParentId(id)

        dispatch(createNewItem())
    }

    const [isCurrentBeingUpdated, setisCurrentBeingUpdated] = useState(false)
    const renderTitleOrInput = () => {
        const [searchsalary, setSearchSalary] = useState<string>(item?.salary)
        const [searchRowName, setSearchRowName] = useState<string>(item?.rowName)
        const [searchMaterials, setSearchMaterials] = useState<string>(item.materials)
        const [searchOverheads, setSearchOverheads] = useState<string>(item?.overheads)
        const [searchEstimatedProfit, setSearchEstimatedProfit] = useState<string>(item?.estimatedProfit)

        // const [equipmentCost, setEquipmentCost] = useState<string>('0')

        console.log(depth)
        const changeHandleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
            e.preventDefault();
            const newItem = {

                equipmentCosts: 0,
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

            console.log(item.id)
            dispatch(changeItem({ item: newItem, id: item.id }))
            setisCurrentBeingUpdated(false)
        }
        return isCurrentBeingUpdated ? (
            <form className='search-form w-full col-span-8' onSubmit={changeHandleSubmit}>
                {/* flex  justify-between */}
                <div className='search-form-elem  grid grid-cols-8 gap-4 h-[2.5rem]'>

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

                    <input type="text" className='form-control col-span-3' placeholder={item?.rowName}
                        // value={searchsalary}
                        onChange={(e) => setSearchRowName(e.target.value)}
                    />

                    <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchSalary(e.target.value) }} />
                    <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchMaterials(e.target.value) }} />
                    <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchOverheads(e.target.value) }} />
                    <input type="text" className='form-control ' placeholder='0' onChange={(e) => { setSearchEstimatedProfit(e.target.value) }} />

                    <button className='hidden'></button>



                </div>

            </form>
        ) : (
            <>

                <div className="relative">
                    <button className="flex gap-x-3 relative button-hover items-center">
                        <Image
                            className=' '
                            // loader={() => '/preloader.png'}

                            // changeItem(item.id)

                            onClick={() => { handleItemClick(item.id) }}
                            src={'/artilce.svg'}
                            alt="cover"
                            width={22}
                            height={22}
                            sizes="100vw"
                            objectFit='cover'
                            unoptimized
                        ></Image>


                        <Image
                            onClick={() => { dispatch(deleteItem(item.id)) }}
                            className=' '
                            // loader={() => '/preloader.png'}
                            src={'/trash.svg'}
                            alt="cover"
                            width={20}
                            height={20}
                            sizes="100vw"
                            objectFit='cover'
                            unoptimized
                        ></Image>
                    </button>
                    {item.child.length > 0 &&

                        item.child.map((item: any, index: number) => {
                            return (
                                <div key={index}>
                                    {/* <div className={`absolute left-[${index * 4}rem]`}  >fred</div>  left-[${index * 4}rem] top-[${index * 4}px]*/}
                                    <Image
                                        className={`flex justify-center absolute z-[8]`}

                                        key={index}
                                        style={{ left: `${10}px`, top: `${82 * index}px` }}
                                        src={'/line.svg'}
                                        alt="cover"
                                        width={21.5}
                                        height={21.5}
                                        sizes="100vw"
                                        objectFit='cover'
                                        unoptimized
                                    ></Image>
                                </div>

                            )
                        })
                    }
                </div>
                <button className='item__label col-span-3 text-left' onDoubleClick={() => { setisCurrentBeingUpdated(!isCurrentBeingUpdated); }}>{item.rowName} </button>
                <div className='item__label ' >{item?.salary} </div>
                <div className='item__label'>{item.materials} </div>
                {/* <div className='item__label'>{item?.equipmentCosts} </div> */}
                <div className='item__label'>{item?.overheads} </div>
                <div className='item__label'>{item?.estimatedProfit} </div>


            </>
        );
    };
    return (
        // ${childParent && 'pl-6'  }
        <div className={`pl-[.9375rem]  grid grid-cols-8 gap-4 h-[3.75rem]  items-center `}>
            {renderTitleOrInput()}
        </div >

    )
}
export default ListItem