const mongoose = require("mongoose");
const { TodoSchema } = require("../schemas/todo.schemas");

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = { TodoModel };
