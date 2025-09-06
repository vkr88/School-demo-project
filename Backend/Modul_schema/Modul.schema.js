import mongoose from 'mongoose';
const commentsSchema = new mongoose.Schema({
 name: String,
 email: String,
 message:String,
});
const Comment = mongoose.model("Comment", commentsSchema);
export default Comment; 