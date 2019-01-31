import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter as Router, withRouter, Route, NavLink } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger, thunk))

class App extends Component {



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
              />
            </div>
          )}
        />
        <Route
          path="/modifylist/"
          render={props => (
            <div>
              <NavLink to="/">Return to Friends List</NavLink>
              <FriendsFormView
                {...props}
                newfriend={this.state.newfriend}
                handleChanges={this.handleChanges}
                addNewFriend={this.addNewFriend}
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
