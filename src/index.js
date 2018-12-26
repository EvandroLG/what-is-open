import Main from './main';

document.addEventListener('DOMContentLoaded', async () => {
    const main = new Main();
    await main.getCurrentPosition();
    main.searchByOpenPlaces();
}, false);
