import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

//Simple Placeholder Endpoint Suite
describe('Image Resize Endpoint & Error Handeling', () => {
  it('Should return status 200 for Simple Placeholder Api', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'hill', width: '600', height: '900' });
    expect(response.status).toBe(200);
  });

  //Missing file
  it('Should return status 400 if filename missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ width: '600', height: '900' });
    expect(response.status).toBe(400);
  });
  //Missing width
  it('Should return status 400 if width missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'hill', height: '900' });
    expect(response.status).toBe(400);
  });
  //Missing height
  it('Should return status 400 if height missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'hill', width: '600' });
    expect(response.status).toBe(400);
  });
  //Non Existent File
  it('Should return status 500 if filename does not exist', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'abc', width: '600', height: '900' });
    expect(response.status).toBe(500);
  });
});

//Scaled Image Endpoint Suite
describe('Scaled Image Endpoint & Cache & Error Testing', () => {
  it('Should return status 200 for properly Scaled Images', async () => {
    const response = await request
      .get('/api/scaledResize/image')
      .query({ filename: 'hill', width: '600', height: '900' });
    expect(response.status).toBe(200);
  });

  it('should return status 200 and serve image from cache', async () => {
    //Request for generating image and saving in library/cache
    await request
      .get('/api/scaledResize/image')
      .query({ filename: 'hill', width: '600', height: '900' });

    // 2nd request is for serving the image from library/cache
    const response = await request
      .get('/api/scaledResize/image')
      .query({ filename: 'hill', width: '600', height: '900' });

    expect(response.status).toBe(200);
  });

  //Missing file
  it('Should return status 400 if filename missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ width: '600', height: '900' });
    expect(response.status).toBe(400);
  });
  //Missing width
  it('Should return status 400 if width missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'hill', height: '900' });
    expect(response.status).toBe(400);
  });
  //Missing height
  it('Should return status 400 if height missing', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'hill', width: '600' });
    expect(response.status).toBe(400);
  });
  //Non Existent File
  it('Should return status 500 if filename does not exist', async () => {
    const response = await request
      .get('/api/simpleResize/image')
      .query({ filename: 'abc', width: '600', height: '900' });
    expect(response.status).toBe(500);
  });

  //Image Processing Suit
  describe('Image Processing Test', () => {
    it('Should resize the image to the specified dimensions', async () => {
      const response = await request
        .get('/api/simpleResize/image')
        .query({ filename: 'hill', width: '400', height: '300' });

      expect(response.status).toBe(200);
      expect(response.body).toBeTruthy(); //This line is crucial for testing resized image in response
    });
  });
});
