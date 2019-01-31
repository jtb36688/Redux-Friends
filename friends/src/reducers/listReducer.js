import {
  SET_UPDATE,
  GET_FRIENDS_START,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions";

const initialState = {
  friends: [],
  updatingId: ""
};

// if desired, START and FAILURE can be used here to assign "loading" and "error" state respectively

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload
      };

    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friend: action.payload
      };

    case SET_UPDATE:
      return {
        ...state,
        updatingId: action.payload
      };
  }
};
