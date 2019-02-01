import {
  SET_UPDATE,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from "../actions";

// if desired, START and FAILURE can be used here to assign "loading" and "error" state respectively
// tried to use two seperate reducers, but both views use like state, so it didn't seem to work.

const initialState = {
  friends: [],
  updatingId: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        updateId: ""
      };

    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };

    case SET_UPDATE:
      return {
        ...state,
        updatingId: action.payload
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    case UPDATE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };
    default:
      return state;
  }
}

export default reducer;
