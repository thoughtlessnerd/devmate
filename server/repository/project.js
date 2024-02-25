const Project = require("../models/project");
const crudRepo = require("./crud");

class projectRepo extends crudRepo {
  constructor() {
    super(Project);
  }
  async getProjectsByUserId(id) {
    try {
      const doc = await this.model.find({ userID: id });
      return doc;
    } catch (error) {
      console.log("error in project repo" + error);
      throw error;
    }
  }
  async getProjectByProjectID(projectID) {
    try {
      const doc = await this.model.findOne({ projectID });
      return doc;
    } catch (error) {
      console.log("error in project repo" + error);
      throw error;
    }
  }
  async updateProjectByProjectID(projectID, data) {
    try {
      const doc = await this.model.findOneAndUpdate(
        { projectID: projectID },
        data,
        {
          new: true,
        }
      );
      if (!doc) {
        throw new Error("Project not found");
      }
      return doc;
    } catch (error) {
      console.log("error in project repo" + error);
      throw error;
    }
  }
  async deleteProjectByProjectID(projectID) {
    try {
      const doc = await this.model.findOneAndDelete({ projectID: projectID });
      if (!doc) {
        throw new Error("Project not found");
      }
      return doc;
    } catch (error) {
      console.log("error in project repo" + error);
      throw error;
    }
  }
  async createProject(data) {
    try {
      const doc = await this.model.create(data);
      return doc;
    } catch (error) {
      console.log("error in project repo" + error);
      throw error;
    }
  }
}

module.exports = projectRepo;
