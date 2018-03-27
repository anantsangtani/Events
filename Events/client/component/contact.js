import React from 'react';
import MapContainer from './MapContainer';


const Contact = (props) => {
    return (
        <div className="contact-us">
            <div className="gap">  <br /><br /><br /><br /><br /></div>
            <div >
                <center>
                    <h1>Contact</h1>
                    <br />
                    <h2>GET IN TOUCH</h2>
                    <br />
                    <h3>Want to get in touch?We'd love to hear from you.Here's how you can reach us ...</h3>
                </center>
            </div>
            <div className="contact-table">
                <table>
                    <tr>
                        <td className="phone">
                            <div ><span className="glyphicon glyphicon-earphone" aria-hidden="true" > Call us on...</span>
                                <br /><br />+91 9414062085<br /> +91 9414160985
            </div>
                        </td>
                        <td className="mail">
                            <div ><span className="glyphicon glyphicon-envelope" aria-hidden="true" > Mail us at...</span>
                                <br /><br />adarshjain080794@gmail.com
            </div>
                        </td>
                    </tr>
                    <tr>
                    <td>
                    <div className="map">
                    <MapContainer />
                </div>
                </td>
                </tr>
                </table>
                
            </div>


        </div>
    )
}

export default Contact;