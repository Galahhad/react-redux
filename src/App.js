import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((cash) => cash.cash);

  const addCash = () => {
    dispatch({ type: "add_cash", payload: 1 });
  };

  const downCash = () => {
    if (cash) {
      dispatch({ type: "down_cash", payload: 1 });
    }
  };

  const deleteCash = () => {
    dispatch({ type: "delete_cash", payload: 0 });
  };

  return (
    <div className="App">
      <div className="count-wrap">
        <h1>{cash}</h1>
        <div className="buttons">
          <button onClick={addCash}>
            <p>Add</p>
          </button>
          <button onClick={downCash}>
            <p>Down</p>
          </button>
        </div>
        <button className="delete_button" onClick={deleteCash}>
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}

export default App;
