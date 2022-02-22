import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <header>
                    <div className="items">
                        <div className="ikon">
                            <h1>-</h1>
                            <h1>-</h1>
                        </div>
                        <ul>
                            <li><p className="nav-item">ABOUT</p> </li>
                            <li><p className="nav-item">GALLERY</p> </li>
                            <li><p className="nav-item">PRICING</p> </li>
                            <li><p className="nav-item">FAQ</p> </li>
                            <li><p className="nav-item">BENEFITS</p> </li>

                        </ul>
                    </div>
                    <div className="sign">
                        <button>SIGN IN</button>
                        <button>SIGN UP</button>
                    </div>
                </header>

            </div>
        )
    }
}

export default Header
