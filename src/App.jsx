import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import Footer from "./pages/Footer";
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/Owner/Layout";
import Dashboard from "./pages/Owner/Dashboard";
import AddCar from "./pages/AddCar";
import ManageCars from "./pages/Owner/ManageCars";
import ManageBooking from "./pages/Owner/ManageBooking";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwner = useLocation().pathname.startsWith("/owner");

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwner && <Navbar setShowLogin={setShowLogin} />}
      <p>Test Git</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        {/* Add other routes as needed */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBooking />} />
        </Route>
      </Routes>
      {!isOwner && <Footer />}
    </>
  );
};

export default App;
