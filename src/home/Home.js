import React,{Fragment} from 'react';
import "./Home.css"
import Videobanner from './Videobanner';
import data from "../data/data.json"
import logo1 from "../asset/logo1.jpg"
import {Link} from "react-router-dom";
import {motion} from "framer-motion"
import Themetoggle from './Themetoggle';
import {themeContext} from "../Contexttheme"
import {useContext} from "react"

const Home = () => {
    const theme=useContext(themeContext)
    const darkMode=theme.state.darkMode


    const linkhandler=(i)=>{
        let allsinglelink=document.querySelectorAll(".footerlink");
        allsinglelink.forEach((item,index)=>{
            if (index===i) {
                item.style.opacity=0.2

            } else{
                item.style.opacity=1
            }
        })
    };

    const linksbacktonormal=(e)=>{
        const allsinglelinks=document.querySelectorAll(".footerlink");
        allsinglelinks.forEach((item)=>(item.style.opacity=1));
    }

    const {freshTopic,freshTopic2,map}=data


    const randomnumber=Math.floor(Math.random()*1000);
    console.log(randomnumber)
  return (
    <Fragment>
       <Themetoggle/>
        <Videobanner/>
        <div className="section">
            <div className="heading">{freshTopic.heading}</div>
            
            <motion.div
            initial={{
                y:"100%",
                opacity:0,
                scale:0.1
            }}
            whileInView={{
                y:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                delay:0.5
            }}
            >{freshTopic.text}</motion.div>
            <div><motion.img src={logo1} alt="logo1"
            initial={{
                y:"100%",
                opacity:0
            }}
            whileInView={{
                
                y:0,
                opacity:1,
            }}
            transition={{
                delay:0.5
            }}
            /></div>

        </div>
        <div className="section" 
        style={{background:darkMode?"black":"white"}}
        >
            <div className="heading">{map.heading}</div>
            <div>{map.text}</div>
            <div><img src={logo1} alt="logo1" /></div>

        </div>
        <div className="section"
        style={{background:darkMode?"black":"white"}}
        >
            <div className="heading">{freshTopic2.heading}</div>
            <div>{freshTopic2.text}</div>
            <div><img src={logo1} alt="logo1" /></div>

        </div>

        <footer>
            <div className="alllinks" onMouseLeave={(e)=>linksbacktonormal()}>
                <div><Link to="/about" style={{textDecoration:"none"}} className="footerlink" onMouseOver={(e)=>linkhandler(0)}>About</Link></div>
                <div><Link to="/services" className="footerlink" onMouseOver={(e)=>linkhandler(1)}>Services</Link></div>
                <div><Link to="/category" className="footerlink" onMouseOver={(e)=>linkhandler(2)}>Category</Link></div>
                <div><Link to="/blogs" className="footerlink" onMouseOver={(e)=>linkhandler(3)}>Blogs</Link></div>
                <div><Link to="/article" className="footerlink" onMouseOver={(e)=>linkhandler(4)}>Article</Link></div>

            </div>
            <div className="phone">
            <h3>Phone</h3>
            <a href="tel:+923165205289">+923165205289</a>
            </div>
            
            <div className="mailto">
            <h3>Email Us</h3>
            <a href="mailto:ks6771455@gmail.com">ks6771455@gmail.com</a>
            <div><a href="mailto:ambreenkhurram004@gmail.com">mailto</a></div>
            
            
        
            </div>
        </footer>
    </Fragment>
  )
}

export default Home