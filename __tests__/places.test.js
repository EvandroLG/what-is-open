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

    describe('render', () => {
        let list;

        beforeEach(() => {
            list = document.getElementById('js-list');

            if (!list) {
                document.body.innerHTML = '<div id="js-list"></div>';
                list = document.getElementById('js-list');
            } else {
                list.innerHTML = '';
            }
        });

        function verifyRender(statusApi, expectedResult=true) {
            const places = new Places();
            const services = places.placesServices;

            services.nearbySearch.mockImplementation((request, fn) => {
                fn(fixture, statusApi);
            });

            places.searchByOpenPlaces('restaurant');

            const html = list.innerHTML;

            if (expectedResult) {
                expect(html).toMatchSnapshot();
            } else {
                expect(html).toBe('');
            }
        }

        it('should render properly when api has datas to return', () => {
            verifyRender('OK');
        });

        it('should not render anything when api does not have datas to return', () => {
            verifyRender('ERROR', false);
        });
    });
});
