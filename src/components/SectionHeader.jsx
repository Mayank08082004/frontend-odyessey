// src/components/SectionHeader.jsx
import React from "react";
import { Button } from "./Button";
export const SectionHeader = ({ title, description, buttonText }) => (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          {title}
        </h1>
        <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">
          {description}
        </p>
      </div>
      <Button variant="primary">{buttonText}</Button>
    </div>
  );
