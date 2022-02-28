import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema({
  content: String,
  isDone: Boolean,
});

const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;
