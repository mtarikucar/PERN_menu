import { useState } from 'react'
import { ChevronRightRounded } from "@mui/icons-material";
function Catagory({ imgSrc, name }) {
    const [active, setActive] = useState(false)
    console.log(active);
    return (
        <div onClick={() => setActive(!active)} >
            <div className={`rowMenuCard ${active && `active`}`}>
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

export default Catagory