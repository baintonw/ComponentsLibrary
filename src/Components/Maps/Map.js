import React from 'react'

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

//Styles
import './map.scss'

const Map = () => {
    return(
        
            
            <GoogleMap 
                defaultZoom={10} 
                defaultCenter={{ lat: 40.712776, lng: -74.005974 }} 
            />
        
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap