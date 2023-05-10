import { useEffect, useState } from "react";
import "./App.css";
import { ipcRenderer } from "electron";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>++</button>
        <button onClick={() => setCount((count) => count - 1)}>--</button>
        <button onClick={() => window.myAPI.load().then((n) => setCount(n))}>
          Load
        </button>
        <button onClick={() => window.myAPI.save(`${count}`)}>save</button>
      </div>
    </>
  );
};
