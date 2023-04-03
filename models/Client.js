const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: 'string',
  },
  email: {
    type: 'string',
  },
  phone: {
    type: 'string',
  },
//   projectId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Project',
//   },
});

module.exports = mongoose.model('Client', ClientSchema);
