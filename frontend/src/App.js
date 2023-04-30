import './App.css';
import { useState, useEffect } from 'react';
import Item from './component/Item.js';
import axios from 'axios';

function App() {
  const [text, setText] = useState('');
  const [todo, setToDo] = useState([]);
  const [isUpdating, setUpdating] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080/get').then((res) => setToDo(res.data));
  }, []);

  const addUpdateToDo = () => {
    if (isUpdating === '') {
      axios
        .post('http://localhost:8080/add', { text })
        .then((res) => {
          setText('');
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .put('http://localhost:8080/update', {
          _id: isUpdating,
          text,
        })
        .then((res) => {
          setText('');
          setUpdating('');
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteToDo = (id) => {
    axios
      .delete(`http://localhost:8080/delete/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  const updateToDo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  };

  return (
    <div className='app'>
      <div className='container'>
        <h1>ToDo App</h1>
        <div className='top'>
          <input
            type='text'
            placeholder='Write something'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className='add' onClick={addUpdateToDo}>
            {isUpdating ? 'Update' : 'add'}
          </div>
        </div>
        <div className='list'>
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => deleteToDo(item._id)}
              update={() => updateToDo(item._id, item.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
