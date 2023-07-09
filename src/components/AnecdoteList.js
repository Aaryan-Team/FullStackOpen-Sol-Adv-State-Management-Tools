import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote_inc } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();
  const byVotes = (b1, b2) => b2.votes - b1.votes;

  const vote = (anecdote) => {
    dispatch(vote_inc(anecdote));
  };
  return (
    <>
      {anecdotes.sort(byVotes).map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
