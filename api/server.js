const express = require("express");
const server = express();
server.use(express.json());

const projectRouter = require("./project/router");
const resourceRouter = require("./resource/router");
const taskRouter = require("./task/router");

server.use("/api/projects", projectRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (_, res) => {
  res.send("Is your API running? You should go catch it! 🏃‍");
});

server.use("*", (_, res) => {
  res.status(404).json({ message: "404: Resource not found" });
});

module.exports = server;
