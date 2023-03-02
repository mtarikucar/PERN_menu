import { useEffect, useState } from 'react'
import { ChevronRightRounded } from "@mui/icons-material";
function Category({ imgSrc, name,setActiveCategory,activeCategory }) {
    const [active, setActive] = useState(false)
     const handleClick = (() => {
        setActiveCategory(name)
        console.log(name);
    }) 
    return (
        <div >
            <div onClick={() => handleClick()} 
            className={ activeCategory ===name ? 'active rowMenuCard' : 'rowMenuCard'}>
                <div className="imgBox">
                    <img src={imgSrc} alt="" />
                </div>
                <h3>{name}</h3>
                <i className="loadMenu"  >
                    <ChevronRightRounded />
                </i>
            </div>
        </div>
    )
}

export default Category