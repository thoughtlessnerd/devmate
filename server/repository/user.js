const User = require("../models/user");
const crudRepo = require("./crud");

class userRepo extends crudRepo {
  constructor() {
    super(User);
  }
  async getUserById(id) {
    try {
      const doc = await this.model.findOne({ userID: id });
      return doc;
    } catch (error) {
      console.log("error in user repo" + error);
      throw error;
    }
  }
  async updateUserByID(id, data) {
    try {
      const doc = await this.model.findOneAndUpdate({ userID: id }, data, {
        new: true,
      });
      if (!doc) {
        throw new Error("User not found");
      }
      return doc;
    } catch (error) {
      console.log("error in user repo" + error);
      throw error;
    }
  }
  async getUserByEmail(email) {
    try {
      const doc = await this.model.findOne({ email });
      return doc;
    } catch (error) {
      console.log("error in user repo" + error);
      throw error;
    }
  }
  async getUserByUsername(username) {
    try {
      const doc = await this.model.findOne({ username });
      return doc;
    } catch (error) {
      console.log("error in user repo" + error);
      throw error;
    }
  }
}

module.exports = userRepo;
