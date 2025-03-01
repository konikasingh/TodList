import React, { useState } from 'react'

function Header({ tasks }) {


    return (
        <div className='w-full bg-black rounded-full p-4 flex items-center justify-between text-white'>
            <h3><i class="ri-todo-fill"></i>TODO</h3>

            <h2>Remaining tasks <span>  </span>
                {tasks ?
                    <>
                        {tasks.length}
                    </> :
                    <p>
                        0
                    </p>
                }
            </h2>
        </div>
    )
}
export default Header
