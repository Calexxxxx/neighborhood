/**
 * @description import react
 */
import React, { Component } from 'react';

/**
 * @description import MapInit
 */
import { MapInit } from "./MapInit";

/**
 * @description Error component
 */
import Error from "./Error";

/**
 * @description map component
 */
class Map extends Component {
    /**
     * @description set the default state
     * @type {{id: string, mapLoaded: boolean}}
     */
    state = {
        id: '',
        mapLoaded: true
    };

    /**
     * @description sets state.id to the id of the place clicked
     * @param id
     */
    markerClickHandler = ( id ) => {
        this.setState( { id } );
    };

    /**
     * @description check if the map is loaded correctly
     * if not show the error component saying maintenance asking the user to come back later
     * the mapLoaded state is changed to false in this case
     * @param map
     */
    onLoadMapHandler = (map) => {
      if(!map) {
          this.setState({
              mapLoaded: false
          })
      }
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

        if(this.state.mapLoaded) {
            return (
                <MapInit
                    onLoadMap={ this.onLoadMapHandler }
                    onClickMarker={ this.markerClickHandler }
                    detail={ selectedPlaceDetails }
                    places={ renderPlaces }
                />
            )
        } else {
            return (
                <Error />
            )
        }
    }
}

/**
 * @description export map
 */
export default Map;