/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description List component
 */
class List extends Component {
    /**
     * @description default states
     * @type {{open: boolean}}
     */
    state = {
        open: false
    };

    /**
     * @description change state when menu bar is clicked or close icon is clicked
     */
    toggleMenu = () => {
        const currentState = this.state.open;
        this.setState( { open: !currentState } );
    };

    /**
     * @description render List Component
     * @returns {*}
     */
    render() {
        /**
         * @description props
         */
        const { places, query, selectPlace } = this.props;

        /**
         * @description creates a list with places from foursquare api the input can be used to filter this list
         * the map will then update the markers and the list will get shorter to.
         */
        return (
            <div className={ this.state.open ? 'menu_open search_list': 'search_list' }>
                <div className={ this.state.open ? 'close_icon' : 'open_icon' }>
                    <i className={ this.state.open ? 'fas fa-times' : 'fas fa-bars' } onClick={ this.toggleMenu }></i>
                </div>

                <div className="search_bar">
                    <input
                        type="text"
                        aria-label="Filter Input"
                        placeholder="Filter Places"
                        onChange={ (event) => query(event.target.value) }
                    />
                </div>
                <div className="search_outcome">
                    <ul>
                        { places.map(place => (
                            <li
                                tabIndex="0"
                                aria-label={ place.name }
                                key={ place.id }
                                onClick={ () => selectPlace(place.id) }>
                                <span>{ place.name }</span>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
        );
    }
}

/**
 * @description export List
 */
export default List;