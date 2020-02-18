import mongoose from "mongoose";
import Job from "../models/Jobs";

const _repository = mongoose.model("Job", Job);

class JobService {
  async getAll() {
    return await _repository.find({});
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
  async create(job) {
    return await _repository.create(job);
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async edit(id, job) {
    return await _repository.findByIdAndUpdate(id, job, { new: true })
  }
}

const jobService = new JobService();
export default jobService;