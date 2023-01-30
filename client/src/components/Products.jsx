import { useState, useEffect } from 'react'
import { MenuItems, Items } from "./Data"
import Product from './Product';

function Products({ filter }) {

    const [isMainData, setMainData] = useState(Items);
    useEffect(() => {
        setMainData(filter ==='' ? Items : Items.filter((element) => element.itemId == filter))
    }, [filter])
    useEffect(()=>{
        setMainData(Items)
    },[])
    return (
        <div>
            <div className="dishItemContainer">
                {isMainData &&
                    isMainData.map((data) => (
                        <Product
                            key={data.id}
                            itemId={data.id}
                            imgSrc={data.imgSrc}
                            name={data.name}
                            ratings={data.ratings}
                            price={data.price}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Products