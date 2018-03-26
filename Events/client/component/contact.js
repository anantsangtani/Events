import React from 'react';
import Address from 'Addressmap';


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
            </table>
            </div>

 <div><Map google={this.props.google}
    style={{width: '100%', height: '100%', position: 'relative'}}
    className={'map'}
    zoom={14}>
  <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
</Map></div>
        </div>
    )
}

export default Contact;