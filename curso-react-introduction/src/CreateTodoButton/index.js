import React from 'react';
import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton({setOpenModal}) {
  // const { openModal, setOpenModal } = React.useContext(TodoContext)
  return (
    <button className="CreateTodoButton"
      onClick={() => {
        setOpenModal(state => !state);
      }}>+</button>
  );
}

export { CreateTodoButton };
