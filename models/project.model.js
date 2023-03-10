const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    projectImage: String,
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      short: { type: String, required: true },
      long: { type: String, required: true },
    },
    tech: {
      engines: {
        type: [String],
        enum: ["unreal", "unity", "godot", "game maker", "cryengine"],
      },
      languages: {
        type: [String],
        enum: [
          "c",
          "c++",
          "c#",
          "javascript",
          "java",
          "html5",
          "python",
          "unrealscript",
          "lua",
          "gml",
          "swift",
        ],
      },
    },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    links: {
      github: String, //regex all of these eventually, to make sure they go to the right website
      steam: String,
      patreon: String,
      discord: String,
    }, //fill with, unity etc
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], //placeholder until i make comment model, or controller route for updating it
    jobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
    upvotes: Number, //placeholder until i make a upvote model, or controller route for updating it
    hiring: Boolean,
    updated: String,
    deleted: Boolean,
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
