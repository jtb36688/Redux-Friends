import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  NavLink
} from "react-router-dom";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import FriendsListView from "./views/FriendsListView";
import FriendsFormView from "./views/FriendsFormView";
import Loader from "react-loader-spinner";

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <Route
          exact
          path="/"
          render={props => (
            <div>
              <NavLink to="/modifylist/">Add New Friend...</NavLink>
              <FriendsListView {...props} />
            </div>
          )}
        />
        <Route
          path="/modifylist/"
          render={props => (
            <div>
              {this.props.isLoading ? (
                <Loader
                  type="Ball-Triangle"
                  color="#00BFFF"
                  height="90"
                  width="60"
                />
              ) : (
                <NavLink to="/">Return to Friends List</NavLink>
              )}
              <FriendsFormView {...props} />
            </div>
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading
})

const AppWithRouter = connect(mapStateToProps, {})(withRouter(App));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
