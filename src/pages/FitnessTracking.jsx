import React, { useState, useEffect } from 'react';

const FitnessTracking = () => {
  const [user, setUser] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    // Fetch user and plan data from an API or local storage
    const fetchUserData = async () => {
      // Simulated data fetching
      const userData = { name: 'user' };
      const planData = { name: 'Strength Training', workoutsPerWeek: 3, completedWorkouts: 4, progress: 60 };
      setUser(userData);
      setCurrentPlan(planData);
    };
    fetchUserData();
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <title>Galileo Design</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
      <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Welcome, {user ? user.name : 'User'}
                </p>
              </div>
              <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Your current plan</h3>
              {currentPlan && (
                <div className="p-4">
                  <div className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] shadow-[0_0_4px_rgba(0,0,0,0.1)]"
                    style={{
                      backgroundImage:
                        'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://cdn.usegalileo.ai/sdxl10/c405a0a5-0691-4e14-a425-2f17e0b3137b.png")'
                    }}>
                    <div className="flex w-full items-end justify-between gap-4 p-4">
                      <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                        <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                          {currentPlan.name}
                        </p>
                        <p className="text-white text-base font-medium leading-normal">
                          {currentPlan.workoutsPerWeek} workouts per week
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 p-4">
                    <div className="flex gap-6 justify-between"><p className="text-[#111518] text-base font-medium leading-normal">Week 2</p></div>
                    <div className="rounded bg-[#dbe1e6]"><div className="h-2 rounded bg-[#111518]" style={{ width: `${currentPlan.progress}%` }}></div></div>
                    <p className="text-[#60778a] text-sm font-normal leading-normal">{currentPlan.completedWorkouts} workouts completed</p>
                  </div>
                </div>
              )}
              <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">You're on track! Keep it up.</p>
              <h3 className="text-[#111518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Start a new plan</h3>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                {["3cf6ac4c-4651-4269-858a-669067870651", "a632d375-3572-4e02-a149-d3d08fc0d8a7", "cd24d6be-42df-4892-a866-9e96d3a60be4", "2e1fde09-ff70-4a80-b654-640d6ab4c184"].map((img, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div
                      className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                      style={{ backgroundImage: `url("https://cdn.usegalileo.ai/sdxl10/${img}.png")` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FitnessTracking;
