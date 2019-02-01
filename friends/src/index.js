import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
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
              <FriendsListView {...props} />
            </div>
          )}
        />
        <Route
          path="/modifylist/"
          render={props => (
            <div>
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
});

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById("root")
);
