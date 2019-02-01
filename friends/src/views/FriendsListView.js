import React from "react";
import { connect } from "react-redux";
import { getFriends, deleteFriend, setUpdate } from "../actions/";
import FriendsList from "../components/FriendsList";
import { NavLink } from "react-router-dom"
import Loader from "react-loader-spinner";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  routeUpdate = id => {
    this.props.setUpdate(id);
    this.props.history.push("/modifylist/");
  };
  // because ...props was passed down to this component, the push method will work here
  // be sure to reset the updating index every time you run getFriends from this CDM. this logic in listReducer
  render() {
    return (
      <div className="FriendsListWrapper">
        {this.props.isLoading ? (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        ) : (
          <NavLink to="/modifylist/">Add New Friend..</NavLink>
        )}
        <FriendsList
          friendsarray={this.props.friendsarray}
          routeUpdate={this.routeUpdate}
          deleteFriend={this.props.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friendsarray: state.friends,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend, setUpdate }
)(FriendsListView);
