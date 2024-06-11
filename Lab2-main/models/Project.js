const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  project_code: { type: String, required: true, unique: true },
  project_name: { type: String, required: true },
  project_description: { type: String, required: true }
});

try {
  module.exports = mongoose.model('Project', ProjectSchema);
} catch (error) {
  console.error('Error creating Project model:', error);
} 