
import React from 'react';
import { Link } from 'react-router-dom';

interface TripCardProps {
  trip: {
    id: number | string;
    image: string;
    className: string;
    name: string;
    price: string;
    duration: string;
    departureDate: string;
    durationIcon: string;
    dateIcon: string;
  };
}

const TripCard: React.FC<TripCardProps> = ({
  trip
}) => {
  return (
    <Link to={`/trip/${trip.id}`} className="block">
      <article className="bg-white self-stretch flex min-w-60 min-h-[682px] flex-col overflow-hidden items-stretch justify-center grow shrink w-[307px] my-auto p-6 rounded-[32px] max-md:px-5 max-w-[384px] transition-transform hover:scale-105">
        <div className="max-w-full w-[336px] rounded-[0px_0px_0px_0px]">
          <img src={trip.image} className="aspect-[0.8] object-contain w-full rounded-[0px_0px_0px_0px]" alt={trip.name} />
        </div>
        <div className="w-[279px] max-w-full text-black tracking-[0.5px] mt-4">
          <div className="flex w-full flex-col items-stretch text-base font-bold justify-center">
            <div className="bg-[rgba(138,244,169,1)] gap-3 p-2 rounded-[120px] text-center w-fit">
              {trip.className}
            </div>
            <h3 className="text-2xl leading-8 mt-3">
              {trip.name}
            </h3>
            <div className="text-[rgba(131,93,254,1)] font-semibold text-left mt-3">
              <span className="font-bold text-black">
                {trip.price}{" "}
              </span>
              <span className="font-normal text-[rgba(124,119,119,1)]">
                /Passenger
              </span>
            </div>
          </div>
          <div className="flex w-full gap-8 text-right mt-4">
            <div className="flex items-center gap-2">
              <img src={trip.durationIcon} className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto" alt="Duration icon" />
              <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
                <div className="text-left xs font-normal">
                  Duration
                </div>
                <div className="text-left sm font-semibold mt-2 w-24">
                  {trip.duration}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <img src={trip.dateIcon} className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto" alt="Calendar icon" />
              <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
                <div className="text-left xs font-normal">
                  Depart
                </div>
                <div className="text-sm font-semibold mt-2">
                  {trip.departureDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default TripCard;
