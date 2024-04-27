import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/footer/footer'
import Header from './component/header/header'
import Nav from './component/nav/nav'


function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
