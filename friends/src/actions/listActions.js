import axios from "axios";

export const SET_UPDATE = "SET_UPDATE";
export const GET_FRIENDS_START = "GET_FRIENDS_START";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";
export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_FRIENDS_FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
    console.log("action", id)
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
};

export const setUpdate = (id) => {
    return {
        type: SET_UPDATE,
        payload: id
    }
}