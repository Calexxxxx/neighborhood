/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description import escape string regexp
 */
import escapeRegExp from 'escape-string-regexp';

/**
 * @description import foursqaure api
 */
import * as foursquareAPI from '../utils/foursquareAPI';

/**
 * @description import components
 */
import Map from './Map';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import Error from './Error';

/**
 * @description Main Component
 */
class App extends Component {
    /**
     * @description set the default state
     * @type {{query: string, places: Array, cuisine: string, selectedPlace: string}}
     */
    state = {
        query: '',
        places: [],
        cuisine: 'burger',
        selectedPlace: ''
    };

    /**
     * @description component will mount and call the api to get venues data
     */
    componentWillMount() {
        this.callAPI();
    }

    /**
     * @description fetch venues from foursquare api and set the state of the places catch any errors
     * @returns {Promise<void>}
     */
    callAPI = async () => {
        try {
            const places = await foursquareAPI.searchPlaces( 'Aachen', this.state.cuisine );
            this.setState( { places } )
        }
        catch ( err ) {
            console.log( err )
        }
    };

    /**
     * @description Update search query when search field gets data
     * @param query
     */
    updateQuery = ( query ) => {
        this.setState( { query: query.trim() } );
    };

    /**
     * @description update place on the map once search field gets data
     * @param place
     */
    updatePlace = ( place ) => {
        this.setState( { selectedPlace: place } );
    };

    /**
     * @description render App component
     * @returns {*}
     */
    render() {
        /**
         * @description destruct state
         */
        const { query, places, selectedPlace } = this.state;

        /**
         * @description holds or all places from api or filters the list
         */
        let filtered;

        /**
         * @description check if data is received from input and filter the list of provided places
         * else filtered is the full list of places
         */
        if ( query ) {
            const match = new RegExp( escapeRegExp( query ), 'i' );
            filtered = places.filter( place => match.test( place.name ) );
        } else {
            filtered = places;
        }

        /**
         * @description check if places has value then render the map else let the user know there is
         * something wrong and that we are working on it
         */
        if ( places ) {
            return (
                <div>
                    <Header/>
                    <List
                        query={ this.updateQuery }
                        places={ filtered }
                        selectPlace={ this.updatePlace }
                    ></List>
                    <Map
                        places={ filtered }
                        selectPlace={ selectedPlace }
                    ></Map>
                    <Footer/>
                </div>
            );
        } else {
            return (
                <div>
                    <Header/>
                    <Error/>
                    <Footer/>
                </div>
            )
        }
    }
}

/**
 * @description export app
 */
export default App;
