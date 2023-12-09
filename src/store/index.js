import { createStore } from "redux";

const initialState = {
  userId: 0,
  email: "",
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "userId") {
    return {
      ...state,
      userId: action.userId,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
