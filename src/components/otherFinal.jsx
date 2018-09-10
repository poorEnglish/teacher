import '../style/otherFinal.css'
import dti from 'dom-to-image'
import React, { Component } from 'react'
import util from '../utils'
export default class otherFinal extends Component {
  state = {
    image: false
  }
  render() {
    let val = '值此教师节来临之际，感谢' + this.props.location.state.val;

    let style = {
      height: (window.screen.availHeight-util.getCutLength())/16+'em'
    }
    if (window.screen.height / window.screen.width > 2.1) {
      style.width = parseInt(style.height) * 750 / 1334 + 'em'
    }

    return (
      <div className='other_final'>
        {
          !this.state.image && <div className="container" style={style} >
            <div className='desc'>{val}</div>
          </div>
        }
        <p className='save' style={{left:"61%"}}>长按保存图片</p>
      </div>
    )
  }

  componentDidMount = () => {
    document.querySelector('.controller').style.display='none';
    setTimeout(()=>{
    document.querySelector('.save').style.display = 'none';
    let node = document.querySelector('.container');
    if(util.isIphone()){
      dti.toSvg(node,{ quality: 1 })
      .then((dataUrl) => {
        var image = new Image();
        image.src = dataUrl;
        image.onload = () => {
          this.setState({
            image:true
          })
          document.querySelector('.other_final').appendChild(image)
        }
      })
    }else{
      dti.toPng(node,{ quality: 1 }).then((dataUrl) => {
        var image = new Image();
        image.src = dataUrl;
        image.onload = () => {
          this.setState({
            image:true
          })
          document.querySelector('.other_final').appendChild(image)
        }
      })
    } 
    },2700)
    util.countFinal();
  }

}

