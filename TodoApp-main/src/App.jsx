import React, { useState } from 'react'
import Header from './Components/Header'
import TodoList from './Components/TodoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [btntext, setBtntext] = useState("Add");
  const [editId, setEditId] = useState(null);

  function handelAdd() {
    if (editId) {
      // Editing an existing task
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editId ? { ...task, title, desc } : task
        )
      );
      setEditId(null);
      setBtntext("Add");
    } else {
      // Adding a new task
      let newtask = {
        title,
        desc,
        isComplete: false,
        id: tasks.length + 1,
      };
      setTasks((prev) => [...prev, newtask]);
    }
    setTitle('');
    setDesc('');
  }

  const deleteToDo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const editTask = (task) => {
    setTitle(task.title);
    setDesc(task.desc);
    setEditId(task.id);
    setBtntext("Update");
  };

  return (
    <>
      <Header tasks={tasks}></Header>

      <div className='bg-black flex flex-col gap-2 p-3 w-fit m-auto rounded-2xl items-center my-6'>
        <h1 className='text-white'>ENTER TASK</h1>
        <input
          placeholder='Enter title'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-2 rounded-xl'
        />
        <input
          placeholder='Enter Description'
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='p-2 rounded-xl'
        />
        <button onClick={handelAdd} className='bg-red-300 p-1 w-fit rounded-xl px-5'>{btntext}</button>
      </div>
      <div className='bg-gray-500 text-white w-full flex gap-10 p-2'>
        <h1>Sno.  Title</h1>
        <h1>Description</h1>

      </div>

      {tasks && tasks.length ? (
        <>
          <TodoList
            tasks={tasks}
            deleteToDo={deleteToDo}
            markComplete={markComplete}
            editTask={editTask}
          />
        </>
      ) : (
        <h3>No tasks to show</h3>
      )}
    </>
  );
}

export default App;
