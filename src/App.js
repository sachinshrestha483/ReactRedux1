import "./App.css";
//import store from "./store";
import store from "./Store/store";
import * as BugsActionCreator from "./Store/Bug/ActionCreater";
import * as SolutionActionCreator from "./Store/Solution/ActionCreater";
import * as NumberActionCreator from "./Store/Number/ActionCreater";
console.log(store);
console.log(store);

store.subscribe(() => {
  console.log("Store Changed");
  console.log(store.getState());
});

console.log(store.getState());
console.log(store.getState());

store.dispatch(BugsActionCreator.bugAdded("Bug 1"));

store.dispatch(SolutionActionCreator.solutionAdded("Solution 1"));

store.dispatch(NumberActionCreator.addNumer());
store.dispatch(NumberActionCreator.addNumer());
store.dispatch(NumberActionCreator.addNumer());
store.dispatch(NumberActionCreator.addNumer());
store.dispatch(NumberActionCreator.decreaseNumber());

// store.getState();

function App() {
  return (
    <div className="App">
      <h1>Redux is Here </h1>
    </div>
  );
}

export default App;
