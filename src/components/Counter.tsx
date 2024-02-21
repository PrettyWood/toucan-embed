import { useState } from "react";

export const Counter: React.FC<{
  name: string;
  onCountUpdated?: (count: number) => void;
}> = ({ name, onCountUpdated }) => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
    onCountUpdated?.(count);
  };

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Count: {count}</p>
      <button onClick={onClick}>Increment</button>
    </div>
  );
};
