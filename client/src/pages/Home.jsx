import {useEffect,useState} from 'react'
import Header from '../layout/Header'
import Menus from '../layout/Menus'
import Main from '../layout/Main'
import Menuss from '../layout/Menuss'

function Home() {
  
  return (
    <div>
      <Header/>
      <Menuss/>
      <Main/>
    </div>
  )
}

export default Home