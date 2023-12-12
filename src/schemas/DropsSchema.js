const mongoose = require('mongoose');

const dropsSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  snowballs: { type: Number, default: 0 },
});

const Drops = mongoose.model('Drops', dropsSchema);

module.exports = Drops;