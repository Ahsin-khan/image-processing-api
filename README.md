#Image Processing API: 
This API provides functionality for resizing and serving images in two different ways: as a simple placeholder API for rapid prototyping and as a library to serve properly scaled versions of images to reduce page load size.

#Table of Contents
*	Introduction
*	Features
*	Installation
*	Usage
*	Endpoints
*	Testing
*	Contributing
*	License
  
#Introduction: 
The Image Processing API is designed to be a versatile tool for developers working with images in web applications. It offers two primary use cases:
1.	Simple Placeholder API: Allows developers to quickly prototype their frontend by providing an endpoint to resize and serve images based on URL parameters.
2.	Library for Scaled Images: Provides a mechanism to serve properly scaled images to reduce page load size, eliminating the need to resize and upload multiple copies of the same image.

#Features
*	Resize images dynamically using URL parameters.
*	Serve resized images to reduce page load size.
*	Cache resized images to improve performance.
*	Support for both simple placeholder images and scaled images.

#Installation
*	Clone the repository:
git clone https://github.com/Ahsin-khan/image-processing-api.git
*	Install dependencies:
express: "^4.18.3", @types/express: "^4.17.21", typescript: "^5.4.2", @types/node: "^20.11.25", nodemon: "^3.1.0", ts-node: "^10.9.2", jasmine: "^5.1.0", @types/jasmine: "^5.1.4", jasmine-spec-reporter: "^7.0.0", jimp : "^0.22.12", @types/jimp: "^0.2.28", supertest: "^6.3.4", @types/supertest: "^6.0.2", eslint: "^8.8.0", prettier: "^2.5.1", @typescript-eslint/eslint-plugin: "^7.2.0", @typescript-eslint/parser: "^7.2.0", eslint-config-prettier: "^8.3.0", eslint-plugin-prettier: "^4.0.0".

#Usage

**Scripts:
*	npm run prettier (Formatting)
*	npm run lint (Error Checking)
*	npm run test (For transpiling and Testing)
*	npm run start (To start the server and autosaving by Nodemon)

#Endpoints

**Placeholder API
*	Endpoint: /api/simpleResize/image
*	Description: Resizes and serves images based on URL parameters for rapid prototyping.
*	Complete url: http://localhost:5000/api/simpleResize/image?filename=hill&width=200&height=400

**Library for Scaled Images
*	Endpoint: /api/scaledResize/image
*	Description: Resizes and serves properly scaled images to reduce page load size.
*	Complete url: http://localhost:5000/api/scaledResize/image?filename=hill&width=200&height=400

#Testing:
The project includes unit tests using Jasmine. To run the tests, use the following command:
Npm run test 

#Contributing:
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

#License:
This project is licensed under the MIT License.
