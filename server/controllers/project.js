const { projectService } = require("../services");
const { v4 } = require("uuid");

class projectController {
  constructor() {
    this.service = new projectService();
  }
  getProjectsByUserId = async (req, res) => {
    try {
      const projects = await this.service.getProjectsByUserId(req.user);
      res
        .status(200)
        .json({ message: "success", success: true, data: projects });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  getProjectByProjectID = async (req, res) => {
    try {
      const project = await this.service.getProjectByProjectID(
        req.params.projectID
      );
      res
        .status(200)
        .json({ message: "success", success: true, data: project });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  updateProjectByProjectID = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        projectID: req.params.projectID,
        userID: req.user,
        doneTasks: req.body.doneTasks,
        todoTasks: req.body.todoTasks,
      };
      const project = await this.service.updateProjectByProjectID(
        req.params.projectID,
        data
      );
      res
        .status(200)
        .json({ message: "updated", success: true, data: project });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  deleteProjectByProjectID = async (req, res) => {
    try {
      const project = await this.service.deleteProjectByProjectID(
        req.params.projectID
      );
      res
        .status(200)
        .json({ message: "deleted", success: true, data: project });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  createProject = async (req, res) => {
    try {
      const data = {
        name: req.body.name,
        projectID: v4(),
        userID: req.user,
        doneTasks: req.body.doneTasks,
        todoTasks: req.body.todoTasks,
      };
      const project = await this.service.createProject(data);
      res
        .status(201)
        .json({ message: "created", success: true, data: project });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = new projectController();
