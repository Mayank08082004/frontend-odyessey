import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar'; // Ensure you have react-calendar installed
import { FaBell, FaStethoscope, FaPills } from 'react-icons/fa'; // Icons for medical reminders
import 'react-calendar/dist/Calendar.css'; // Default calendar styling

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showNewEventDialog, setShowNewEventDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({
    name: '',
    date: '',
    type: 'checkup',
    description: ''
  });

  useEffect(() => {
    const upcomingEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      const today = new Date();
      return eventDate >= today && eventDate <= new Date(today.setDate(today.getDate() + 7));
    });

    if (upcomingEvents.length > 0) {
      alert(`You have ${upcomingEvents.length} upcoming medical events this week!`);
    }
  }, [events]);

  const handleCreateEvent = () => {
    if (newEvent.name && newEvent.date) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
      setNewEvent({ name: '', date: '', type: 'checkup', description: '' });
      setShowNewEventDialog(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Medical Calendar</h1>
      <div className="p-6 bg-white rounded-2xl shadow-lg border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Upcoming Appointments & Reminders</h2>
          <button
            onClick={() => setShowNewEventDialog(true)}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            + Add Reminder
          </button>
        </div>

        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="rounded-lg border shadow-md w-full"
        />

        <h3 className="font-semibold mt-6 text-lg text-gray-700">Upcoming Events</h3>
        <div className="space-y-4 mt-4">
          {events.length > 0 ? events.map(event => (
            <div key={event.id} className="p-4 bg-gray-100 rounded-lg shadow-sm border flex justify-between items-center">
              <div className="flex items-center gap-3">
                {event.type === 'checkup' ? <FaStethoscope className="text-blue-500" /> : <FaPills className="text-green-500" />}
                <div>
                  <h4 className="font-semibold text-gray-800">{event.name}</h4>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              </div>
              <div className="text-gray-500 text-sm">{event.date}</div>
            </div>
          )) : <p className="text-gray-500">No upcoming events.</p>}
        </div>
      </div>

      {showNewEventDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="font-semibold text-lg mb-4 text-gray-700">Add New Reminder</h3>
            <input
              type="text"
              placeholder="Event Name"
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              className="border rounded-lg w-full p-2 mb-3 focus:ring focus:ring-blue-300"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              className="border rounded-lg w-full p-2 mb-3 focus:ring focus:ring-blue-300"
            />
            <select
              value={newEvent.type}
              onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
              className="border rounded-lg w-full p-2 mb-3 focus:ring focus:ring-blue-300"
            >
              <option value="checkup">Medical Checkup</option>
              <option value="prescription">Prescription Reminder</option>
            </select>
            <textarea
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="border rounded-lg w-full p-2 mb-3 focus:ring focus:ring-blue-300"
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleCreateEvent}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Create Reminder
              </button>
              <button
                onClick={() => setShowNewEventDialog(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
