import React, { Fragment } from 'react'
import "./Design.css"
import Circle from './Circle'
import Circledesign from './Circledesign'
import Slider from './Slider'
import Testimonial from './Testimonial'

const Design = () => {
  return (
    <Fragment>
        <Circle/>
        <Circledesign/>
        <Slider/>
        <Testimonial/>
    </Fragment>
  )
}

export default Design