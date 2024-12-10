import React, { useState, useEffect, useRef } from "react";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import fetchWeather from "../weatherApi";
let newInfo;

function MapComponent(props) {
  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const map = new Map({
      target: "map",
      layers: [osmLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
    });

    map.addEventListener("click", async function (event) {
      await fetchWeather(event.coordinate[0], event.coordinate[1])
        .then((data) => data.json())
        .then((data) => {
          let info = data;
          props.onNewInfo(info);
        });
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <div
      style={{ height: "100vh", width: "100%" }}
      id="map"
      className="map-container"
    />
  );
}

export default MapComponent;
