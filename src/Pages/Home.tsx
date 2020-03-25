import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>Enter Game/Room</h1>
      <Link to={"Pandemic/1234"}>Play Pandemic</Link>
    </div>
  );
}
