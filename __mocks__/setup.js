global.google = {
    maps: {
        places: {
            PlacesServiceStatus: {},

            PlacesService: jest.fn().mockImplementation(() => {
                return {
                    nearbySearch: jest.fn()
                };
            }),

            RankBy: {
                PROMINENCE: 'PROMINENCE'
            }
        },
    },
};

global.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
};
