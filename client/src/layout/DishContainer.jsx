import { useState } from 'react'
import Catagores from '../components/Catagores'
import Products from '../components/Products'

function DishContainer() {
    const [filter, setFilter] = useState('')
    return (
        <div>
            <div className="dishContainer">
                <Catagores setFilter={setFilter} />
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