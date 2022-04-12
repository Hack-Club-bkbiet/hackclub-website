import React from 'react';
import "./Footer.css";

function Footer() {
    const currentYear = "2021";
    return (
        <div id = "footer" className = "footer">
            <div className = "footer__upper">
                <div className = "footer__upper-left">
                    <div className = "footer__upper-left-left">
                        <h4>Hack Club BKBIET</h4>
                        <a href = "#">Workshops / Events</a>
                        <a href = "https://hackclub.com/conduct/">Code of Conduct</a>
                        <a href = "https://hackclub.com/slack/">Slack</a>
                    </div>
                    <div className = "footer__upper-left-right">
                        <h4>Hack Club</h4>
                        <a href = "https://hackclub.com/">Website</a>
                        <a href = "https://hackclub.com/press/">Press</a>
                    </div>
                </div>
                <div className = "footer__upper-right">
                    <div className = "footer__upper-right-left">
                        <h4>Connect with us!</h4>
                    </div>
                    <div className = "footer__upper-right-right">
                        <h4>Contact us</h4>
                        <a href = "mailto:hackclub@bkbiet.ac.in">hackclub@bkbiet.ac.in</a>
                    </div>
                </div>
            </div>

            <div className = "footer__lower">
                <p>&copy; Hack Club BKBIET {currentYear}</p>
            </div>
        </div>
    )
}

export default Footer;
