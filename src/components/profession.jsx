import React from 'react'
import '../style/profession.css'
import util from '../utils'
export default (props) => {

  let style = {
    height: (window.screen.availHeight-util.getCutLength())/16+'em'
  }
  if (window.screen.height / window.screen.width > 2.1) {
    style.width = parseInt(style.height) * 750 / 1334 + 'em'
  }
  

  return (
    <div className="profession">
      <div className='container' style={style}>
        <div className="button b1" onClick={() => props.history.push('/teacher', { sex: 'male' })}>男教师</div>
        <div className="button b2" onClick={() => props.history.push('/teacher', { sex: 'female' })}>女教师</div>
        <div className="button b3" onClick={() => props.history.push('/other')} >其他</div>
      </div>
    </div>

  )
}
