import React from "react";
import { useDispatch } from "react-redux";
import { new_anec } from "../reducers/anecdoteReducer";
import { noti_acce } from "../reducers/notificationReducer";
import anecdote from "../services/anecdote";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    const content = e.target.anec.value;
    const newAnec = await anecdote.createNew(content)

    dispatch(new_anec(newAnec));

    

    
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
