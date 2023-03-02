import React from 'react'
import Categories from '../components/Categories'
import Mainİmage from '../components/Mainİmage'
import DishContainer from './DishContainer'

function Main() {
  return (
    <div>
        <main>
            <div className='mainContainer'>
            <Mainİmage/>
            <DishContainer/>
            </div>
            <div className='rightMenu'>

            </div>
        </main>
    </div>
  )
}

export default Main