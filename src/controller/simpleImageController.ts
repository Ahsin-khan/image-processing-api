import Jimp from 'jimp';
import fs from 'fs';

const simpleImageResize = async function processImage(
  filename: string,
  width: number,
  height: number
): Promise<Buffer> {
  try {
    const imagePath = `./src/assets/${filename}.jpg`;

    // Check if the original image exists
    if (!fs.existsSync(imagePath)) {
      //console.log('Image not found:', imagePath);
      throw new Error('Image not found');
    }

    const image = await Jimp.read(imagePath);
    image.resize(width, height);
    return image.getBufferAsync(Jimp.MIME_JPEG);
  } catch (error) {
    console.error('Error while resizing image:', error);
    throw error; // Re-throw the error for the caller to handle
  }
};

export default simpleImageResize;
