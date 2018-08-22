import React from 'react'
import '../style/mediaContoller.css'
export default () => {

    const click=()=>{
        let vidio=document.querySelector('audio');
        let isPlaying=/j\d/.test(document.querySelector('.jumper').className);
        if(isPlaying){
            //暂停音乐和动画
            vidio.pause();
            document.querySelectorAll('.jumper').forEach(v=>{
                v.className='jumper'
            })
        }else{
            vidio.play();
            document.querySelectorAll('.jumper').forEach((v,i)=>{
                v.className=`jumper j${i}`
            })
        }
    }

    return (
        <div className='controller pause' onClick={click}>
           <div className="jumper j0"></div>
           <div className="jumper j1"></div>
           <div className="jumper j2"></div>
           <div className="jumper j3"></div>
        </div>
    )
}
