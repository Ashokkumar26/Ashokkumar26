import React from "react";
import { useAuth } from "./profile/auth";

export const Profile = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      Welcome {user}
      <button onClick={logout}>logout</button>
    </div>
  );
};
