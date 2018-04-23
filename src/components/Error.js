/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description Error component
 */
class Error extends Component {
    /**
     * @description component is being rendered when foursquare api reaches call limit of 950 calls per day
     * @returns {*}
     */
    render() {
        return (
            <div className="error">
                <h2>Maintenance</h2>
                <p>The page you are looking for is in maintenance. Please come back later.</p>
            </div>
        );
    }
}

/**
 * @description export Error
 */
export default Error;