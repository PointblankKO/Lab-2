const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectAssignmentSchema = new Schema({
  employee_id: { type: String, required: true },
  project_code: { type: String, required: true },
  start_date: { type: Date, required: true }
});

try {
  module.exports = mongoose.model('ProjectAssignment', ProjectAssignmentSchema);
} catch (error) {
  console.error('Error creating ProjectAssignment model:', error);
}