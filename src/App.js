import "./App.css";
import store from "./Store/ConfigureStore";
import {Provider } from "react-redux"

import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./Store/Domain/Bug/reducer";
import * as SolutionActionCreator from "./Store/Domain/Solution/ActionCreater";
import * as NumberActionCreator from "./Store/Domain/Number/ActionCreater";
import Bugs from "./components/bugs";
import StoreContext from "./contexts/storeContext";
import BugsList from "./components/bugsList";

console.log(store);
console.log(store);

store.subscribe(() => {
  console.log("Store Changed");
  console.log(store.getState());
});

console.log(store.getState());
console.log(store.getState());

store.dispatch(bugAdded({ description: "description" }));

store.dispatch(bugAdded({ description: "description" }));
store.dispatch(bugAdded({ description: "description" }));

store.dispatch(bugAdded({ description: "description" }));
store.dispatch(bugAdded({ description: "description" }));

store.dispatch(bugAdded({ description: "description" }));
store.dispatch(bugAdded({ description: "description" }));

store.dispatch(bugAdded({ description: "description" }));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux is Here </h1>
        <BugsList />
      </div>
    </Provider>
  );
}

export default App;
