import simpleImageResize from '../controller/simpleImageController';
import scaledImageResize from '../controller/scaledImageController';

describe('Process images through functions', () => {
  it('Should resize the simple api image without throwing an error', async () => {
    const testFilePath = 'hill';
    const testWidth = 100;
    const testHeight = 100;

    expect(async () => {
      await simpleImageResize(testFilePath, testWidth, testHeight);
    }).not.toThrow();
  });

  it('Should resize the scaled image without throwing an error', async () => {
    const testFilePath = './src/assets/hill.jpg';
    const testWidth = 100;
    const testHeight = 100;
    const thumbImagePath = './src/thumb/hill.jpg';

    await expect(async () => {
      await scaledImageResize(
        testFilePath,
        thumbImagePath,
        testWidth,
        testHeight
      );
    }).not.toThrow();
  });
});
