import Todo from '../../models/todos';

export const list = async ctx => {
  try {
    const todos = await Todo.find().exec();
    ctx.body = todos;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const write = async ctx => {
  const { content } = ctx.request.body;

  const todo = new Todo({
    content,
    isDone: true,
  });

  try {
    await todo.save();
    ctx.body = todo;
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const updateDone = async ctx => {
  const { _id } = ctx.request.body;
  console.log('_id', _id);
  try {
    const result = await Todo.findByIdAndUpdate(_id, [{ $set: { isDone: { $not: '$isDone' } } }], {
      new: true,
    }).exec();
    console.log('ddd ', result);
    ctx.body = result;
  } catch (e) {
    ctx.throw(500, e);
  }
};
