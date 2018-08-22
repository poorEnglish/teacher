import '../style/teacher.css'
import React, { Component } from 'react'

export default class teacher extends Component {
  render() {
    let { history, location } = this.props;
    let sex = location.state.sex;
    let cls = `wenan${Math.floor(Math.random() * 9 + 1)}`;

    let yearTip = '', numTip = '', yearValue = '', numValue = '';


    function onFocus(e) {
        e.target.placeholder = "";
        clearTip(e.target.className+'Tip')
    }

    function onBlue(e, str) {
        e.target.placeholder = str
    }


    var reg = /^\d*$/;

    function changeYear(ev) {
        clearTip(ev.target.className+'Tip')
        let val = ev.target.value;
        if (!reg.test(val)) {
            showTip('.yearTip', '不能有非数字');
        } else if (val > 60) {
            showTip('.yearTip', '最大为60年');
        } else {
            yearValue = val
        }
        ev.target.value = yearValue;
    }

    function changeNum(ev) {
        clearTip(ev.target.className+'Tip');
        let val = ev.target.value;
        if (!reg.test(val)) {
            showTip('.numTip', '不能有非数字');
        } else if (val >= 100000) {
            showTip('.numTip', '不能大于10万');
        } else {
            numValue = val;
        }
        ev.target.value = numValue;
    }

    function showTip(selector, tip) {
        document.querySelector(selector).innerText = tip
    }

    function clearTip(cls){
        document.querySelector('.'+cls).innerText = ''
    }

    function submit(){
        clearTip('numTip');clearTip('yearTip')
        if(!yearValue){
            showTip('.yearTip', '教龄不能为空');
            return;
        }else if(!numValue){
            showTip('.numTip', '学生数不能为空');
            return ;
        }else{
            history.push('/teacherFinal',{sex,numValue,yearValue})
        }
    }
    let style={
        height:window.screen.height/16+'em'
    }
    if(window.screen.height/window.screen.width>2.1){
        style.width=parseInt(style.height)*750/1334+'em'
    }

    return (
        <div className="teacher">
            <div className={`container ${sex}`}   style={style}>
                <div className={`wenan ${cls}`} ></div>
                <input type="text" className="year" onFocus={onFocus} onBlur={(ev) => { onBlue(ev, '请输入教龄') }} onChange={changeYear} placeholder="请输入教龄" />
                <span className="tip yearTip">{yearTip || ''}</span>
                <input type="text" className="num" onFocus={onFocus} onBlur={(ev) => { onBlue(ev, '请输入已培养学生数') }} onChange={changeNum} placeholder="请输入已培养学生数" />
                <span className="tip numTip">{numTip || ''}</span>
                <div className="create" onClick={submit}>
                </div>
            </div>
        </div>

    )
  }

  componentDidMount = () => {
    this.height=document.body.clientHeight;
    window.onresize=()=>{
        document.body.style.height=this.height;

    }
  }
  
}

