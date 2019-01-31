import axios from 'axios';

const GET_FRIENDS_START = 'GET_FRIENDS_START'
const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
const GET_FRIENDS_FAILURE  = 'GET_FRIENDS_FAILURE'
const DELETE_FRIEND_START = 'DELETE_FRIEND_START'
const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS'
const DELETE_FRIEND_FAILURE = 'DELETE_FRIEND_FAILURE'

// GOING TO HAVE TO FIND A WAY TO DO A GET FRIEND REQUEST DIRECTLY AFTER DELETING FRIEND TO REFRESH SERVER DATA

export const getFriends = item => dispatch => {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
}

export const deleteFriend = item => dispatch => {
    axios
      .delete(`http://localhost:5000/friends/${id}/`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
}