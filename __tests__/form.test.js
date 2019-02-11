import Form from '../src/form';
import debounce from '../src/debounce';

jest.mock('../src/debounce');

describe('form', () => {
    document.body.innerHTML = `
        <form id="js-form">
            <input
                type="text"
                id="js-search"
                value="a"
            >
        </form>
    `;

    it('should call function passed by parameter to each keyup', () => {
        const callback = jest.fn();
        debounce.mockImplementation((callback) => {
            return (...args) => {
                callback.apply(this, args);
            }
        });

        const form = new Form();
        form.bindSubmit(callback);

        const e = new KeyboardEvent('keyup');
        document.getElementById('js-form').dispatchEvent(e);

        expect(debounce).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith('a');
    });
});
