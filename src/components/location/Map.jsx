import React from 'react'
import {GoogleMap, InfoWindow, Marker, useLoadScript} from '@react-google-maps/api'

const AppMap = props => {

    const libraries = ['places']

    const mapContainerStyle = {
        width: '100%',
        height: '360px',
        borderRadius: '10px'
    }

    const [markerPosition, setMarkerPosition] = React.useState([])

    const [selected, setSelected] = React.useState(null)

    const initialLocation = {
        lat: 4.1037517,
        lng: 9.6312815
    }

    const onMapClicked = React.useCallback(($event) => {
        setMarkerPosition(current => [...current,
            {
                lat: $event.latLng.lat(),
                lng: $event.latLng.lng(),
                time: new Date()
            }])
    }, [])

    const mapRef = React.useRef()

    const onMapLoaded = React.useCallback((map) => {
        mapRef.current = map
    }, [])

    const options = {
        disableDefaultUI: true,
        zoomControl: true
    }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
        libraries
    })

    if (loadError) return "Error loading map!"
    if (!isLoaded) return "Loading map..."

    return (
        <div className="col-md p-2">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={initialLocation}
                options={options}
                onClick={onMapClicked}
                onLoad={onMapLoaded}
            >
                <Marker
                    position={initialLocation}
                    // onClick={() => {
                    //     setSelected(markerPosition)
                    // }}
                    // icon={{
                    //     anchor: new window.google.maps.Point(15,15)
                    // }}
                />
                {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}}>
                    <div>
                        <h3>Douala, Cameroon</h3>
                        <h5>Bepanda</h5>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>

    )
}

export default AppMap
