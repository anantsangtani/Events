import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

export class MapContainer extends React.Component {
  render() {
    return (
      <div>
        <Map google={this.props.google}
          style={{ width: '30%', height: '60%', padding: "0", marginLeft: "35%", marginBottom: "0", border: " 2px solid red", position: "" }}
          className={'map'}
          zoom={14}
          initialCenter={{
            lat: 24.587511, lng: 73.711862
          }}>
          <Marker
            title={'Adarsh Events'}
            name={'SOMA'}
            position={{ lat: 24.587511, lng: 73.711862 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAUfQPYC7VJEj_VpNF9dLOwywQYLrPN7tU")
})(MapContainer)