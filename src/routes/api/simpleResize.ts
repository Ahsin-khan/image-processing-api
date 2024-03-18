import express from 'express';
import Jimp from 'jimp';
import simpleImageResize from '../../controller/simpleImageController';

const simpleResize = express.Router();

simpleResize.get('/image', async (req, res) => {
  try {
    const { filename, width, height } = req.query;

    // Check if filename, width, and height are provided
    if (!filename || !width || !height) {
      return res.status(400).send('Filename, width, and height are required');
    }

    const buffer = await simpleImageResize(
      filename as string,
      parseInt(width as string),
      parseInt(height as string)
    );

    res.set('Content-Type', Jimp.MIME_JPEG);
    res.send(buffer);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default simpleResize;
