import React, { useState } from "react";
import { MapPin, Calendar, Users, Star, ArrowLeft } from "lucide-react";

export default function UnplanApp() {
  const [screen, setScreen] = useState("home");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);

  const places = [
    {
      id: 1,
      name: "Coorg Adventure Trek",
      location: "Coorg, Karnataka",
      rating: 4.7,
      price: 4999,
      image: "https://images.unsplash.com/photo-1601968177507-a5e8f1f57c0e",
      description:
        "A two-day trek through the coffee hills of Coorg with camping, bonfire, and waterfall visit.",
    },
    {
      id: 2,
      name: "Gokarna Beach Camp",
      location: "Gokarna, Karnataka",
      rating: 4.8,
      price: 3499,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description:
        "Experience beachside camping, live music, and stargazing with a friendly group of travelers.",
    },
    {
      id: 3,
      name: "Hampi Heritage Walk",
      location: "Hampi, Karnataka",
      rating: 4.6,
      price: 2999,
      image: "https://images.unsplash.com/photo-1622396481530-699b98a3c68b",
      description:
        "A guided heritage walk through the ruins of Hampi with sunset hike and local food exploration.",
    },
  ];

  const events = [
    {
      id: 1,
      name: "Sunset Kayaking Meetup",
      date: "Nov 20, 2025",
      location: "Ulsoor Lake, Bangalore",
      attendees: 12,
      price: 999,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    {
      id: 2,
      name: "Bonfire & Music Night",
      date: "Nov 23, 2025",
      location: "Nandi Hills, Bangalore",
      attendees: 20,
      price: 1499,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  const handleBookNow = (place) => {
    setSelectedPlace(place);
    setScreen("booking");
  };

  const handleJoinEvent = (event) => {
    setSelectedEvent(event);
    setScreen("booking");
  };

  const handleConfirmBooking = () => {
    setScreen("success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      {screen === "home" && (
        <>
          <h1 className="text-3xl font-bold mb-6 text-blue-700">
            Discover Unplanned Experiences 🌍
          </h1>
          <h2 className="text-xl font-semibold mb-3">Trending Experiences</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 cursor-pointer"
                onClick={() => {
                  setSelectedPlace(place);
                  setScreen("place-detail");
                }}
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-lg">{place.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin size={14} className="mr-1" /> {place.location}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-blue-600 font-semibold">₹{place.price}</span>
                  <span className="flex items-center text-yellow-500 text-sm">
                    <Star size={14} className="mr-1" /> {place.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition p-3 cursor-pointer"
                onClick={() => {
                  setSelectedEvent(event);
                  setScreen("event-detail");
                }}
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-36 object-cover rounded-xl mb-3"
                />
                <h3 className="font-bold text-lg">{event.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <Calendar size={14} className="mr-1" /> {event.date}
                </div>
                <div className="flex items-center justify-between mt-2 text-sm">
                  <span className="flex items-center text-gray-500">
                    <Users size={14} className="mr-1" /> {event.attendees} joined
                  </span>
                  <span className="text-blue-600 font-semibold">₹{event.price}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {screen === "place-detail" && selectedPlace && (
        <div>
          <button
            className="flex items-center mb-4 text-blue-600"
            onClick={() => setScreen("home")}
          >
            <ArrowLeft className="mr-1" size={18} /> Back
          </button>
          <img
            src={selectedPlace.image}
            alt={selectedPlace.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedPlace.name}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" /> {selectedPlace.location}
          </div>
          <p className="text-gray-700 mb-4">{selectedPlace.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-700 font-semibold text-lg">
              ₹{selectedPlace.price}
            </span>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
              onClick={() => handleBookNow(selectedPlace)}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      {screen === "event-detail" && selectedEvent && (
        <div>
          <button
            className="flex items-center mb-4 text-blue-600"
            onClick={() => setScreen("home")}
          >
            <ArrowLeft className="mr-1" size={18} /> Back
          </button>
          <img
            src={selectedEvent.image}
            alt={selectedEvent.name}
            className="w-full h-64 object-cover rounded-xl mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
          <div className="flex items-center text-gray-600 mb-2">
            <Calendar size={16} className="mr-1" /> {selectedEvent.date}
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={16} className="mr-1" /> {selectedEvent.location}
          </div>
          <div className="flex items-center text-gray-600 mb-4">
            <Users size={16} className="mr-1" /> {selectedEvent.attendees} already joined
          </div>
          <div className="flex justify-between items-center">
            <span className="text-blue-700 font-semibold text-lg">
              ₹{selectedEvent.price}
            </span>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
              onClick={() => handleJoinEvent(selectedEvent)}
            >
              Join Now
            </button>
          </div>
        </div>
      )}

      {screen === "booking" && (
        <div>
          <button
            className="flex items-center mb-4 text-blue-600"
            onClick={() => setScreen("home")}
          >
            <ArrowLeft className="mr-1" size={18} /> Back
          </button>
          <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
          <p className="text-gray-700 mb-2">
            {selectedPlace
              ? selectedPlace.name
              : selectedEvent
              ? selectedEvent.name
              : ""}
          </p>
          <div className="flex items-center mb-4">
            <button
              className="bg-blue-100 px-3 py-1 rounded-l-xl"
              onClick={() => setTicketCount(ticketCount > 1 ? ticketCount - 1 : 1)}
            >
              -
            </button>
            <span className="px-4">{ticketCount}</span>
            <button
              className="bg-blue-100 px-3 py-1 rounded-r-xl"
              onClick={() => setTicketCount(ticketCount + 1)}
            >
              +
            </button>
          </div>
          <div className="text-lg font-semibold mb-4">
            Total: ₹
            {(selectedPlace
              ? selectedPlace.price
              : selectedEvent
              ? selectedEvent.price
              : 0) * ticketCount}
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      )}

      {screen === "success" && (
        <div className="text-center mt-24">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Booking Confirmed!
          </h2>
          <p className="text-gray-700 mb-6">
            You’ve successfully joined the experience. Get ready for an unforgettable trip!
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow"
            onClick={() => {
              setSelectedPlace(null);
              setSelectedEvent(null);
              setTicketCount(1);
              setScreen("home");
            }}
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
