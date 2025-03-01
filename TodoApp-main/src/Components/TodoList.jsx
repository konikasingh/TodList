import React from 'react';

function TodoList({ tasks, deleteToDo, markComplete, editTask }) {
    return (
        <div>
            {tasks.map((task) => {
                return (
                    <div key={task.id} className='flex bg-black text-white gap-3 p-3 mb-3 rounded-full justify-between items-center'>
                        <div className='flex gap-10'>
                            <h2>
                                {task.id}. {task.title}
                            </h2>
                            <h2>{task.desc}</h2>
                        </div>
                        <div className='flex gap-3'>
                            {task.isComplete ? (
                                <p className='bg-green-300 p-1 flex items-center rounded-xl'>
                                    <i className="ri-check-double-line"></i> Task completed
                                </p>
                            ) : (
                                <button
                                    onClick={() => markComplete(task.id)}
                                    className='bg-red-500 p-1 rounded-xl'
                                >
                                    Mark as Complete
                                </button>
                            )}
                            <button
                                onClick={() => editTask(task)}
                                className='bg-blue-500 px-2 text-xs rounded-lg'
                            >
                                <i class="ri-file-edit-line"></i>
                                Edit
                            </button>
                            <button
                                onClick={() => deleteToDo(task.id)}
                                className='bg-red-500 px-1 text-xs rounded-lg'
                            >
                                <i class="ri-delete-bin-6-line"></i>
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TodoList;
