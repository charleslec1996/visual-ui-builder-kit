import React from 'react';
import TripCard from './TripCard';
import FactCard from './FactCard';

const UpcomingTrips: React.FC = () => {
  const trips = [
    {
      id: 1,
      image: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/90a2f3d0c9e16e588b7b61cef8436cc02862f815?placeholderIfAbsent=true",
      className: "Luxury Class",
      name: "Holy Journey to Makkah",
      price: "Rp. 45.000.000",
      duration: "14 Days",
      departureDate: "22-Jan-2024",
      durationIcon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/316d26e04a09edcc6c7c340a8b721dcfc34b64e4?placeholderIfAbsent=true",
      dateIcon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/2fa361a72fb71f69ca7750b4e62dc4ada14117b0?placeholderIfAbsent=true"
    },
    {
      id: 2,
      image: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/ac686f226198b0c3f7d273bce9a73ce18dadb3dc?placeholderIfAbsent=true",
      className: "Luxury Class",
      name: "Spiritual Odyssey: Makkah and Turkey",
      price: "Rp. 25.000.000",
      duration: "20 Days",
      departureDate: "1-Jan-2024",
      durationIcon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/e9ba59cddade2b1c3b2467954c087b6486e6d770?placeholderIfAbsent=true",
      dateIcon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/61c05f006d505a8c146644baf69aa1bd8bfaa64a?placeholderIfAbsent=true"
    }
  ];

  const facts = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/ca1bb22f1e1f24d06df8cd61616c401efd94e496?placeholderIfAbsent=true",
      value: "50K User",
      label: "Total Passenger"
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/5dcb5fbc807769dcd1fd76eede3533866a2433f6?placeholderIfAbsent=true",
      value: "5k+ Trip",
      label: "All Around World"
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/a8f3153d7419b3fc1fda044a0fdda02398e3ba6b?placeholderIfAbsent=true",
      value: "11 Year",
      label: "Experience"
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/e09383f57571488194f4ca36ac0c1fc4/2b36c94b2d6c1b862472cfdd5aacd0cfc4db0d2d?placeholderIfAbsent=true",
      value: "Tour Travel",
      label: "Experienced Guide"
    }
  ];

  return (
    <section className="flex w-full gap-4 flex-wrap pl-[120px] pr-[25px] pt-[120px] pb-[60px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="min-w-60 tracking-[0.5px] grow shrink w-[396px] max-md:max-w-full">
        <h2 className="text-black text-5xl font-bold leading-[72px] max-md:max-w-full max-md:text-[40px] max-md:leading-[67px]">
          Upcoming Trip
          <br />
          Added Every Month
        </h2>
        <p className="text-[rgba(74,74,74,1)] text-base font-normal leading-8 mt-[26px] max-md:max-w-full">
          Check out all the cool new trip options we have each month with
          fresh dates, destinations, and personalized packages!
        </p>
        <div className="w-full max-w-[495px] text-white mt-[26px] max-md:max-w-full">
          <div className="flex w-full gap-3 flex-wrap max-md:max-w-full">
            <FactCard fact={facts[0]} />
            <FactCard fact={facts[1]} />
          </div>
          <div className="flex w-full gap-3 flex-wrap mt-3 max-md:max-w-full">
            <FactCard fact={facts[2]} />
            <FactCard fact={facts[3]} />
          </div>
        </div>
      </div>
      <div className="flex min-w-60 items-center gap-4 flex-wrap grow shrink w-[685px] max-md:max-w-full">
        {trips.map(trip => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
};

export default UpcomingTrips;
