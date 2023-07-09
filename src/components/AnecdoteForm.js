import React from "react";
import { useDispatch } from "react-redux";
import { new_anec } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const content = e.target.anec.value;
    dispatch(new_anec(content));
    e.target.anec.value = "";
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
