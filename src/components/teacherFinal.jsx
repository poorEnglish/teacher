import '../style/teacherFinal.css'
import React, { Component } from 'react'
import dti from 'dom-to-image'
export default class teacherFinal extends Component {

    state = {
        image: false
    }

    render() {
        let { sex, numValue, yearValue } = this.props.location.state;
        let cls = `wenan${Math.floor(Math.random() * 9 + 1)}`;
        let numClasses = (numValue + '').split('').map(n => ('num' + n));
        let yearClasses = (yearValue + '').split('').map(n => ('num' + n));

        let style = {
            height: window.screen.height / 16 + 'em'
        }
        if (window.screen.height / window.screen.width > 2.1) {
            style.width = parseInt(style.height) * 750 / 1334 + 'em'
        }

        return (
            <div className='teacher_final' >
                {!this.state.image && <div className={`container ${sex}`} style={style} >
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
                </div>}
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
                        image: true
                    })
                    document.querySelector('.teacher_final').appendChild(image)
                }
            })
        document.querySelector('.controller').style.display = 'none';
    }

}
