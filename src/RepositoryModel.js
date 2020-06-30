const mongoose = require("mongoose");

const ContributorSchema = new mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    contributions: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const PullRequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  responsable: {
    type: String,
    required: true,
  },
},
{ _id: false });

const RepositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  contributors: {
    type: [ContributorSchema],
    required: true,
  },
  pullRequests: {
    type: [PullRequestSchema],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Repository", RepositorySchema);
