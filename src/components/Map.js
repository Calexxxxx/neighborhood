/**
 * @description import react
 */
import React, { Component } from 'react';

/**
 * @description import MapInit
 */
import { MapInit } from "./MapInit";

/**
 * @description map component
 */
class Map extends Component {
    /**
     * @description set the default state
     * @type {{id: string}}
     */
    state = {
        id: ''
    };

    /**
     * @description sets state.id to the id of the place clicked
     * @param id
     */
    markerClickHandler = ( id ) => {
        this.setState( { id } );
    };

    /**
     * @description render Map component
     * @returns {*}
     */
    render() {
        /**
         * @description props
         */
        const { places, selectPlace } = this.props;

        /**
         * @description state
         */
        const { id } = this.state;

        /**
         * @description list of all places or a list of places from the filter
         */
        let renderPlaces;

        /**
         * @description gets the details from that place
         */
        let selectedPlaceDetails;

        /**
         * @description check is an id is received else render default list
         */
        if(id){
            renderPlaces = places.filter( place => place.id !== id );
            selectedPlaceDetails = places.filter( place => place.id === id || place.id === selectPlace );
        } else {
            renderPlaces = places;
        }

        return (
            <MapInit
                onClickMarker={ this.markerClickHandler }
                detail={ selectedPlaceDetails }
                places={ renderPlaces }

            />
        )
    }
}

/**
 * @description export map
 */
export default Map;