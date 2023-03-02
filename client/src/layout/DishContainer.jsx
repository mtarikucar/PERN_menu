import { useState } from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'

function DishContainer() {
    const [filter, setFilter] = useState('')
    return (
        <div>
            <div className="dishContainer">
                <Categories setFilter={setFilter} />
                <div className="rowContainer">
                </div>
                <div className="dishItemContainer">
                    <Products filter={filter} />
                </div>
            </div>
        </div>
    )
}

export default DishContainer