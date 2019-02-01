import React from "react";
import { connect } from "react-redux";
import { addNewFriend, updateFriend } from "../actions";
import FriendsForm from "../components/FriendsForm";
import { NavLink } from "react-router-dom"


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
    console.log('forms mounted', this.props.updatingId)
    this.props.updatingId
      ? this.setState({
          newfriend: {
            name: this.props.friendsarray.find(
              friends => friends.id === this.props.updatingId
            ).name,
            age: this.props.friendsarray.find(
              friends => friends.id === this.props.updatingId
            ).age,
            email: this.props.friendsarray.find(
              friends => friends.id === this.props.updatingId
            ).email
          }
        })
      : this.setState({
          newfriend: blankfield
        });
  }

  handleChanges = e => {
    this.setState({
      newfriend: {
        ...this.state.newfriend,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
      <NavLink to="/">Return to Friends List</NavLink>
      <FriendsForm
        friendsarray={this.props.friendsarray}
        updateFriend={this.props.updateFriend}
        addNewFriend={this.props.addNewFriend}
        handleChanges={this.handleChanges}
        updatingId={this.props.updatingId}
        newfriend={this.state.newfriend}
      />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friendsarray: state.friends,
  updatingId: state.updatingId
});

export default connect(
  mapStateToProps,
  { addNewFriend, updateFriend }
)(FriendsFormView);
