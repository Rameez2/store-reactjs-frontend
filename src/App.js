import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/CheckoutPage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import './App.css';
import { useContext,useEffect } from "react";
import { ThemeContext } from "./providers/themeContext";
import Login from "./pages/Login";
import ProtectedRoute from "./middlewares/protectedRoute";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";

function App() {

  const {theme} = useContext(ThemeContext);
  // Apply the theme class to the body element when the theme changes
  useEffect(() => {
    document.body.className = theme; // Set the theme on the body element
  }, [theme]);

  return (
    <Router>
      <Nav/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/products" element={<ProductsPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/orders/:id" element={<OrderDetailsPage/>} />

        {/* PROTECTED ROUTES */}
        <Route path="/profile" element={<ProtectedRoute component={<ProfilePage/>} />} />
        <Route path="/orders" element={<ProtectedRoute component={<OrdersPage/>} />} />
        <Route path="/*" element={<h1>404 PAGE NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
