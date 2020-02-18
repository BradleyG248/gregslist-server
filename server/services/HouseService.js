import mongoose from "mongoose";
import House from "../models/Houses";

const _repository = mongoose.model("House", House);

class HouseService {
  async getAll() {
    return await _repository.find({});
  }
  async delete(id) {
    return await _repository.findByIdAndDelete(id)
  }
  async create(house) {
    return await _repository.create(house);
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async edit(id, house) {
    return await _repository.findByIdAndUpdate(id, house, { new: true })
  }
}

const houseService = new HouseService();
export default houseService;