import axios from "axios";

const SET_UPDATE = "SET_UPDATE";
const GET_FRIENDS_START = "GET_FRIENDS_START";
const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
const DELETE_FRIEND_START = "DELETE_FRIEND_START";
const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axios
    .get("http://localhost:5000/friends")
    .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`http://localhost:5000/friends/${id}/`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
};

export const setUpdate = (id) => {
    return {
        type: SET_UPDATE,
        payload: id
    }
}