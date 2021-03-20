// MyGoogleMaps.js
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import GoogleMapReact from "google-map-react";

import styled from "styled-components";

import AutoComplete from "./Autocomplete";
import Marker from "./Marker";
import "./MapBox.css";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapApiLoaded: false,
      mapInstance: null,
      mapApi: null,
      geoCoder: null,
      places: [],
      center: [],
      zoom: 9,
      address: "",
      draggable: true,
      lat: null,
      lng: null,
      landmarks: [],
      landmarkInfo: [],
      personalList: [],
    };
  }

  componentWillMount() {
    this.setCurrentLocation();
  }

  onMarkerInteraction = (childKey, childProps, mouse) => {
    this.setState({
      draggable: false,
      lat: mouse.lat,
      lng: mouse.lng,
    });
  };
  onMarkerInteractionMouseUp = (childKey, childProps, mouse) => {
    this.setState({ draggable: true });
    this._generateAddress();
  };

  _onChange = ({ center, zoom }) => {
    this.setState({
      center: center,
      zoom: zoom,
    });
  };

  _onClick = (value) => {
    this.setState({
      lat: value.lat,
      lng: value.lng,
    });
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });

    this._generateAddress();
  };

  addPlace = (place) => {
    this.setState({
      places: [place],
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    this._generateAddress();
  };

  showOnMap = (event) => {
    const latitude = Number(event.target.dataset.coordinatex);
    const longitude = Number(event.target.dataset.coordinatey);
    this.setState({
      center: {
        lat: latitude,
        lng: longitude,
      },
      lat: latitude,
      lng: longitude,
      zoom: 13,
    });
  };

  _generateAddress() {
    const { mapApi } = this.state;

    const geocoder = new mapApi.Geocoder();

    geocoder.geocode(
      { location: { lat: this.state.lat, lng: this.state.lng } },
      (results, status) => {
        console.log(results);
        console.log(status);
        if (status === "OK") {
          if (results[0]) {
            this.zoom = 12;
            this.setState({ address: results[0].formatted_address });

            this.getLocationPOIs(this.state.lat, this.state.lng);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  // Get Current Location Coordinates
  setCurrentLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          center: [position.coords.latitude, position.coords.longitude],
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }

  getLocationPOIs(lat, long) {
    const apiKey = "5ae2e3f221c38a28845f05b6c639431679769ec553cbc48ccc5c8e73";
    const self = this;
    this.setState({
      landmarkInfo: [],
    });
    apiGet(lat, long);
    function apiGet(lat, long) {
      return new Promise(function (resolve, reject) {
        var otmAPI =
          "https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=" +
          long +
          "&lat=" +
          lat +
          "&limit=10&apikey=" +
          apiKey;
        fetch(otmAPI)
          .then((response) => response.json())
          .then((data) => {
            resolve(data);
            self.setState({
              landmarks: data.features,
            });
          })
          .catch(function (err) {
            console.log("Fetch Error :-S", err);
          });
      });
    }
    this._createCardsUI();
  }

  // getLocationData() {
  //   const apiKey = "5ae2e3f221c38a28845f05b6c639431679769ec553cbc48ccc5c8e73";
  //   const self = this;
  //   var locationID = this.state.landmarks;
  //   console.log(locationID);

  //   console.log(locationID[i].id);
  // for (var i = 0; i < locationID.length; i++) {
  //   if (locationID) {
  // apiGet();
  // }

  // function apiGet() {
  //   return new Promise(function (resolve, reject) {
  //     var otmAPI =
  //       "https://api.opentripmap.com/0.1/en/places/xid/" +
  //       locationID[i].properties.xid +
  //       "?apikey=" +
  //       apiKey;
  //     fetch(otmAPI)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         resolve(data);
  //         console.log(data);
  //         self.setState({
  //           landmarkInfo: data.wikipedia_extracts.text,
  //         });
  //       })
  //       .catch(function (err) {
  //         console.log("Fetch Error :-S", err);
  //       });
  //   });
  // }
  // }
  // }

  addToList(event) {
    console.log(event.target);
    // const personal;
    // this.setState({ personalList: [...array] });
    // this.state.personalList.push(event.target.dataset.xid);
    // console.log(this.state.personalList);
  }

  _createCardsUI() {
    var landmarks = this.state.landmarks;

    var landmarksNoRepeat = Object.values(
      landmarks.reduce((unique, o) => {
        if (!unique[o.properties.name]) unique[o.properties.name] = o;
        return unique;
      }, {})
    );

    var landmarksFiltered = landmarks.filter((array) => {
      return array.properties.name != "";
    });

    return landmarksFiltered.map((el) => (
      <ListGroup.Item key={el.id}>
        <Row>
          <Col md={7}>
            <h5 className="stopNames">{el.properties.name}</h5>
          </Col>
          <Col md={5} id="noMargin">
            <Button
              variant="secondary"
              className="showMap"
              data-coordinatey={el.geometry.coordinates[0]}
              data-coordinatex={el.geometry.coordinates[1]}
              onClick={(event) => this.showOnMap(event)}
            >
              Show
            </Button>
            <Button
              data-xid={el.id}
              data-coordinatey={el.geometry.coordinates[0]}
              data-coordinatex={el.geometry.coordinates[1]}
              onClick={(event) => {
                this.addToList(event);
              }}
            >
              Add to List
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    ));
  }

  render() {
    const { places, mapApiLoaded, mapInstance, mapApi } = this.state;

    return (
      <Wrapper>
        {mapApiLoaded && (
          <div>
            <AutoComplete
              map={mapInstance}
              mapApi={mapApi}
              addplace={this.addPlace}
            />
          </div>
        )}
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          draggable={this.state.draggable}
          onChange={this._onChange}
          onChildMouseDown={this.onMarkerInteraction}
          onChildMouseUp={this.onMarkerInteractionMouseUp}
          onChildMouseMove={this.onMarkerInteraction}
          onChildClick={() => console.log("child click")}
          onClick={this._onClick}
          bootstrapURLKeys={{
            key: "AIzaSyAkmaFLrVwXo-hZ-IrYKHjDErQqZHnCqpU",
            libraries: ["places", "geometry"],
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
        >
          <Marker
            text={this.state.address}
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </GoogleMapReact>

        {/* <div className="info-wrapper">
          <div className="map-details">
            Address: <span>{this.state.address}</span>
            Latitude: <span>{this.state.lat}</span>, Longitude:{" "}
            <span>{this.state.lng}</span>
          </div>
        </div> */}
        <Container className="main-container">
          <Row className="home-row">
            <Col>
              Adventures
              <Card className="adventure-card">
                <dl>
                  <dt>Yosemite</dt>
                  <dd>Austin , Nicole, Pebbles</dd>
                  <dt>Coast Trip</dt>
                  <dd>Victor, Peter, Brian</dd>
                  <dt>Big Sur</dt>
                  <dd>Kaylee, Mike, Josh, Sarah, Alex, Christine</dd>
                </dl>
              </Card>
            </Col>
            <Col md={6}>
              Stops
              <ListGroup className="results">{this._createCardsUI()}</ListGroup>
            </Col>
            <Col>Share</Col>
            <Card className="adventure-card"></Card>
          </Row>
        </Container>
        {/* <Container>
          <ListGroup className="results">{this._createCardsUI()}</ListGroup>
        </Container> */}
      </Wrapper>
    );
  }
}

export default MapBox;
