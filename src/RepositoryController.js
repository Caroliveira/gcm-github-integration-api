const Repository = require("./RepositoryModel");

const status = 500;

module.exports = {
  async all(req, res) {
    try {
      const repositories = await Repository.find({});
      return res.json(repositories);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async create(req, res) {
    try {
      const check = await Repository.findOne({ url: req.body.url });
      if (check) {
        return res.status(403).send();
      }
      if (req.body.pullRequests.lenght > 3) {
        return res.status(400).send();
      }
      const repository = await Repository.create(req.body);
      return res.json(repository);
    } catch (err) {
      return res.status(status).send();
    }
  },

  async delete(req, res) {
    try {
      await Repository.findByIdAndDelete(req.params.id);
      return res.send();
    } catch (err) {
      return res.status(status).send();
    }
  }
};
