import React from "react";
import { useDispatch } from "react-redux";
import { new_anec } from "../reducers/anecdoteReducer";
import { noti_acce } from "../reducers/notificationReducer";

const AnecdoteForm = () => {

  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const content = e.target.anec.value;
    dispatch(new_anec(content));
    dispatch(noti_acce(content))
    e.target.anec.value = "";
    setTimeout(() => {
    dispatch(noti_acce(null))  
    }, 5000);
  };
  return (
    <>
    <h2>Create new</h2>
      <form onSubmit={(e) => submit(e)}>
        <div>
          <input name="anec" placeholder="Anecdote" />
        </div>
        <button>create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
