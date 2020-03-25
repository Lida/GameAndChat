import React from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

export default function Home() {
  let id = shortid.generate();
  return (
    <div>
      <h1>Enter Game/Room</h1>
      <Link to={`Pandemic/${id}`}>Create Pandemic Room</Link>
    </div>
  );
}
