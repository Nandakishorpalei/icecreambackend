const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connect = () => {
  return mongoose.connect(
    'mongodb+srv://nandakishor:Nanda%4013january@cluster0.iggrvt4.mongodb.net/?retryWrites=true&w=majority',
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );
};

module.exports = connect;
