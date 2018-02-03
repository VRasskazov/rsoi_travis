// model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  login: String
});

UserSchema.virtual('date')
  .get(() => this._id.getTimestamp());

mongoose.model('User', UserSchema);

