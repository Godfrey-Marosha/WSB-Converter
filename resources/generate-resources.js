const puppeteer = require('puppeteer');
const path = require('path');
const appDir = path.dirname(process.mainModule.filename);
const rootDir = path.join(appDir, '..');

try {
    process.setMaxListeners(0);
} catch {}
