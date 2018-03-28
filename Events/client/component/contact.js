import React from 'react';
import MapContainer from './MapContainer';


const Contact = (props) => {
    return (
        <div className="contact-us">
            <div className="gap">  <br /><br /><br /><br /><br /></div>
            <div >
                <center>
                    <br />
                    <h2>Get In Touch</h2>
                    <br />
                    <h3>Want to get in touch? We'd love to hear from you. Here's how you can reach us ...</h3>
                </center>
            </div>
            <div className="contact-table">
                <table>
                    <tr>
                        <td className="phone">
                            <div ><span className="glyphicon glyphicon-earphone" aria-hidden="true" > </span> Call us on...
                                <br /><br />+91 9414062085<br /> +91 9414160985
            </div>
                        </td>
                        <td className="mail">
                            <div ><span className="glyphicon glyphicon-envelope" aria-hidden="true" > </span> Mail us at...
                                <br /><br />adarshjain080794@gmail.com
            </div>
                        </td>
                    </tr>

                </table>

            </div>
            <div className="new-map">
            <MapContainer />
            </div>

        </div>
    )
}

export default Contact;