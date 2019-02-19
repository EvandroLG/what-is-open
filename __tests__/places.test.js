import fixture from '../__mocks__/restaurants';
import Places from '../src/places';

describe('places', () => {
    it('should update latitude and longitude with the current position', (next) => {
        const geo = global.navigator.geolocation;
        const mockData = {
            coords: {
                latitude: 53.278453400000004,
                longitude: -6.2164291,
            },
        };

        geo.getCurrentPosition.mockImplementation(fn => {
            fn(mockData);
        });

        const places = new Places();
        places.getCurrentPosition().then(() => {
            const { latitude, longitude } = mockData.coords;
            expect(places.coords.lat).toEqual(latitude);
            expect(places.coords.lng).toEqual(longitude);
            next();
        });
    });

    it('should render properly when api has datas to return', () => {
        document.body.innerHTML = '<div id="js-list"></div>';
        const places = new Places();
        const services = places.placesServices;

        services.nearbySearch.mockImplementation((request, fn) => {
            fn(fixture, 'OK');
        });

        google.maps.places.PlacesServiceStatus.OK = 'OK';

        places.searchByOpenPlaces('restaurant');

        const html = document.getElementById('js-list').innerHTML;

        expect(html).toMatchSnapshot();
    });
});
