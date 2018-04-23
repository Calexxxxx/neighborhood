/**
 * @description import react and Component
 */
import React, { Component } from 'react';

/**
 * @description Footer component
 */
class Footer extends Component {
    /**
     * @description render footer with dynamic date and link to foursquare
     * @returns {*}
     */
    render() {
        const date = new Date().getFullYear();
        return (
            <footer className="footer">
                <p className="footer_text">made by Calexxxxx { date } | places provided by <a
                    href="https://foursquare.com/" target="_blank" rel="noopener noreferrer">FourSquare</a></p>
            </footer>
        )
    }
}

/**
 * @description export footer
 */
export default Footer;