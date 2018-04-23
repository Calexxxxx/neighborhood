import React from 'react';
/**
 * @description import recompose
 */
import { compose, withProps } from 'recompose';
/**
 * @description import react-google-map
 */
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

/**
 * @description import infobox from react-google-maps
 */
import  InfoBox  from 'react-google-maps/lib/components/addons/InfoBox';


/**
 * @description import custom style
 */
import CustomStyle from '../utils/CustomStyles';

/**
 * @description initialize google map
 */
export const MapInit = compose(
    /**
     * @description load the map with props
     */
    withProps( {
        googleMapURL: "https://maps.googleapis.com/maps/api/js?libraries=places,geometry,drawing&key=AIzaSyAuVn01NJ2bOozzuHE5zrjZmF9Z3JcZ254&v=3",
        loadingElement: <div className="loading__map" />,
        containerElement: <div className="container__map"/>,
        mapElement: <div className="map__map" />
    } ),
    withScriptjs,
    withGoogleMap
)(( props ) => (
    <GoogleMap
        ref={ props.onLoadMap }
        defaultZoom={ 14 }
        defaultCenter={ { lat: 50.775346, lng: 6.083887 } }
        defaultOptions={ { styles: CustomStyle } }>

        { props.detail ? props.detail.map(place => (
            <Marker
                tabIndex="0"
                key={ place.id }
                position={ { lat: place.location.lat, lng: place.location.lng } }
                animation={ window.google.maps.Animation.BOUNCE }>
                <InfoBox>
                    <div className="info" tabIndex="0">
                        <div className="info__name">
                            <h3>
                                { place.name }
                            </h3>
                        </div>
                        <div className="info__contact">
                            <p><strong>Address</strong></p>
                            <p>
                                { place.location.formattedAddress[0] }<br />
                                { place.location.formattedAddress[1] }<br />
                                { place.location.formattedAddress[2] }
                            </p>
                            <p><strong>{ place.contact.formattedPhone ? `Phone` : '' }</strong></p>
                            <p>{ place.contact.formattedPhone }</p>
                        </div>
                    </div>
                </InfoBox>
            </Marker>
        ) ) : ( null ) }

        { props.places.map(place => (
            <Marker
                key={ place.id }
                position={ { lat: place.location.lat, lng: place.location.lng } }
                animation={ window.google.maps.Animation.DROP }
                onClick={ () => props.onClickMarker(place.id) }>
            </Marker>
        )) }
    </GoogleMap>
));