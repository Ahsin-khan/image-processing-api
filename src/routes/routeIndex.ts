import express from 'express';
import scaledResize from './api/scaledResize';
import simpleResize from './api/simpleResize';

const route = express.Router();

route.use('/simpleResize', simpleResize);
route.use('/scaledResize', scaledResize);

export default route;