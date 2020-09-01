import React, { useState } from 'react'

import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

//Styles
import './map.scss'

//Random points in New York
import data from '../../data/random-points-nyc.json'

const Map = () => {
    // console.log('Hello', process.env.REACT_APP_GOOGLE_KEY)
    // console.log('JSON data: ', data)
    const [selectedPoint, setSelectedPoint] = useState(null)

    return(
            
            <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{ lat: 40.712776, lng: -74.005974 }} 
            >
                {data.map((point) => (
                    <Marker
                        key={point.id}
                        position={{ lat: point.latitude, lng: point.longitude }}
                        onClick={() => {
                            setSelectedPoint(point)
                        }}

                     />
                ))}

                { selectedPoint && (
                    <InfoWindow
                        key={selectedPoint.id}
                        position={{ 
                            lat: selectedPoint.latitude,
                            lng: selectedPoint.longitude
                        }}
                        onCloseClick={() => setSelectedPoint(null)}
                    >
                        <p>Point Details</p>
                    </InfoWindow>
                )}
            </GoogleMap>
        
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap