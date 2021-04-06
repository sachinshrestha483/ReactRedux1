//Curried Version of Function

const logger = (param) => (store) => (next) => (action) => {
  console.log("store", store);
  console.log("Parameter");
  console.log(param);
  console.log("next", next);
  console.log("action", action);
  next(action);
};
export default logger;
