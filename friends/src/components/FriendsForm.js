import React from "react";

const FriendsForm = props => {
  const renderAge = () => {
    let tagsarray = [];
    for (let i = 1; i < 130; i++) {
      tagsarray.push(<option key={i} value={i}>{i}</option>);
    }
    return tagsarray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {!Object.keys(props.newfriend).includes('') && 
    {}
    props.addNewFriend
  
  }
    this.props.history.push("/")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
      <button color='primary' type="submit">Add New Friend</button>
    </form>
  );
};

export default FriendsForm;