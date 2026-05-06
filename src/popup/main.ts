import { generateQR } from "../utils/qr";

async function getCurrentTabUrl(): Promise<string> {
  return new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      resolve(tabs[0].url || "");
    });
  });
}

async function init() {
  const canvas = document.getElementById("qr") as HTMLCanvasElement;
  const urlText = document.getElementById("url")!;

  const url = await getCurrentTabUrl();

  urlText.textContent = url;

  if (url) {
    await generateQR(canvas, url);
  }
}

init();