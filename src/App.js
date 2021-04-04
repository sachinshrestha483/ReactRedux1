import "./App.css";
 import store from "./Store/store";
 import * as BugsActionCreator from "./Store/Domain/Bug/reducer";
 import * as SolutionActionCreator from "./Store/Domain/Solution/ActionCreater";
 import * as NumberActionCreator from "./Store/Domain/Number/ActionCreater";
 
 
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

 store.getState();

function App() {
  return (
    <div className="App">
      <h1>Redux is Here </h1>
    </div>
  );
}

export default App;
