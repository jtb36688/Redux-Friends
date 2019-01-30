import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendsForm from "./components/FriendsForm";
import { Route, NavLink } from "react-router-dom";

const blankfield = {
  name: "",
  age: "",
  email: "",
};

class App extends Component {
  state = {
    friends: [],
    newfriend: blankfield,
    currentlyupdating: ''
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  cancelUpdate = () => {
    this.setState(currentState => {
      return {
        newfriend: blankfield,
        currentlyupdating: ''
      }
    });
  };

  toggleUpdate = id => {
    this.setState({
      newfriend: this.state.friends.find(friend => friend.id === id),
      currentlyupdating: id
    });
  };

  handleChanges = e => {
    e.persist();
    this.setState(currentState => {
      return {
        newfriend: {
          ...currentState.newfriend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addNewFriend = e => {
    e.preventDefault();
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
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}/`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  updateFriend = (e, id) => {
  e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: blankfield,
          currentlyupdating: ''
        });
      })
      .catch(err => {
        console.log(err);
      });
    }

  render() {
    return (
      <div className="AppContainer">
        <Route
          exact
          path="/"
          render={props => (
            <div>
            <NavLink to="/AddNew">Add New Friend...</NavLink>
            <FriendsList
              {...props}
              friendsarray={this.state.friends}
              deleteFriend={this.deleteFriend}
              newfriend={this.state.newfriend}
              handleChanges={this.handleChanges}
              updateFriend={this.updateFriend}
              cancelUpdate={this.cancelUpdate}
              toggleUpdate={this.toggleUpdate}
              currentlyupdating={this.state.currentlyupdating}
            />
            </div>
          )}
        />
        <Route
          path="/AddNew/"
          render={props => (
            <div>
            <NavLink to="/">Return to Friends List</NavLink>
            <FriendsForm
              {...props}
              newfriend={this.state.newfriend}
              handleChanges={this.handleChanges}
              addNewFriend={this.addNewFriend}
            />
              </div>
          )}
        />
      </div>
    );
  }
}

export default App;
