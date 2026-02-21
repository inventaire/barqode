import { type DetectedBarcode, type BarcodeFormat, BarcodeDetector } from "barcode-detector/ponyfill";
declare global {
    interface Window {
        BarcodeDetector?: typeof BarcodeDetector;
    }
}
/**
 * Update the set of targeted barcode formats. In particular, this function
 * can be called during scanning and the camera stream doesn't have to be
 * interrupted.
 */
export declare function setScanningFormats(formats: BarcodeFormat[]): Promise<void>;
type ScanHandler = (_: DetectedBarcode[]) => void;
type KeepScanningOptions = {
    detectHandler: ScanHandler;
    locateHandler: ScanHandler;
    minDelay: number;
    formats: BarcodeFormat[];
};
/**
 * Continuously extracts frames from camera stream and tries to read
 * potentially pictured QR codes.
 */
export declare function keepScanning(videoElement: HTMLVideoElement, { detectHandler, locateHandler, minDelay, formats }: KeepScanningOptions): Promise<void>;
export declare function processFile(file: File, formats?: BarcodeFormat[]): Promise<DetectedBarcode[]>;
export declare function processUrl(url: string, formats?: BarcodeFormat[]): Promise<DetectedBarcode[]>;
export {};
