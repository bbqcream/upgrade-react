import { useRef, useState, useEffect } from "react";

function App() {
  const ref = useRef(0);
  const inputRef = useRef();
  const [state, setState] = useState(0);
  const increaseRef = () => {
    ref.current = ref.current + 1;
  };
  const increaseState = () => {
    setState((prev) => prev + 1);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <button onClick={increaseRef}>ref</button>
      {ref.current}
      <button onClick={increaseState}>state</button>
      {state}
      <input type="text" ref={inputRef}></input>
    </div>
  );
}

export default App;
