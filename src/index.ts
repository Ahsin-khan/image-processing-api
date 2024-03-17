import express from 'express';
import route from './routes/routeIndex';

const app = express();
const port = 5000;

app.use('/api', route);

app.listen(port, () => {
  console.log(`server has been created at port ${port}`);
});

export default app;
