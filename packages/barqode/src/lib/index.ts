export { default as BarqodeDropzone } from "./components/barqode-dropzone.svelte";
export { default as BarqodeStream } from "./components/barqode-stream.svelte";

export type {
	DetectedBarcode,
	BarcodeFormat,
	DropzoneProps,
	StreamProps,
} from "./components/types.js";

// Re-exporing to allow wasm path customization
// See https://github.com/Sec-ant/zxing-wasm#configuring-wasm-serving
export { prepareZXingModule } from "barcode-detector/ponyfill";
