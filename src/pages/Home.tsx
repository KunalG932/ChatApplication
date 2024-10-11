import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Virtual Study Group</h1>
      <p className="text-xl mb-8">Collaborate, learn, and succeed together</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          icon={<Users className="h-12 w-12 text-blue-500" />}
          title="Join Study Groups"
          description="Connect with peers and form study groups based on your interests and courses."
        />
        <FeatureCard
          icon={<BookOpen className="h-12 w-12 text-green-500" />}
          title="Share Resources"
          description="Upload and access study materials, notes, and helpful links within your groups."
        />
        <FeatureCard
          icon={<MessageCircle className="h-12 w-12 text-purple-500" />}
          title="Real-time Discussions"
          description="Engage in live chat discussions and collaborative problem-solving sessions."
        />
      </div>
      <Link
        to="/register"
        className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300"
      >
        Get Started
      </Link>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-center mb-4">{icon}</div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Home;
</boltArtifact>

Now, let's add the necessary dependencies to our project:

<boltArtifact id="add-dependencies" title="Add dependencies for Virtual Study Group">
<boltAction type="file" filePath="package.json">
{
  "name": "virtual-study-group",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.3",
    "axios": "^1.6.8"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}