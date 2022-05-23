import React from "react";
import styles from "./addTask.module.css";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo, settodo] = React.useState("")
  const [todos, settodos] = React.useState([])
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" value={todo}  placeholder="Add task"/>
      <button onClick={
        settodos(
          [
            ...todos,
            {
              id:Date.now(),
              value:todo,
              iscompleted:false
            }
          ]
        )
          } data-cy="add-task-button">Add</button>
    </div>
  );
};

export default AddTask;
