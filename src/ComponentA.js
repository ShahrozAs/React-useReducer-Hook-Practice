import React, { useReducer } from "react";

const reducer = (state, action) => {
  console.log("State", state);
  console.log("Action", action);

  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const ComponentA = () => {
  const initialState = {
    count: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>State Count :{state.count}</h2>
      <button onClick={()=>dispatch({ type: "INCREASE" })}>Increase </button>
      <button onClick={()=>dispatch({ type: "DECREASE" })}>Decrease </button>
    </div>
  );
};

export default ComponentA;
