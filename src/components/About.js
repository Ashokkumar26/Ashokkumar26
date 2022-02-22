import React from "react";
import { useSearchParams } from "react-router-dom";

export const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>About</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active Users
      </button>
      <button onClick={() => setSearchParams({})}>Reset Users</button>
      {isActive ? <h1>Active Users List</h1> : <h1>All Users List</h1>}
    </>
  );
};
