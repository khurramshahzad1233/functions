import React,{useState} from 'react'
import "./Clock.css"

const Clock = () => {
    

    const deg=6;
    const hr=document.querySelector(".hr");
    const min=document.querySelector(".min");
    const sec=document.querySelector(".sec");
    


    setInterval(()=>{
        let day=new Date();

        let hh=day.getHours()*30;
        let mm=day.getMinutes()*6;
        let ss=day.getSeconds()*6;

        hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
        min.style.transform=`rotateZ(${mm}deg)`;
        sec.style.transform=`rotateZ(${ss}deg)`
    })
  return (<div className="bodycontainer">
    <div className="clock">
        <div className="hour">
            <div className="hr"></div>
        </div>
        <div className="minuite">
            <div className="min"></div>
        </div>
        <div className="second">
            <div className="sec">

            </div>
        </div>
    </div>
  </div>
    
  )
}

export default Clock;