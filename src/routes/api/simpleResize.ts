import express from 'express';
import Jimp from 'jimp';

const simpleResize = express.Router();

simpleResize.get('/image', async (req, res) => {
  try {
    const { filename, width, height } = req.query;

    // Check if filename, width, and height are provided
    if (!filename || !width || !height) {
      return res.status(400).send('Filename, width, and height are required');
    }

    // Read the original image
    const imagePath = `./src/assets/${filename}.jpg`;
    const image = await Jimp.read(imagePath);

    // Resize the image
    image.resize(parseInt(width as string), parseInt(height as string));

    // Convert the image to buffer
    const buffer = await image.getBufferAsync(Jimp.MIME_JPEG);

    // Send the resized image as response
    res.set('Content-Type', Jimp.MIME_JPEG);
    res.send(buffer);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default simpleResize;