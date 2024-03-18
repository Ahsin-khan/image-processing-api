import express from 'express';
import path from 'path';
import scaledImageResize from '../../controller/scaledImageController';

const scaledResize = express.Router();

scaledResize.get('/image', async (req, res) => {
  try {
    const { filename, width, height } = req.query;

    if (!filename || !width || !height) {
      return res.status(400).send('Filename, width, and height are required');
    }

    const imagePath = `./src/assets/${filename}.jpg`;
    const thumbImagePath = `./src/thumb/${filename}_thumb_${width}_${height}.jpg`;

    const resizedImagePath = await scaledImageResize(
      imagePath,
      thumbImagePath,
      parseInt(width as string),
      parseInt(height as string)
    );

    // Send the resized image
    res.sendFile(path.resolve(resizedImagePath));
  } catch (error) {
    console.error('Error:', error);
    if (error instanceof Error) {
      res.status(404).send(error.message); // Return 404 for image not found
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});

export default scaledResize;