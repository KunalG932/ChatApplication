import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Calendar, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  // Mock data for demonstration
  const upcomingSessions = [
    { id: 1, title: 'Math Study Session', date: '2024-03-20', time: '15:00' },
    { id: 2, title: 'Physics Group Discussion', date: '2024-03-22', time: '14:30' },
  ];

  const recentActivities = [
    { id: 1, type: 'message', content: 'New message in Math Group', time: '2 hours ago' },
    { id: 2, type: 'resource', content: 'New study guide uploaded', time: '1 day ago' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Calendar className="h-6 w-6 mr-2 text-blue-500" />
            Upcoming Study Sessions
          </h2>
          <ul>
            {upcomingSessions.map((session) => (
              <li key={session.id} className="mb-3">
                <p className="font-medium">{session.title}</p>
                <p className="text-sm text-gray-600">
                  {session.date} at {session.time}
                </p>
              </li>
            ))}
          </ul>
          <Link
            to="/study-groups"
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
          >
            View all study groups
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="h-6 w-6 mr-2 text-green-500" />
            Recent Activities
          </h2>
          <ul>
            {recentActivities.map((activity) => (
              <li key={activity.id} className="mb-3">
                <p>{activity.content}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickActionCard
          icon={<Users className="h-8 w-8 text-blue-500" />}
          title="Join a Study Group"
          link="/study-groups"
        />
        <QuickActionCard
          icon={<BookOpen className="h-8 w-8 text-green-500" />}
          title="Browse Resources"
          link="/resources"
        />
        <QuickActionCard
          icon={<MessageCircle className="h-8 w-8 text-purple-500" />}
          title="Start a Discussion"
          link="/discussions"
        />
      </div>
    </div>
  );
};

const QuickActionCard = ({ icon, title, link }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-lg font-semibold ml-3">{title}</h3>
    </div>
    <p className="text-blue-500 hover:text-blue-700">Get started →</p>
  </Link>
);

export default Dashboard;