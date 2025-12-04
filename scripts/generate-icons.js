/**
 * Icon Generation Script for Foodmoods
 * 
 * This script generates PNG icons from the SVG source.
 * 
 * To run:
 * 1. npm install sharp png-to-ico --save-dev
 * 2. node scripts/generate-icons.js
 * 
 * Or manually convert the SVGs using any online tool like:
 * - https://cloudconvert.com/svg-to-png
 * - https://svgtopng.com/
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.log('Sharp not installed. Install with: npm install sharp --save-dev');
  console.log('Or manually convert the SVG files in /public to PNG format.');
  process.exit(1);
}

// Check if png-to-ico is available
let pngToIcoModule;
try {
  pngToIcoModule = require('png-to-ico');
} catch (e) {
  console.log('png-to-ico not installed. Install with: npm install png-to-ico --save-dev');
  process.exit(1);
}
// Handle both ESM default export and CommonJS
const pngToIco = pngToIcoModule.default || pngToIcoModule;

const publicDir = path.join(__dirname, '..', 'public');

async function generateIcons() {
  try {
    // Read the SVG files
    const iconSvg = fs.readFileSync(path.join(publicDir, 'icon.svg'));
    const appleSvg = fs.readFileSync(path.join(publicDir, 'apple-touch-icon.svg'));

    // Generate icon-512.png
    await sharp(iconSvg)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ Generated icon-512.png');

    // Generate icon-192.png
    await sharp(iconSvg)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✓ Generated icon-192.png');

    // Generate icon.png (32x32 for general use)
    await sharp(iconSvg)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'icon.png'));
    console.log('✓ Generated icon.png');

    // Generate apple-touch-icon.png
    await sharp(appleSvg)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✓ Generated apple-touch-icon.png');

    // Generate temporary PNGs for multi-resolution favicon.ico
    // Google recommends 48x48 as minimum, but we include 16, 32, 48 for best compatibility
    const favicon16Path = path.join(publicDir, 'favicon-16.png');
    const favicon32Path = path.join(publicDir, 'favicon-32.png');
    const favicon48Path = path.join(publicDir, 'favicon-48.png');

    await sharp(iconSvg)
      .resize(16, 16)
      .png()
      .toFile(favicon16Path);
    
    await sharp(iconSvg)
      .resize(32, 32)
      .png()
      .toFile(favicon32Path);
    
    await sharp(iconSvg)
      .resize(48, 48)
      .png()
      .toFile(favicon48Path);

    // Generate proper multi-resolution favicon.ico
    const icoBuffer = await pngToIco([favicon16Path, favicon32Path, favicon48Path]);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
    console.log('✓ Generated favicon.ico (16x16, 32x32, 48x48)');

    // Clean up temporary favicon PNGs
    fs.unlinkSync(favicon16Path);
    fs.unlinkSync(favicon32Path);
    fs.unlinkSync(favicon48Path);

    console.log('\n✅ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();


