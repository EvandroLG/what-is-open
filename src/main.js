class Main {
    constructor() {
        this.coords = {
            lat: null,
            lng: null
        };

        this.placesServices = new google.maps.places.PlacesService(document.createElement('div'));
        this.elements = {};
        this.elements.list = document.getElementById('js-list');
    }

    _searchByPlaces(callback) {
        const request = {
            location: {
                lat: this.coords.lat,
                lng: this.coords.lng
            },

            fields: [
                'photos', 'formatted_address', 'name',
                'rating', 'opening_hours', 'geometry'
            ],

            rankBy: google.maps.places.RankBy.PROMINENCE,
            radius: '20000',
        };

        this.placesServices.nearbySearch(request, callback); 
    }

    render(datas) {
        if (!datas.length) {
            return '';
        }

        return `
            <ul>
            ${
                datas.map(data => {
                    return `
                        <li>
                            <h2>${data.name}</h2>
                        </li>        
                    `
                })
            }
            </ul>
        `;
    }

    updateHTML(html) {
        this.elements.list.innerHTML = html;
    }

    searchByOpenPlaces() {
        this._searchByPlaces((results, status) => {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
            }

            const output = results.filter(result => {
                return result.opening_hours && result.opening_hours.open_now;
            });

            this.updateHTML(this.render(output));
        });
    }

    getCurrentPosition() {
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(data => {
                this.coords.lat = data.coords.latitude;
                this.coords.lng = data.coords.longitude;

                resolve();
            });
        });
    }
}

export default Main;
