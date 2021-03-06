import express from "express";
import jobService from "../services/JobService";

export default class JobController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .post("", this.create)
  }
  async delete(req, res, next) {
    try {
      await jobService.delete(req.params.id);
      res.send("deleted")
    }
    catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await jobService.create(req.body)
      res.status(201).send(data);
    }
    catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      let data = await jobService.edit(req.params.id, req.body)
      res.send(data);
    }
    catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let data = await jobService.getById(req.params.id)
      return res.send(data);
    }
    catch (error) {
      next(error)
    }
  }

  async getAll(req, res, next) {
    try {
      let data = await jobService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
