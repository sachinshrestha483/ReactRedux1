import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bugAdded, getUnresolvedBugs } from "../Store/Domain/Bug/reducer";
const BugsList = () => {
  const dispatch = useDispatch();

  const bugsBySelector = useSelector((state) => state.domainReducer.bug);

  const bugBYDefinedSelector = useSelector(getUnresolvedBugs);

  useEffect(() => {
    console.log("Bug Added From Here Functional Component ");
    dispatch(bugAdded({ description: "ef" }));
  }, []);
  return (
    <div>
      <ul>
        {bugsBySelector.map((bug) => (
          <h1 key={bug.id}>{bug.description}</h1>
        ))}
      </ul>
      <h1>----New---- </h1>

      <ul>
        {bugBYDefinedSelector.map((bug) => (
          <h1 key={bug.id}>{bug.description}</h1>
        ))}
      </ul>
    </div>
  );
};

export default BugsList;
