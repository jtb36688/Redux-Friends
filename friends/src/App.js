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
            <NavLink to="/modifylist/">Add New Friend...</NavLink>
            <FriendsListView
              {...props}
              newfriend={this.state.newfriend}
              handleChanges={this.handleChanges}
              resetUpdating={this.resetUpdating}
            />
            </div>
          )}
        />
        <Route
          path="/modifylist/"
          render={props => (
            <div>
            <NavLink to="/">Return to Friends List</NavLink>
            <FriendsForm
              {...props}
              newfriend={this.state.newfriend}
              handleChanges={this.handleChanges}
              addNewFriend={this.addNewFriend}
              indexupdating={this.state.indexupdating}
            />
              </div>
          )}
        />
      </div>
    );
  }
}

export default App;
