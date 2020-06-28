const Repository = require("./RepositoryModel");

module.exports = {
  async all(req, res) {
    try {
      const repositories = await Repository.find({});
      return res.json(repositories);
    } catch (err) {
      console.log(err);
    }
  },

  async create(req, res) {
    try {
      const repository = await Repository.create(req.body);
      return res.json(repository);
    } catch (err) {
      console.log(err);
    }
  },
};
