import axios from 'axios';

const ADD_FRIEND_START = 'ADD_FRIEND_START'
const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
const ADD_FRIEND_FAILURE  = 'ADD_FRIEND_FAILURE'
const UPDATE_FRIEND_START = 'UPDATE_FRIEND_START'
const UPDATE_FRIEND_SUCCESS = 'UPDATE_FRIEND_SUCCESS'
const UPDATE_FRIEND_FAILURE = 'UPDATE_FRIEND_FAILURE'

export const addNewFriend = item => dispatch => {
    axios
      .post("http://localhost:5000/friends", this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
}

export const updateFriend = item => dispatch => {
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: blankfield,
          updatingId: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
}