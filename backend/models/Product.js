import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String,
  isFeatured: Boolean,
  isNew: Boolean
});

export default mongoose.model('Product', productSchema);
