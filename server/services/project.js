const { projectRepo } = require("../repository");

class projectService {
  constructor() {
    this.projectRepository = new projectRepo();
  }
  getProjectsByUserId = async (id) => {
    try {
      const projects = await this.projectRepository.getProjectsByUserId(id);
      return projects;
    } catch (error) {
      throw error;
    }
  };
  getProjectByProjectID = async (projectID) => {
    try {
      const project = await this.projectRepository.getProjectByProjectID(
        projectID
      );
      return project;
    } catch (error) {
      throw error;
    }
  };
  updateProjectByProjectID = async (projectID, data) => {
    try {
      const project = await this.projectRepository.updateProjectByProjectID(
        projectID,
        data
      );
      return project;
    } catch (error) {
      throw error;
    }
  };
  deleteProjectByProjectID = async (projectID) => {
    try {
      const project = await this.projectRepository.deleteProjectByProjectID(
        projectID
      );
      return project;
    } catch (error) {
      throw error;
    }
  };
  createProject = async (data) => {
    try {
      const project = await this.projectRepository.createProject(data);
      return project;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = projectService;
