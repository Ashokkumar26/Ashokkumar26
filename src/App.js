import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { NavList } from "./components/NavList";
import { NoMatch } from "./components/NoMatch";
import { Featured } from "./components/Products/Featured";
import { New } from "./components/Products/New";
import { OrderSummary } from "./components/Products/OrderSummary";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/profile/auth";
import { Login } from "./components/profile/Login";
import { RequiredAuth } from "./components/profile/RequiredAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <RequiredAuth>
                <About />
              </RequiredAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequiredAuth>
                <Products />
              </RequiredAuth>
            }
          >
            <Route path="featured-products" index element={<Featured />} />
            <Route path="featured-products" element={<Featured />} />
            <Route path="new-products" element={<New />} />
            <Route path=":products/order-summary" element={<OrderSummary />} />
          </Route>
          <Route
            path="/profile"
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
