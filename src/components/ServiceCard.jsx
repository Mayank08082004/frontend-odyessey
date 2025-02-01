import React from "react";

export const ServiceCard = ({ imageUrl, title, description }) => (
  <div className="flex flex-col gap-3 pb-3">
    <div
      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div>
      <p className="text-[#0e141b] text-base font-medium leading-normal">{title}</p>
      <p className="text-[#4e7397] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
);
