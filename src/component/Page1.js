import React, { Component } from 'react'
import page1img from '../img/page1img.png'
export class Page1 extends Component {
    render() {
        return (
            <div className="page1div">
                <div className="page1">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Many reasons to get up <br /> and start to get back in <br /> the business</h1>
                            <p>The harder you work for something, the greater you.ll feel when you achieve it.</p>
                            <button>LEARN MORE</button>
                            <button>DEMO</button>
                            <div className="videodiv">
                                <div className="row">
                                    <div className="video col-sm-3">
                                        <div className="playdiv">
                                        <i class="fas fa-play"></i>
                                        </div>
                                    </div>
                                    <div className="videotext col-sm-9">
                                        <p id="pvideo">The harder you work for something. the greater <br /> you'll  fell when you achieve it.</p>
                                        <p id="p2video">Watch prewiew</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={page1img} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Page1
