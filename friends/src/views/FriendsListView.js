import React from "react";
import { connect } from "react-redux";
import { getChars } from "../actions/";
import { CharacterList } from "../components";
import Loader from "react-loader-spinner";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        <ul>
          {props.friendsarray.map(({ id, name, age, email }) => {
            <li key={id}>
              <ul className="InnerLists">
                <li> Name: {name} </li>
                <li> Age: {age} </li>
                <li> Email: {email} </li>
              </ul>{" "}
              <button
                color="primary"
                size="sm"
                onClick={() => props.toggleUpdate(id)}
              >
                Update Friend
              </button>
              <button
                color="warning"
                size="sm"
                onClick={() => props.deleteFriend(id)}
              >
                Delete Friend
              </button>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
