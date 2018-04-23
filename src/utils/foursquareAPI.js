const API = 'https://api.foursquare.com/v2/venues/',
    CLIENT_ID = 'YACDPXPHNXXFZSNLBA2MGN05BDPMRY3521GICACSMOEXISGJ',
    CLIENT_SECRET = 'I02J52ADI3UO1NRCHP3SHZSHWOFMNLMVPGZZEV3FFZ2O52YI',
    VERSION = '&v=20120609';

export const searchPlaces = (place, query) => {
    return fetch(`${API}search?near=${place}&query=${query}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}${VERSION}`)
        .then(res => res.json())
        .then(data => data.response.venues)
        .catch(error => console.error(error))
};