global.google = {
    maps: {
        places: {
            PlacesService: jest.fn(),
        },
    },
};

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};
