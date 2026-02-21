/**
 * Starts the camera with the given video element and settings.
 *
 * @param video - The HTML video element to which the camera stream will be attached.
 * @param options.constraints - The media track constraints to apply when starting the camera.
 * @param options.torch - A boolean indicating whether the torch (flashlight) should be enabled if supported.
 * @param options.restart - A boolean indicating whether to restart the camera even if no settings changed. Defaults to false.
 *
 * @returns A promise that resolves to a `MediaTrackCapabilities` object containing the camera capabilities.
 *
 * @throws Error - If something goes wrong with the camera task queue.
 */
export declare function start(video: HTMLVideoElement, { constraints, torch, restart, }: {
    constraints: MediaTrackConstraints;
    torch: boolean;
    restart?: boolean;
}): Promise<Partial<MediaTrackCapabilities>>;
/**
 * Stops any active camera stream and ensures proper cleanup.
 *
 * @returns A promise that resolves when the camera is fully stopped.
 *
 * @throws Error - If something goes wrong with the camera task queue.
 */
export declare function stop(): Promise<void>;
