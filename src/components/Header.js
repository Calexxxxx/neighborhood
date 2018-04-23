/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description Header component
 */
class Header extends Component {

    /**
     * @description render the header
     * @returns {*}
     */
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Aachener Burger's</h1>
            </header>
        )
    }
}

/**
 * @description export header
 */
export default Header;