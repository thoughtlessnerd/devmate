const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
  },
  projectID: {
    type: String,
    required: [true, "can't be blank"],
    unique: true,
    index: true,
  },
  userID: {
    type: String,
    required: [true, "can't be blank"],
  },
  doneTasks: {
    type: Object,
  },
  todoTasks: {
    type: Object,
  },
});

module.exports = mongoose.model("Project", projectSchema);
