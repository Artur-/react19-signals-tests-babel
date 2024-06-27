import { signal } from "@preact/signals-react";

const mySignal = signal("world");

export default function BasicSignalView() {
  return <span>Hello: {mySignal}</span>;
}
