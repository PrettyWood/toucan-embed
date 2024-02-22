import { useState } from "react";
import styled from "styled-components";

const Border = styled.div`
  border: 5px solid green;
  padding: 10px;
  margin: 10px;
  width: 450px;
`;

const Button = styled.button`
  color: red;
`;

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
    <Border>
      <h1>Hello, {name}</h1>
      <p>Count: {count}</p>
      <Button onClick={onClick}>Increment</Button>
    </Border>
  );
};
