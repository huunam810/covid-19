import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet"
import "./Map.css"
import { showDataOnMap } from './utill';

function Map({ countries, center, zoom, casesType }) {
    return (
        <div className="map">
            <LeafletMap center={center} zoom={zoom}>
                <TileLayer
                    url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">
                    OpenStreetMap </a> '
                />
                {showDataOnMap(countries, casesType)}
            </LeafletMap>
        </div>
    );
}

export default Map;