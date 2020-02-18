import mongoose from "mongoose";
import Car from "../models/Cars";

const _repository = mongoose.model("Car", Car);

class CarService {
  async getAll() {
    return await _repository.find({});
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
  async create(car) {
    return await _repository.create(car);
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async edit(id, car) {
    return await _repository.findByIdAndUpdate(id, car, { new: true })
  }
}

const carService = new CarService();
export default carService;