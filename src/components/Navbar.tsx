import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Virtual Study Group</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/study-groups" className="flex items-center hover:bg-blue-700 px-3 py-2 rounded">
              <Users className="h-5 w-5 mr-1" />
              Study Groups
            </Link>
            <Link to="/profile" className="flex items-center hover:bg-blue-700 px-3 py-2 rounded">
              <User className="h-5 w-5 mr-1" />
              Profile
            </Link>
            <Link to="/login" className="bg-white text-blue-600 hover:bg-blue-100 px-4 py-2 rounded">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;