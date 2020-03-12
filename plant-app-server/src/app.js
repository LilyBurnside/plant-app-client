'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const quizRouter = require('./quiz/quiz-router');

const { NODE_ENV } = require('./config');
const app = express();

const morganOption = (NODE_ENV === 'production') 
  ? 'tiny' 
  : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use('/api/quiz', quizRouter);

app.use(function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;