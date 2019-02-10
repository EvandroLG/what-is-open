import Form from '../form';
import debounce from '../debounce';

jest.mock('../debounce');

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

        expect(debounce).toHaveBeenCalled();
        expect(callback).toHaveBeenCalled();
        expect(callback).toHaveBeenCalledWith('a');
    });
});
