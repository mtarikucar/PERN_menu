import {useEffect,useState} from 'react'
import Header from '../layout/Header'
import Menus from '../layout/Menus'
import Main from '../layout/Main'

function Home() {
  
  return (
    <div>
      <Header/>
      <Menus/>
      <Main/>
    </div>
  )
}

export default Home