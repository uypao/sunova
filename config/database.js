import mongoose from 'mongoose';
import config from './config';
import colors from 'colors';
let env = process.env.NODE_ENV;

mongoose.connect(config.getHostURI(env));

mongoose.connection.on('error', (err) => {
  return console.log(("Mongoose connection error: " + err).underline.red);
});

mongoose.connection.on('connected', () => {
  return mongoose.Promise = require('q').Promise;
});

export default mongoose;
