// src/components/HeroSection.jsx
import React from "react";
import { Button } from "./Button";
export const HeroSection = () => {
    return (
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c0da608a-c4d8-496d-b6b3-5b83cc9a591b.png")'
            }}
          >
            <HeroContent />
            <SearchBar />
          </div>
        </div>
      </div>
    );
  };

  const HeroContent = () => (
    <div className="flex flex-col gap-2 text-left">
      <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
        Meet Your MediMitra
      </h1>
      <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
        Your personal guide to better health. We help you find the right care, right when you need it.
      </h2>
    </div>
  );

  const SearchBar = () => (
  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
    <div className="flex w-full flex-1 items-center rounded-xl h-full bg-slate-50 border border-[#d0dbe7]">
      {/* Search Icon */}
      <div className="pl-3 pr-2">
        <SearchIcon className="text-[#4e7397]" />
      </div>

      {/* Input Field */}
      <input
        placeholder="Search for doctors, labs, pharmacies, and more"
        className="flex-1 w-full min-w-0 h-full bg-transparent text-[#0e141b] placeholder:text-[#4e7397] focus:outline-none focus:ring-0 border-none text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
        defaultValue=""
      />

      {/* Search Button */}
      <Button
        variant="primary"
        className="rounded-r-xl h-full px-4"
      >
        Start Searching
      </Button>
    </div>
  </label>
);

  const SearchIcon = () => (
    <div className="text-[#4e7397] flex border border-[#d0dbe7] bg-slate-50 items-center justify-center pl-[15px] rounded-l-xl border-r-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
        height="20px"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
      </svg>
    </div>
  );
