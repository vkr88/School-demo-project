import Comment from '../Modul_schema/Modul.schema.js';

export const comment = async (req, res) => {
 try {
  const comment = await Comment.find();
    res.json(comment);
 } catch (err) {
 res.status(400).json({ error: err.message });
 }
};

export const createComment = async (req, res) => {
try {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
  console.log(comment);
} catch (error) {
  res.status(400).json({ error: err.message });
}

}


