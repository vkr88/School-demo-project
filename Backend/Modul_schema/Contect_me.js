import mongoose from 'mongoose';

const ContectSchema = new mongoose.Schema({
  Full_Name: {
    type: String,
    required: true
  },
  Number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

export default mongoose.model('Contect', ContectSchema);
