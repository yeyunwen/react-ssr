import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home page</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
