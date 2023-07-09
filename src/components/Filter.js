import React from "react";
import { useDispatch } from "react-redux";
import { filterChange } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterChange(event.target.value));
  };

  return (
    <>
      <div>
        filter <input placeholder="Search..." onChange={handleChange} />
      </div>
      <br />
    </>
  );
};

export default Filter;
