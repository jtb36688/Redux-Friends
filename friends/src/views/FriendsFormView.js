import React from "react";
import { connect } from "react-redux";
import { addNewFriend, updateFriend } from "../actions";

const blankfield = {
  name: "",
  age: "",
  email: ""
};

class FriendsFormView extends React.Component {
  state = {
    newfriend: blankfield
  };
  componentDidMount() {
    this.props.updatingId &&
    this.setState({
      name: this.props.friendsarray.find(friends => friends.id.toString() === this.props.friendsarray).name,
      age: this.props.friendsarray.find(friends => friends.id.toString() === this.props.friendsarray).age,
      height: this.props.friendsarray.find(friends => friends.id.toString() === this.props.friendsarray).height
    })}


  handleChanges = e => {
    this.setState(currentState => {
      return {
        newfriend: {
          ...currentState.newfriend,
          [e.target.name]: e.target.value
        }
      };
    });
  };
  render() {
    <FriendsForm
      friendsarray={this.props.friendsarray}
      addNewFriend={this.props.addNewFriend}
      newfriend={this.state.newfriend}
    />;
  }
}

const mapStateToProps = state => ({
  friendsarray: state.listReducer.friends
});
export default connect(
  mapStateToProps,
  { addNewFriend, updateFriend }
)(FriendsFormView);
