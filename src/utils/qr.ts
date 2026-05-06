import QRCode from "qrcode";

export async function generateQR(canvas: HTMLCanvasElement, text: string) {
  await QRCode.toCanvas(canvas, text, {
    width: 200,
    margin: 2
  });
}