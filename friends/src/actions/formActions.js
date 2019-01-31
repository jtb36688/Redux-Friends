import axios from 'axios';

const ADD_FRIEND_START = 'ADD_FRIEND_START'
const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
const ADD_FRIEND_FAILURE  = 'ADD_FRIEND_FAILURE'
const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START'
const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE'

export const addNewFriend = () => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
    axios
      .post("http://localhost:5000/friends", this.state.newfriend)
      .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
}

export const updateFriend = id => dispatch => {
    dispatch({ type: UPDATE_FRIEND_START })
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newfriend)
      .then(res => dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: res.data }))
      .catch(err => dispatch({ type: UPDATE_FRIEND_FAILURE, payload: err }));
}