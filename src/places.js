class Places {
    constructor() {
        this.coords = {
            lat: null,
            lng: null
        };

        this.placesServices = new google.maps.places.PlacesService(document.createElement('div'));
        this.elements = {};
        this.elements.list = document.getElementById('js-list');
    }

    _searchByPlaces(query, callback) {
        const request = {
            location: {
                lat: this.coords.lat,
                lng: this.coords.lng
            },

            keyword: query,

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

        console.log(datas[0]);

        return `
            <ul>
            ${
                datas.map(data => {
                    return `
                        <li class="list__item">
                            <h2 style="background-image: url(${data.icon})"
                                class="list__name"
                            >
                                ${data.name}
                            </h2>
                            <span class="list__address">
                                ${data.vicinity}
                            </span>
                        </li>        
                    `;
                }).join('')
            }
            </ul>
        `;
    }

    updateHTML(html) {
        this.elements.list.innerHTML = html;
    }

    searchByOpenPlaces(query) {
        this._searchByPlaces(query, (results, status) => {
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

export default Places;
