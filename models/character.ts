import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  house: { type: String, required: true },
  orderOfThePhoenix: { type: Boolean, required: true },
  dumbledoreArmy: { type: Boolean, required: true },
  deathEater: { type: Boolean, required: true },
  alias: { type: String, required: true },
  patronus: { type: String, required: true },
});

export default mongoose.model('Character', characterSchema);
