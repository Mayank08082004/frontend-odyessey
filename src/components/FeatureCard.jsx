export const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
    <div className="text-[#0e141b]" dangerouslySetInnerHTML={{ __html: icon }} />
    <div className="flex flex-col gap-1">
      <h2 className="text-[#0e141b] text-base font-bold leading-tight">{title}</h2>
      <p className="text-[#4e7397] text-sm font-normal leading-normal">{description}</p>
    </div>
  </div>
);
