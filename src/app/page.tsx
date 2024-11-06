'use client';

import { useMouseStalking } from "@/hooks/useMouseStalker";
import { Pointer } from "./components/animation/Pointer";

export default function Home() {
  const { x, y} = useMouseStalking();
  console.log(x, y);

  return (
      <div className="w-full flex justify-center">
        <Pointer position={{x, y}} />
        <h1>This is application </h1>
      </div>
  );
}
