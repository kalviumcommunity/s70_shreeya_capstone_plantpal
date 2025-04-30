import React from "react";

const MyProfile = () => {
  const user = {
    name: "Arborista 🌿",
    profilePic: "https://i.pravatar.cc/150?img=12",
    stats: {
      totalPlants: 6,
      activeReminders: 3,
      lastLogin: "April 25, 2025",
    },
    reminders: [
      { plant: "Aloe Vera", task: "Water", time: "Today - 9:00 AM" },
      { plant: "Peace Lily", task: "Fertilize", time: "Tomorrow - 8:00 AM" },
      { plant: "Spider Plant", task: "Rotate", time: "Friday - 10:00 AM" },
    ],
    activity: [
      "Added a new plant: Fiddle Leaf Fig",
      "Completed reminder: Water Snake Plant",
      "Updated profile bio",
    ],
  };

  return (
    <div className="min-h-screen bg-green-50 py-10 px-6">
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4 shadow"
          />
          <h2 className="text-xl font-bold text-green-800">{user.name}</h2>
          <div className="mt-4 space-y-2 text-green-700">
            <p>🪴 Plants: {user.stats.totalPlants}</p>
            <p>⏰ Reminders: {user.stats.activeReminders}</p>
            <p>🕓 Last Login: {user.stats.lastLogin}</p>
          </div>
          <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Edit Profile
          </button>
        </div>

        {/* Reminders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Upcoming Reminders</h3>
          <ul className="space-y-3">
            {user.reminders.map((reminder, idx) => (
              <li
                key={idx}
                className="border border-green-100 rounded px-4 py-2 text-green-700 flex justify-between items-center"
              >
                <div>
                  <strong>{reminder.plant}</strong> – {reminder.task}
                </div>
                <span className="text-sm italic">{reminder.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Recent Activity</h3>
          <ul className="list-disc pl-6 space-y-2 text-green-700">
            {user.activity.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
