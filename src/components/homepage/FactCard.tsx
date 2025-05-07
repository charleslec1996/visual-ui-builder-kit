import React from 'react';

interface FactCardProps {
  fact: {
    id: number;
    icon: string;
    value: string;
    label: string;
  };
}

const FactCard: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <div className="bg-[rgba(0,68,20,1)] flex min-w-60 items-center gap-2.5 flex-1 shrink basis-[0%] p-6 rounded-2xl max-md:px-5">
      <img
        src={fact.icon}
        className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
        alt={`${fact.label} icon`}
      />
      <div className="self-stretch flex flex-col items-stretch justify-center my-auto">
        <div className="text-base font-bold">
          {fact.value}
        </div>
        <div className="text-xs font-normal mt-2">
          {fact.label}
        </div>
      </div>
    </div>
  );
};

export default FactCard;
