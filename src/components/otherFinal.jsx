import '../style/otherFinal.css'
import dti from 'dom-to-image'
import React, { Component } from 'react'

export default class otherFinal extends Component {
  state = {
    image: false
  }
  render() {
    let val = '值此教师节来临之际，感谢' + this.props.location.state.val;

    let style = {
      height: window.screen.height / 16 + 'em'
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
      </div>
    )
  }

  componentDidMount = () => {
    let node = document.querySelector('.container');
    dti.toSvg(node)
      .then((dataUrl) => {
        var image = new Image();
        image.src = dataUrl;
        image.onload = () => {
          node.style.display = 'none';
          this.setState({
            image:true
          })
          document.querySelector('.other_final').appendChild(image)
        }
      })
  }

}

