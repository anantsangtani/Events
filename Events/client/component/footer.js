import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
    render(props) {
        return (
            <div className="footer">
                <p>xyz.com</p>
                <ul >
                    <li><Link onClick={() => this.props.name("home")}><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link></li>
                    <li><Link onClick={() => this.props.name("about")}><span class="glyphicon glyphicon-user" aria-hidden="true"></span> About Us</Link></li>
                    <li><Link onClick={() => this.props.name("contact")}><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Contact Us</Link></li>
                </ul>
            </div>
        )
    }
}

export default Footer;