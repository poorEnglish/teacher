import React from 'react'
import '../style/other.css'
import util from '../utils'
export default (props) => {

    // if(window.screen.height/window.screen.width<1.61){
    //     document.querySelector('html').style.fontSize='90%'
    // }else{
    //     document.querySelector('html').style.fontSize='100%'
    // }
    function onFocus(e) {
        e.target.placeholder = "";
        document.querySelector('.otherTip').innerText=''
    }
    let val = '';

    function submit() {
        if (!val) {
            document.querySelector('.otherTip').innerText='学校和老师不能为空';
            return;
        }
        props.history.push('/otherFinal', { val })
    }

    let style={
        height:(window.screen.availHeight-util.getCutLength())/16+'em'
    }


    if(window.screen.height/window.screen.width>2.1){
        style.width=parseInt(style.height,10)*750/1334+'em'
    }

    return (
        <div className='other'>
            <div className="container" style={style}>
                <div className="thanks">值此教师节来临之际，感谢</div>
                <input type="text" placeholder='请输入学校及教师名' maxLength={30} onFocus={onFocus}
                    onBlur={e => e.target.placeholder = '请输入学校及教师名'} className='school_name' onChange={(e) => { val = e.target.value }} />
                <span className="tip otherTip"></span>
                <div className="submit" onClick={submit}></div>
            </div>
        </div>
    )
}
