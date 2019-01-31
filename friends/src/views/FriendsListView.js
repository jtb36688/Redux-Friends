import React from "react";
import { connect } from "react-redux";
import { getFriends, deleteFriend, setUpdate } from "../actions/";
import FriendsList from "../components/FriendsList";

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }

  routeUpdate = id => {
    setUpdate(id);
    this.props.history.push("/modifylist/");
  };

  // be sure to reset the updating index every time you run getFriends from this CDM. this logic in listReducer
  render() {
    <div className="FriendsListWrapper">
      <FriendsList
        friendsarray={this.props.friendsarray}
        routeUpdate={this.props.routeUpdate}
        deleteFriend={this.props.deleteFriend}
      />
    </div>;
  }
}

const mapStateToProps = state => ({
  friendsarray: state.listReducer.friends
});

export default connect(
  mapStateToProps,
  { getFriends, deleteFriend, setUpdate }
)(FriendsListView);
