import Jimp from 'jimp';
import fs from 'fs';

const scaledImageResize = async function processImage(
  imagePath: string,
  thumbImagePath: string,
  width: number,
  height: number
) {
  // Check if the original image exists
  if (!fs.existsSync(imagePath)) {
    //  console.log('Image not found:', imagePath);
    throw new Error('Image not found');
  }

  // Check if the resized image already exists in the thumb folder
  if (fs.existsSync(thumbImagePath)) {
    console.log('Serving from cache:', thumbImagePath);
    return thumbImagePath;
  } else {
    const image = await Jimp.read(imagePath);
    image.resize(width, height);

    // Save the resized image to the thumb folder
    await image.writeAsync(thumbImagePath);
    console.log('Resized image saved:', thumbImagePath);
    return thumbImagePath;
  }
};

export default scaledImageResize;
