const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || 'mongodb+srv://philwelsh:Scramkids91!@sei.4ya2f.mongodb.net/backbone?retryWrites=true&w=majority';

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
  Speedtest: require('./Speedtest'),
  User: require('./User'),
  Comment: require('./Comment')
};
