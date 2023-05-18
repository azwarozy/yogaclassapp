import React, { useState } from 'react';

const YogaScheduler = () => {
  const [schedule, setSchedule] = useState([
    { day: 'Monday', time: '8:00 AM - 9:00 AM', trainer: 'Sarah', available: true },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', trainer: 'John', available: true },
    { day: 'Monday', time: '4:00 PM - 5:00 PM', trainer: 'Emily', available: false },
    // Add more schedule entries for other days
  ]);

  const handleJoinClass = (index) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].available = false;
    setSchedule(updatedSchedule);
  };

  return (
    <div>
      <h2>Yoga Scheduler</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Trainer</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
              <td>{entry.trainer}</td>
              <td>{entry.available ? 'Available' : 'Booked'}</td>
              <td>
                {entry.available && (
                  <button onClick={() => handleJoinClass(index)}>Join Class</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YogaScheduler;