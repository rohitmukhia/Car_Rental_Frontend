import React, { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../../assets/assets";
import Title from "../../components/Owner/Title";

const ManageBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);

  const statusClasses = {
    confirmed: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    completed: "bg-red-100 text-red-600",
  };

  const fetchBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  // ✅ calculate total cost
  const getTotal = (pricePerDay, pickupDate, returnDate) => {
    const days = Math.max(
      1,
      (new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24)
    );
    return pricePerDay * days;
  };

  // ✅ handle booking status updates
  const updateStatus = (index, newStatus) => {
    setBookings((prev) =>
      prev.map((booking, i) =>
        i === index ? { ...booking, status: newStatus } : booking
      )
    );
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 flex-1">
      <Title
        title="Manage Bookings"
        subTitle="Track all customer bookings, approve or cancel requests, and manage booking statuses"
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr className="border-t border-borderColor" key={index}>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={booking.car.image}
                    alt={`${booking.car.brand} ${booking.car.model}`}
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <p className="font-medium">
                    {booking.car.brand} {booking.car.model}
                  </p>
                </td>
                <td className="p-3 max-md:hidden">
                  {booking.pickupDate.split("T")[0]} To{" "}
                  {booking.returnDate.split("T")[0]}
                </td>
                <td className="p-3">
                  {currency}
                  {getTotal(
                    booking.car.pricePerDay,
                    booking.pickupDate,
                    booking.returnDate
                  )}
                </td>
                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-2 py-1 rounded-full text-sm font-medium ${
                      statusClasses[booking.status] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateStatus(index, "confirmed")}
                      className="px-3 py-1 text-xs rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(index, "completed")}
                      className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      Cancel
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
