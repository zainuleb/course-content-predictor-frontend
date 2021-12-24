const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.options('*', cors());

const coursesRouter = require('./routes/courses');
//middlewares
app.use(`/`, coursesRouter);

app.listen(4000, () => {
  console.log('Server is Running');
});
