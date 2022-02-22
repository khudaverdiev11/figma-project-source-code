import React, { Component } from 'react'
import profit from '../img/profit1.png'
import appcues from '../img/appcues.png'
import bench from '../img/bench.png'
import demio from '../img/demio.png'
import Ship from '../img/Ship.png'
import subbly from '../img/subbly.png'
export class Page2 extends Component {
    render() {
        return (
            <div className="page2div">
                <div className="page2">
                    <div className="imgs">
                            <img src={profit} alt="" />
                            <img src={appcues} alt="" />
                            <img src={Ship} alt="" />
                            <img src={bench} alt="" />
                            <img src={subbly} alt="" />
                            <img src={demio} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Page2
