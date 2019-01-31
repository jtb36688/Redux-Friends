import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, withRouter, Route, NavLink } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(applyMiddleware, thunk)

class App extends Component {
  state = {
    updatingId: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleChanges = e => {
    e.persist();
    this.setState(currentState => {
      return {
        newfriend: {
          ...currentState.newfriend,
          [e.target.name]: e.target.value
        }
      };
    });
  };

  addNewFriend = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", this.state.newfriend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}/`)
      .then(res => {
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // updateFriend = (e, id) => {
  //   e.preventDefault();
  //   axios
  //     .put(`http://localhost:5000/friends/${id}`, this.state.newfriend)
  //     .then(res => {
  //       this.setState({
  //         friends: res.data,
  //         friend: blankfield,
  //         updatingId: ""
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  routeUpdate = id => {
    this.setState({
      updatingId: `${id}`
    })
    this.props.history.push("/modifylist/");
  }

  render() {
    return (
      <div className="AppContainer">
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <NavLink to="/modifylist/">Add New Friend...</NavLink>
              <FriendsListView
                {...props}
                newfriend={this.state.newfriend}
                handleChanges={this.handleChanges}
                routeUpdate={this.routeUpdate}
              />
            </div>
          )}
        />
        <Route
          path="/modifylist/"
          render={props => (
            <div>
              <NavLink to="/">Return to Friends List</NavLink>
              <FriendsForm
                {...props}
                newfriend={this.state.newfriend}
                handleChanges={this.handleChanges}
                addNewFriend={this.addNewFriend}
                updatingId={this.state.updatingId}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <AppWithRouter />
  </Router>
  </Provider>,
  document.getElementById("root")
);
