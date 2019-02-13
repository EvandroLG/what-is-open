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
});
