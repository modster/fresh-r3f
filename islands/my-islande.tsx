import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import Card from "../components/Card.tsx";
import Button from "../components/Button.tsx";

interface Props {
  children: ComponentChildren;
}

export default function MyIsland({ children }: Props) {
  const count = useSignal(0);

  return (
    <Card>
      Counter is at {count}.{" "}
      <Button onClick={() => (count.value += 1)}>+</Button>
      {children}
    </Card>
  );
}