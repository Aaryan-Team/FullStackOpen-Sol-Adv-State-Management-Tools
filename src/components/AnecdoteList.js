import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { vote_inc } from "../reducers/anecdoteReducer";
import { noti_acce } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdote, filter }) => {
    if (filter !== null) {
      return anecdote.filter((obj) =>
        obj.content
          .toLowerCase()
          .toString()
          .includes(filter.toLowerCase().toString())
      );
    }
    return anecdote;
  });

  const dispatch = useDispatch();
  //const byVotes = (b1, b2) => b2.votes - b1.votes;

  const vote = (anecdote) => {
    console.log("Anecdote--", anecdote);
    dispatch(vote_inc(anecdote));
    dispatch(noti_acce(anecdote.content));
    setTimeout(() => {
      dispatch(noti_acce(null));
    }, 5000);
  };
  return (
    <>
      {anecdotes.map((anecdote) => (
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
