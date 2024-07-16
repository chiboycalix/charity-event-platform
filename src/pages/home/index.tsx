import React from 'react';
import { Typography } from 'antd';
import EventForm from '../../components/eventForm';

const { Title } = Typography;

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <Title>Welcome to Charity Event Platform</Title>
      <p className="mt-4 text-lg">
        Empowering non-profits to create and manage impactful events.
      </p>
      <div className='w-[30%] mx-auto'>
        <EventForm />
      </div>
    </div>
  );
};
export default HomePage