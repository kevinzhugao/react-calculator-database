const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/react-calculator');

const historySchema = mongoose.Schema({
  input: String,
  output: String
});

const History = mongoose.model('History', historySchema);

const save = (input, output) => {
  return History.create({
    input,
    output
  })
};

const retrieve = () => History.find({});

const truncate = () => History.remove({});

module.exports = {
  save,
  retrieve,
  truncate
};
