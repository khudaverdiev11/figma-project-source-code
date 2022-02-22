import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footerdiv">
                <footer>
                    <div className="foothed">
                        <h3>FOOTER</h3>
                        <div className="ikon3">
                            <div><i class="fab fa-google"></i></div>
                            <div><i class="fab fa-twitter"></i></div>
                            <div><i class="fab fa-facebook-f"></i></div>
                        </div>
                    </div>
                    <div className="footabout">
                        <div className="row">
                            <div className="col-md-3 about1">
                                <h6>First</h6>
                                <ul>
                                    <li><p>First page</p></li>
                                    <li><p>Second page</p></li>
                                    <li><p>Third page</p></li>
                                    <li><p>Fourth page</p></li>

                                </ul>
                            </div>
                            <div className="col-md-3 about1">
                                <h6>Second</h6>
                                <ul>
                                    <li><p>First page</p></li>
                                    <li><p>Second page</p></li>
                                    <li><p>Third page</p></li>
                                    <li><p>Fourth page</p></li>

                                </ul>
                            </div>
                            <div className="col-md-3 about1">
                                <h6>Third</h6>
                                <ul>
                                    <li><p>First page</p></li>
                                    <li><p>Second page</p></li>
                                    <li><p>Third page</p></li>
                                    <li><p>Fourth page</p></li>

                                </ul>
                            </div>
                            <div className="col-md-3 about1">
                                <h6>Fourth</h6>
                                <ul>
                                    <li><p>First page</p></li>
                                    <li><p>Second page</p></li>
                                    <li><p>Third page</p></li>
                                    <li><p>Fourth page</p></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>© Copyrights 2021</p>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
