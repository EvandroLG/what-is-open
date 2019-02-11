import debounce from '../src/debounce';

jest.useFakeTimers();

describe('debounce', () => {
    it('should call setTimeout using the timer passed as parameter', () => {
        const callback = jest.fn();
        const timer = 500;

        debounce(callback, timer)();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), timer);
    });

    it('should execute callback passing the expected parameter', () => {
        const callback = jest.fn();
        const timer = 500;
        const args = 'a';

        debounce(callback, timer)(args);

        expect(callback).not.toBeCalled();
        jest.runAllTimers();

        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(args);
    });
});
