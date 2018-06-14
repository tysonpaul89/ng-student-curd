import express from 'express';

import { StudentController } from './student.controller';

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port = 3300;

app.use('/', StudentController);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
