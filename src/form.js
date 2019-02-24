import debounce from './debounce.js';

export default class Form {
    constructor() {
        this.elements = {};
        this.elements.form = document.getElementById('js-form');
        this.elements.input = document.getElementById('js-search');
    }

    bindSubmit(callback) {
        const input = this.elements.input;

        this.elements.form.addEventListener('keyup', debounce((e) => {
            e.preventDefault();
            callback(input.value);
        }, 600));
    }
}
