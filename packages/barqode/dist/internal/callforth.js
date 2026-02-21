// based on vue-qrcode-reader by Niklas Gruhn
// see https://github.com/gruhn/vue-qrcode-reader
/**
 * Creates a Promise that resolves when a specified event is triggered on the given EventTarget.
 *
 * @param eventTarget - The target to listen for events on.
 * @param successEvent - The name of the event that will resolve the Promise.
 * @param errorEvent - The name of the event that will reject the Promise. Defaults to 'error'.
 *
 * @returns A Promise that resolves with the event object when the successEvent is
 *  triggered, or rejects with the event object when the errorEvent is triggered.
 */
export function eventOn(eventTarget, successEvent, errorEvent = "error") {
    let $resolve;
    let $reject;
    const promise = new Promise((resolve, reject) => {
        $resolve = resolve;
        $reject = reject;
        eventTarget.addEventListener(successEvent, $resolve);
        eventTarget.addEventListener(errorEvent, $reject);
    });
    promise.finally(() => {
        eventTarget.removeEventListener(successEvent, $resolve);
        eventTarget.removeEventListener(errorEvent, $reject);
    });
    return promise;
}
/**
 * Creates a promise that resolves after a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to wait before the promise resolves.
 *
 * @returns A promise that resolves after the specified delay.
 */
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
