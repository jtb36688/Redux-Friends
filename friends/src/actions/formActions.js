import axios from 'axios';

export const ADD_FRIEND_START = 'ADD_FRIEND_START'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_FAILURE  = 'ADD_FRIEND_FAILURE'
export const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START'
export const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
export const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE'

export const addNewFriend = (data) => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
    axios
      .post("http://localhost:5000/api/friends", data)
      .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
}

export const updateFriend = (data, id) => dispatch => {
    dispatch({ type: UPDATE_FRIEND_START })
    axios
      .put(`http://localhost:5000/api/friends/${id}`, data)
      .then(res => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err }));
}