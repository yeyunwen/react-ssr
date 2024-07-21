import { useState } from "react";
import style from "./index.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  console.log("style", style);

  return (
    <div>
      <h1>Home page</h1>
      <h2>Count: {count}</h2>
      <button
        className={style.primaryButton}
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
