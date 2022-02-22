import { useState } from "react";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  return (
    <div>
      <label>
        UserName:{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={() => login(user)}>Login</button>
    </div>
  );
};
