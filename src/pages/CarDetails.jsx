import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { assets, dummyCarData } from "../assets/assets";
import Loader from "../components/Loader";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onclick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180 opacity-65" />
        Back to all cars
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-2">
          <img
            src={car.image}
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"
            alt=""
          />
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold gap-2">
                {car.brand}

                {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} . {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  icon: assets.users_icon,
                  text: `${car.seating_capacity} Seats`,
                },
                {
                  icon: assets.fuel_icon,
                  text: car.fuel_type,
                },
                {
                  icon: assets.car_icon,
                  text: car.transmission,
                },
                {
                  icon: assets.location_icon,
                  text: car.location,
                },
              ].map(({ icon, text }) => (
                <div
                  className="flex flex-col items-center bg-light p-4 rounded-lg"
                  key={text}
                >
                  <img className="h-5 mb-2" src={icon} alt="" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div>
              <h1 className="font-medium text-xl mb-3">Decription</h1>
              <p className="text-gray-500">{car.description}</p>
            </div>
            <div>
              <h1 className="font-medium text-xl mb-3">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2">
                {[
                  "360 Camera",
                  "Bluetooth",
                  "GPS",
                  "Heated Seats",
                  "Rear View Mirror",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-gray-500 mb-2"
                  >
                    <img src={assets.check_icon} className="h-4 mr-2" alt="" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-gray-500"
        >
          <p className="flex justify-between items-center text-2xl text-gray-800 font-semibold ">
            {currency}
            {car.pricePerDay}
            <span className="text-base font-normal text-gray-400">per day</span>
          </p>
          <hr className="border-borderColor my-6" />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              className="border border-borderColor rounded-lg px-3 py-2"
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              id="pickup-date"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              className="border border-borderColor rounded-lg px-3 py-2"
              type="date"
              required
              id="return-date"
            />
          </div>
          <button className="w-full py-3 bg-primary text-white rounded-xl hover:bg-primary-dull transition-all font-medium cursor-pointer">
            Book Now
          </button>
          <p className="text-sm text-center">
            No credit card required to reserve
          </p>
        </form>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CarDetails;
