import React from 'react'
import '../style/otherFinal.css'
export default (props) => {
    // if(window.screen.height/window.screen.width<1.61){
    //     document.querySelector('html').style.fontSize='90%'
    // }
    let val='值此教师节来临之际，感谢'+props.location.state.val;

    let style={
        height:window.screen.height/16+'em'
    }
    if(window.screen.height/window.screen.width>2.1){
        style.width=parseInt(style.height)*750/1334+'em'
    }

  return (
    <div className='other_final'>
      <div className="container" style={style}>
        <p className='desc'>{val}</p>
      </div>
    </div>
  )
}
