import React from "react";
import { connect } from "react-redux";
import { getFriends, deleteFriend } from "../actions/";
import FriendsList from "../components/FriendsList"

class FriendsListView extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
// be sure to reset the updating index every time you run getFriends from this CDM. this logic in listReducer
  render() {
    <div className="FriendsListWrapper">
        <FriendsList 
        friendsarray={this.props.friendsarray}
        updateFriend={this.props.routeUpdate}
        deleteFriend={this.props.deleteFriend}
        />
    </div>
  }
}

const mapStateToProps = state => ({
    friendsarray: state.listReducer.friends
})

export default connect(mapStateToProps, { getFriends, updateFriend, deleteFriend })(FriendsListView)