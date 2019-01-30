import React from "react";
import { Button } from 'reactstrap'

const FriendsForm = props => {
  const renderAge = () => {
    let tagsarray = [];
    for (let i = 1; i < 130; i++) {
      tagsarray.push(<option key={i} value={i}>{i}</option>);
    }
    return tagsarray;
  };

  return (
    <form onSubmit={props.addNewFriend}>
      <input
      value={props.newfriend.name}
      type='text'
      name='name'
      placeholder='Friend Name..'
      onChange={props.handleChanges}
      />
      <select name="age" value={props.newfriend.age} onChange={props.handleChanges}>
        <option value="">Friend Age..</option>
        {renderAge()}
      </select>
      <input
      value={props.newfriend.email}
      type='text'
      name='email'
      placeholder='Friend Email..'
      onChange={props.handleChanges}
      />
      <Button color='primary' type="submit">Add New Friend</Button>
    </form>
  );
};

export default FriendsForm;