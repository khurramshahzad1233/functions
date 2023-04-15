import React,{useEffect} from 'react'
import {Routes,Route,BrowserRouter as Router} from "react-router-dom";
import "./App.css";
import WebFont from 'webfontloader';
import Home from './home/Home';
import Colorsetting from './color/Colorsetting';
import Cursor from './cursor/Cursor';
import Design from './designs/Design';
import Watch from "./components/watch/Clock"
import Map from './map/Map';


const App = () => {

  const dotcursor=(e)=>{
    const cursor=document.querySelector(".cursor");
    cursor.style.top=`${e.pageY-12}px`
    cursor.style.left=`${e.pageX-12}px`
  }

  useEffect(()=>{
   

    WebFont.load({google:{
      families:["Roboto","Chilanka","Droid Sans","Montserrat","Poppins","Open Sans","Bangers"]
    }});


    window.addEventListener("mousemove",dotcursor)
    return ()=>{
      window.removeEventListener("mousemove",dotcursor)
    };
  },[])
  return (
    <Router>
      <Cursor/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/color' element={<Colorsetting/>}/>
        <Route path='/design' element={<Design/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/map' element={<Map/>}/>

      </Routes>
    </Router>
  )
}

export default App