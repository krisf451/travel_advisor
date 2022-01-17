import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import mapStyles from "../../mapStyles.js";
import useStyles from "./MapStyles.js";

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCvKCl5e4PKutXZiFw3or-hgeBnwtxCPI" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
