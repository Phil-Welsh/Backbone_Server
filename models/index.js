const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/backbone';

const configOptions = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Place: require('./Place'),
  Speedtest: require('./Speedtest')
};
