const { Schema } = require("mongoose");

const TodoSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
});

const TodoResponseDefault = (todo) => {
  return {
    context: todo.context,
    state: todo.state,
    id: todo.id,
  };
};

module.exports = { TodoSchema, TodoResponseDefault };
