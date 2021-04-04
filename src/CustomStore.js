import reducer from "./reducer";
function createStore(reducer) {
  var state = [];
  let listeners = [];

  function getState() {
    return state;
  }

  function Subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    //calling the reducer to get new state
    // notifying the subscribed user
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  return { getState, dispatch, Subscribe };
}

export default createStore(reducer);
