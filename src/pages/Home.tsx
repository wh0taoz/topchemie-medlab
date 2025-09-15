import React from 'react';
import { Button } from '@/components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a starter React application with TypeScript, Tailwind CSS, and shadcn/ui components.
        </p>
        <div className="flex gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;