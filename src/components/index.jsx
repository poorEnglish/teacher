import '../style/index.css'
import React from 'react'

export default (props) => {
    function goToProfession() {
        props.history.push('/profession')
    }

    let style={
        height:window.screen.height/16+'em'
    }
    if(window.screen.height/window.screen.width>2.1){
        style.width=parseInt(style.height)*750/1334+'em'
    }

    return (
        <div className="home">
            <div className='container' style={style}>
                <div className="line line1 "></div>
                <div className="line odd line2 "></div>
                <div className="line line3 "></div>
                <div className="line odd line4 "></div>
                <div className="ganen" onClick={goToProfession}></div>
            </div>
        </div>
    )
}