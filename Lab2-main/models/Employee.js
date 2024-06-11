const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  employee_id: { type: String, required: true, unique: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hashed_password: { type: String, required: true }
});

try {
  module.exports = mongoose.model('Employee', EmployeeSchema);
} catch (error) {
  console.error('Error creating Employee model:', error);
}