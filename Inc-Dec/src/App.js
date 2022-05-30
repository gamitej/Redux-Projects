import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";

function App() {
  // getting the data from store
  const myState = useSelector((state) => state.changeNum);

  // for changing the state value
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(decNum())}>-</button>
      <input value={myState} />
      <button onClick={() => dispatch(incNum())}>+</button>
    </div>
  );
}

export default App;
