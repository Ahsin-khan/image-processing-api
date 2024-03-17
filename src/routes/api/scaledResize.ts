import express from 'express';
import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

const scaledResize = express.Router();

scaledResize.get('/image', async (req, res) => {
  try {
    const { filename, width, height } = req.query;

    if (!filename || !width || !height) {
      return res.status(400).send('Filename, width, and height are required');
    }

    const imagePath = `./src/assets/${filename}.jpg`;
    const thumbImagePath = `./src/thumb/${filename}_thumb_${width}_${height}.jpg`;

    // Check if the resized image already exists in the thumb folder
    if (fs.existsSync(thumbImagePath)) {
      console.log('Serving from cache:', thumbImagePath);
      const absolutePath = path.resolve(thumbImagePath);
      // Send the already saved image
      res.sendFile(absolutePath);
    } else {
      const image = await Jimp.read(imagePath);
      if (width && height) {
        image.resize(parseInt(width as string), parseInt(height as string));
      } else {
        return res.status(400).send('Width or height is not given');
      }

      // Save the resized image to the thumb folder
      await image.writeAsync(thumbImagePath);
      console.log('Resized image saved:', thumbImagePath);
      const absolutePath = path.resolve(thumbImagePath);

      // Send the resized image
      res.sendFile(absolutePath);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default scaledResize;