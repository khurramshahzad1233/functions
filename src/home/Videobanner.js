import React,{Fragment} from 'react'
import banner from "../asset/video.mp4"
import "./Videobanner.css"

const Videobanner = () => {
  return (
    <Fragment>
        <div className="introvideo">
        <video src={banner} alt="avatar-videos" autoPlay muted loop controlsList='nodownload'></video>
        <div></div>
        </div>
       
    </Fragment>
  )
}

export default Videobanner