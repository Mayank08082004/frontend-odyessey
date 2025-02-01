// src/services/api.js

// Dummy data for appointments
const dummyAppointments = [
  {
    id: 1,
    title: 'Annual Physical',
    description: 'Dr. John Smith, 123 Main St.',
    time: '2023-10-25T09:00:00',
    icon: 'FirstAid',
  },
  {
    id: 2,
    title: 'Dentist Appointment',
    description: 'Dr. Sarah Lee, 456 Oak Ave.',
    time: '2023-10-26T10:00:00',
    icon: 'Tooth',
  },
  {
    id: 3,
    title: 'Eye Exam',
    description: 'Dr. Emily Chen, 789 Elm Blvd.',
    time: '2023-10-27T11:00:00',
    icon: 'Eye',
  },
  {
    id: 4,
    title: 'Prescription Reminder',
    description: 'Take 100mg of Lipitor',
    time: '2023-10-26T18:00:00',
    icon: 'Pill',
  },
];

// Simulate a delay for API calls
const simulateDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Fetch all appointments
export const fetchAppointments = async () => {
  await simulateDelay(1000); // Simulate network delay
  return dummyAppointments;
};

// Add a new appointment
export const addAppointment = async (appointment) => {
  await simulateDelay(1000); // Simulate network delay
  const newAppointment = {
    id: dummyAppointments.length + 1,
    ...appointment,
  };
  dummyAppointments.push(newAppointment);
  return newAppointment;
};

// Delete an appointment by ID
export const deleteAppointment = async (id) => {
  await simulateDelay(1000); // Simulate network delay
  const index = dummyAppointments.findIndex((app) => app.id === id);
  if (index === -1) {
    throw new Error('Appointment not found');
  }
  dummyAppointments.splice(index, 1);
  return { id };
};

// Update an appointment by ID
export const updateAppointment = async (id, updatedData) => {
  await simulateDelay(1000); // Simulate network delay
  const index = dummyAppointments.findIndex((app) => app.id === id);
  if (index === -1) {
    throw new Error('Appointment not found');
  }
  dummyAppointments[index] = { ...dummyAppointments[index], ...updatedData };
  return dummyAppointments[index];
};
