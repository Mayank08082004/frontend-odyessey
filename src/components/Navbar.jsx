// src/components/Navbar.jsx
import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e141b]">
        <Logo />
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
          MediMitra
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/calendar">Medical Calendar</NavLink>
          <NavLink to="/fitness-tracking">Fitness Tracking</NavLink>
          <NavLink to="/hospital-connect">Hospital Connect</NavLink>
          <NavLink to="checking-booking">Book a Appointment</NavLink>
        </nav>
      </div>
    </header>
  );
}

const Logo = () => (
  <div className="size-4">
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_6_319)">
        <path
          d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_319">
          <rect width={48} height={48} fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-[#0e141b] text-sm font-medium leading-normal hover:text-blue-500"
  >
    {children}
  </Link>
);
