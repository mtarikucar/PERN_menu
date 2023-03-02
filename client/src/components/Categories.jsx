import { useState } from 'react'
import Category from './Category'
import SubCatagoy from './SubCatagoy'
import { MenuItems, Items } from "./Data"



function Categories({setFilter}) {
const [activeCategory, setActiveCategory]=useState('')
    return (
        <div className="menuCard">
            <SubCatagoy />
            <div className="rowContainer">
                {MenuItems &&
                    MenuItems.map((data) => (
                        <div key={data.id} onClick={() => setFilter(data.itemId)}>
                            <Category
                            setActiveCategory={setActiveCategory}
                            activeCategory={activeCategory}
                                imgSrc={data.imgSrc}
                                name={data.name}
                            />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Categories