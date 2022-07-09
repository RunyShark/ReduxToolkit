import { useSelector, useDispatch } from "react-redux";
import { increment, decremente, incrementByNumber } from "../index";

export const ReduxApp = () => {
  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux</h1>
      <h5>{counter}</h5>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decremente())}>-1</button>
      <button onClick={() => dispatch(incrementByNumber(2))}>+2</button>
    </>
  );
};
