import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import '../Styles/Map.css'
import 'leaflet/dist/leaflet.css'


function Map({ center, zoom, countries, casesType }) {
    
    return (
        <div className='map'>
            <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            >
                <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}

export default Map
