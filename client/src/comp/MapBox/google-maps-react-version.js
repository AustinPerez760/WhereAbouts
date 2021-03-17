import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./MapBox.css";

const mapStyles = {
  width: "90%",
  height: "40%",
  margin: "5rem",
};

export class MapBox extends Component {
  render() {
    return (
      <div class="mapDiv">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAkmaFLrVwXo-hZ-IrYKHjDErQqZHnCqpU",
})(MapBox);
