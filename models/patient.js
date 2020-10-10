const mongoose = require('mongoose');

const Patients = mongoose.Schema({
 Mobno: {type: String, required: true},
    CardDetails: { type: Object},
  PatientDetails: { type: Array}
});

module.exports = mongoose.model('Patients', Patients);

