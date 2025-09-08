import React from "react";
import Title from "../components/Owner/Title";
import { useState } from "react";
import { assets } from "../assets/assets";

const AddCar = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: 0,
    pricePerDay: 0,
    category: "",
    transmission: "",
    fuelType: "",
    seating_capacity: 0,
    location: "",
    decription: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
      />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl  "
      >
        {/* Car image */}
        <div className="flex items-center gap-4 w-full">
          <label htmlFor="car-image">
            <img
              className="w-32 h-18 object-cover rounded-lg border border-dotted cursor-pointer"
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt="car-image"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
          <p className="text-gray-500 text-sm">Upload a picture of your car</p>
        </div>
        {/* Car Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label>Brand</label>
            <input
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              type="text"
              placeholder="e.g, BMW, Mercedes, Audi..."
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Model</label>
            <input
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              type="text"
              placeholder="e.g. X5, E-Class, M4"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
              required
            />
          </div>
        </div>
        {/* Car Year & Price Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              type="number"
              placeholder="2025"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Daily Price ({currency})</label>
            <input
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              type="number"
              placeholder="100"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              value={car.category}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a category</option>
              <option value="sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>
        {/* Transmission, Fuel Type & Seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              value={car.transmission}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a category</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              onChange={(e) => setCar({ ...car, fuelType: e.target.value })}
              value={car.fuelType}
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a category</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              type="number"
              placeholder="5"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none w-full"
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houstan">Houstan</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>
        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            value={car.decription}
            onChange={(e) => setCar({ ...car, decription: e.target.value })}
            rows={4}
            placeholder="Describe your car, its condition, and any notable details..."
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
          />
        </div>
        <button className="px-2 py-2 bg-primary text-white cursor-pointer rounded-md flex items-center justify-center gap-2 w-max hover:bg-primary-dull">
          <img src={assets.tick_icon} alt="" />
          List Cars
        </button>
      </form>
    </div>
  );
};

export default AddCar;
