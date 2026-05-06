# 🔳 QR Code for Current Page

A lightweight browser extension that instantly generates a QR code for the current tab URL.
Perfect for quickly sharing links between your desktop and mobile devices.

---

## ✨ Features

* ⚡ One-click QR code generation
* 🌐 Works on any webpage
* 🔒 100% local (no data collection)
* 🧩 Cross-browser support:

  * Google Chrome
  * Microsoft Edge
  * Mozilla Firefox

---

## 📦 Installation

### 🟢 Chrome / Edge (Manual Install)

1. Download the latest release ZIP
2. Extract the file
3. Open:

   * `chrome://extensions`
4. Enable **Developer Mode**
5. Click **Load unpacked**
6. Select the extracted folder

---

### 🟠 Firefox

1. Open:

   * `about:addons`
2. Click ⚙️ → **Install Add-on From File**
3. Select the `.zip` or `.xpi` file

---

## 🛠️ Development

### Clone the repository

```bash
git clone https://github.com/your-username/qr-extension.git
cd qr-extension
```

### Install dependencies

```bash
npm install
```

### Run build

```bash
npm run build
```

---

## 📁 Project Structure

```
qr-extension/
├── public/
│   ├── manifest.json
│   └── icons/
├── src/
│   ├── popup/
│   └── utils/
├── dist/
├── vite.config.ts
```

---

## ⚙️ Tech Stack

* Vite
* TypeScript
* QRCode.js
* Web Extension APIs

---

## 🔐 Privacy

This extension:

* Does NOT collect user data
* Does NOT send data to external servers
* Generates QR codes entirely within the browser

---

## 🚀 Future Improvements

* Download QR as image
* Copy QR to clipboard
* Generate QR from selected text
* History of generated links

---

## 📄 License

MIT License

---

## 👤 Author

**Mirza Andre**

---

## ⭐ Support

If you find this useful, consider giving it a star ⭐
