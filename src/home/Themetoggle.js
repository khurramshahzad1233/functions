import React,{Fragment,useContext} from 'react'
import "./Themetoggle.css"
import {FaSun,FaMoon} from "react-icons/fa"
import {themeContext} from "../Contexttheme"

const Themetoggle = () => {

    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;

    const themehandler=(e)=>{
        theme.dispatch({type:"toggle"})

    }
  return (
    <Fragment>
        <div className="toggle" onClick={(e)=>themehandler()}>
            <FaMoon/>
            <FaSun/>

            <div className="t-button"
            style={darkMode?{left:"2px"}:{right:"2px"}}
            >

            </div>
        </div>
    </Fragment>
  )
}

export default Themetoggle