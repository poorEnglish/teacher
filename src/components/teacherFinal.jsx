import React from 'react'
import '../style/teacherFinal.css'
export default (props) => {
    // let device=window.screen.height/window.screen.width;
    // if(device<1.61||device>1.91){
    //     document.querySelector('html').style.fontSize='100%'
    // }else if(device>1.61&&device<1.63){
    //     document.querySelector('html').style.fontSize='110%'
    // }

    let { sex, numValue, yearValue } = props.location.state;
    let cls = `wenan${Math.floor(Math.random() * 9 + 1)}`;
    let numClasses = (numValue + '').split('').map(n => ('num' + n)); 
    let yearClasses = (yearValue + '').split('').map(n => ('num' + n));

    let style={
        height:window.screen.height/16+'em'
    }
    if(window.screen.height/window.screen.width>2.1){
        style.width=parseInt(style.height)*750/1334+'em'
    }

    return (
        <div className='teacher_final' >
            <div className={`container ${sex}`} style={style} >
                <div className={`wenan ${cls}`} ></div>
                <div className="box"  >
                    <div className="year_images" style={{ width: yearClasses.length * 2.5 + 'em' }}>
                        {
                            yearClasses.map((cls, i) => {
                                return <div key={i + 'l'} className={cls + ' num_image'}></div>
                            })
                        }
                    </div>
                </div>


                <div className="num_images" style={{ width: numClasses.length * 2.5 + 'em' }}>
                    {
                        numClasses.map((cls, i) => {
                            return <div key={i + 'i'} className={cls + " num_image"}></div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
