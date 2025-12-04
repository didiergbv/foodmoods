/**
 * Icon Generation Script for Foodmoods
 * 
 * This script generates PNG icons from the SVG source.
 * 
 * To run:
 * 1. npm install sharp
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

    // Generate favicon.ico (using 32x32 PNG)
    await sharp(iconSvg)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    console.log('\n✅ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();

