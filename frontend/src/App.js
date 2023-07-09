import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={HomeScreen} exact />
            <Route path="/page/:pageNumber" Component={HomeScreen} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              Component={HomeScreen}
              exact
            />
            <Route path="/search/:keyword" Component={HomeScreen} exact />
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/register" Component={RegisterScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeoreder" Component={PlaceOrderScreen} />
            <Route path="/order/:id" Component={OrderScreen} />
            <Route path="/admin/userlist" Component={UserListScreen} />
            <Route path="/admin/user/:id/edit" Component={UserEditScreen} />
            <Route
              path="/admin/productlist"
              Component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              Component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              Component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" Component={OrderListScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
