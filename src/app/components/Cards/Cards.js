'use client';

import Image from 'next/image';

const Card = ({ title, subtitle, imageSrc, stats, color }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full p-4">
      {/* Image Section */}
      <div className={`h-32 ${color} flex justify-center items-center rounded-t-lg`}>
        <Image src={imageSrc} alt={title} width={150} height={100} className="object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-gray-700 font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{subtitle}</p>
        <p className="text-xl font-bold mt-2">{stats}</p>
      </div>

      {/* Footer Section */}
      <div className="px-4 pb-4 text-gray-400 text-sm flex items-center">
        📅 Updated recently
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-full mx-auto">
      <Card
        title="Daily Sales"
        subtitle="55% increase in today sales."
        imageSrc="/completed-task.webp"
        stats="+55%"
        color="bg-green-500"
      />
      <Card
        title="Email Subscriptions"
        subtitle="Last Campaign Performance"
        imageSrc="/daily-sales.png"
        stats="800"
        color="bg-orange-500"
      />
      <Card
        title="Completed Tasks"
        subtitle="Last Campaign Performance"
        imageSrc="/email.jpg"
        stats="75"
        color="bg-gray-800"
      />
    </div>
  );
};

export default CardGrid;
