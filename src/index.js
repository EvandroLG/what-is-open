import Places from './places';
import Form from './form';

document.addEventListener('DOMContentLoaded', async () => {
    const places = new Places();
    await places.getCurrentPosition();
    places.searchByOpenPlaces();

    const form = new Form();
    form.bindSubmit(places.searchByOpenPlaces.bind(places));
}, false);
