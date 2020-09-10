import React, { useState, useEffect } from 'react'

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

//Styles
import './map.scss'

//Random points in New York
import data from '../../data/random-points-nyc.json'

const Map = () => {
    const [selectedPoint, setSelectedPoint] = useState(null)
    // new
    const [selecetedMarker, setSelectedMarker] = useState(null)

    return(
        // Map
        <GoogleMap 
            defaultZoom={10} 
            defaultCenter={{ lat: 40.712776, lng: -74.005974 }} 
        >
            {data.map((point) => (
                // Marker - for each data point
                <Marker
                    key={point.id}
                    position={{ lat: point.latitude, lng: point.longitude }}
                    onClick={() => {
                        console.log('Clicked this point: ', point)
                        return setSelectedPoint(point)
                    }}
                    >
                </Marker>
                    
            ))}

            {selectedPoint ?
                (<InfoWindow
                    key={selectedPoint.id}
                    position={{ 
                        lat: selectedPoint.latitude,
                        lng: selectedPoint.longitude
                    }}
                    onCloseClick={() => setSelectedPoint(null)}
                >
                    <h1>Hello</h1>
                </InfoWindow>)
                :
                null
            }
        </GoogleMap> 
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap