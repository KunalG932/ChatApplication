import React, { useState } from 'react';
import { Users, Search, Plus } from 'lucide-react';

const StudyGroups = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const studyGroups = [
    { id: 1, name: 'Math Study Group', members: 15, subject: 'Mathematics' },
    { id: 2, name: 'Physics Discussion', members: 10, subject: 'Physics' },
    { id: 3, name: 'Literature Club', members: 20, subject: 'English Literature' },
    { id: 4, name: 'Computer Science Projects', members: 12, subject: 'Computer Science' },
  ];

  const filteredGroups = studyGroups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Study Groups</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Create Group
        </button>
      </div>
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search study groups..."
          className="w-full px-4 py-2 border rounded-lg pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGroups.map((group) => (
          <StudyGroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

const StudyGroupCard = ({ group }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
    <p className="text-gray-600 mb-4">{group.subject}</p>
    <div className="flex items-center text-sm text-gray-500">
      <Users className="h-4 w-4 mr-1" />
      <span>{group.members} members</span>
    </div>
    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Join Group
    </button>
  </div>
);

export default StudyGroups;