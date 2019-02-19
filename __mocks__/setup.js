global.google = {
    maps: {
        places: {
            PlacesServiceStatus: {
                OK: 'OK',
            },

            PlacesService: jest.fn().mockImplementation(() => {
                return {
                    nearbySearch: jest.fn()
                };
            }),

            RankBy: {
                PROMINENCE: 'PROMINENCE'
            },
        },
    },
};

global.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
};
