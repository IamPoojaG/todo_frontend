import Todo from '../models/Models.js';

export const getToDo = async (req, res) => {
  const ToDo = await Todo.find();
  res.send(ToDo);
};

export const saveToDo = async (req, res) => {
  const { text } = req.body;

  Todo.create({ text })
    .then(() => res.set(201).send('Added succesfully...'))
    .catch((err) => console.log(err));
};

export const deleteToDo = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Todo.findByIdAndDelete(id)
    .then(() => res.set(201).send('deleted succesfully...'))
    .catch((err) => console.log(err));
};

export const updateToDo = (req, res) => {
  const { _id, text } = req.body;
  Todo.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send('updated succesfully...'))
    .catch((err) => console.log(err));
};
