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
export declare function eventOn(eventTarget: EventTarget, successEvent: string, errorEvent?: string): Promise<Event>;
/**
 * Creates a promise that resolves after a specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to wait before the promise resolves.
 *
 * @returns A promise that resolves after the specified delay.
 */
export declare function sleep(ms: number): Promise<unknown>;
