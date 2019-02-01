import React from "react";
import { withRouter } from "react-router-dom";

const FriendsForm = props => {
  const renderAge = () => {
    let tagsarray = [];
    for (let i = 1; i < 130; i++) {
      tagsarray.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return tagsarray;
  };

  const handleSubmit = (e, data, id) => {
    e.preventDefault();
    if (!Object.values(props.newfriend).includes("")) {
      if (props.updatingId) {
        props.updateFriend(data, id);
        props.history.push("/");
      } else {
        props.addNewFriend(data);
        props.history.push("/");
      }
    } else {
      return null;
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e, props.newfriend, props.updatingId)}>
      <input
        value={props.newfriend.name}
        type="text"
        name="name"
        placeholder="Friend Name.."
        onChange={(e) => props.handleChanges(e)}
      />
      <select
        name="age"
        value={props.newfriend.age}
        onChange={(e) => props.handleChanges(e)}
      >
        <option value="">Friend Age..</option>
        {renderAge()}
      </select>
      <input
        value={props.newfriend.email}
        type="email"
        name="email"
        placeholder="Friend Email.."
        onChange={(e) => props.handleChanges(e)}
      />
      <button color="primary" type="submit">
        {props.updatingId ? 'Update Friend' : 'Add New Friend'}
      </button>
    </form>
  );
};

export default withRouter(FriendsForm);
