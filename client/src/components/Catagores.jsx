import { useState } from 'react'
import Catagory from './Catagory'
import SubCatagoy from './SubCatagoy'
import { MenuItems, Items } from "./Data"


function Catagores({setFilter}) {
    return (
        <div className="menuCard">
            <SubCatagoy />
            <div className="rowContainer">
                {MenuItems &&
                    MenuItems.map((data) => (
                        <div key={data.id} onClick={() => setFilter(data.itemId)}>
                            <Catagory
                                imgSrc={data.imgSrc}
                                name={data.name}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Catagores