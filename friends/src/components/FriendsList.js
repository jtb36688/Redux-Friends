import React from "react";

const FriendsList = props => {
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
            <button onClick={() => this.props.routeUpdate(id)}>
              Update Friend
            </button>
            <button onClick={() => this.props.deleteFriend(id)}>
              Delete Friend
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default FriendsList;
