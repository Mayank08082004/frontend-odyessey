import React from "react";
import { HeroSection } from '../components/HeroSection';
import { FeatureCard } from '../components/FeatureCard';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';

const LandingPage = () => {
  const features = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"/></svg>',
      title: "24/7 Chat",
      description: "Get health advice from a doctor or nurse anytime, day or night"
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" /></svg>',
      title: "Same-day Appointments",
      description: "Book same-day appointments with top-rated specialists"
    },{
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" /></svg>',
      title: "Instant Hospital Connect",
      description: "Find nearby doctors, labs, pharmacies, and more"
    }
  ];

  const services = [
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/4afc6f62-7b86-4983-8944-baf7d75a607f.png",
      title: "Primary Care",
      description: "Get personalized care for everyday health needs"
    },
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/82dddae9-4c68-4bec-a8df-e1f0b0619e7a.png",
      title: "Dermatology",
      description: "Find relief for acne, eczema, hair loss, and more"
    },
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/baf52565-9f84-44ab-b1ca-92cec4d43da8.png",
      title: "Psychiatry",
      description: "Talk to a psychiatrist about mental health concerns"
    },
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/ba7c841d-dc44-416f-8076-c91fe71e8d1e.png",
      title: "Nutrition",
      description: "Get guidance on weight management, food allergies, and more"
    },
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/ca70b14e-6f3c-41d4-940b-22e55773dbe6.png",
      title: "Pregnancy & Postpartum",
      description: "Prepare for motherhood, recover from childbirth, and more"
    },
    {
      imageUrl: "https://cdn.usegalileo.ai/sdxl10/7eee8417-77a4-467b-806f-f24ade81dea5.png",
      title: "Pediatrics",
      description: "Connect with a pediatrician for children's health questions"
    },{
      imageUrl:"https://cdn.usegalileo.ai/sdxl10/815c722a-42be-41a1-be45-367508234f85.png",
      title:" Sexual Health",
      discripition:"Address sexual health issues like erectile dysfunction, STIs,and more"
    },{
      imageUrl:"https://cdn.usegalileo.ai/sdxl10/9707c62a-1769-4e5a-a70c-d403a59ceb6c.png",
      title:" Therapy",
      discripition:"Get guidance on weight management, food allergies, and more"
    }
  ];

  return (
    <div className="relative flex size-full min-h-screen w-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Epilogue, "Noto Sans", sans-serif' }}>

      <div className="layout-container flex h-full w-full grow flex-col">
        <div className="px-10 md:px-20 lg:px-32 xl:px-40 flex flex-1 justify-center py-5 w-full">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />

            {/* Features Section */}
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <SectionHeader
                title="Get personalized care on your terms"
                description="We make it easy to find the right care, right when you need it. Our team of doctors, nurses, and health experts are here to help you feel your best."
                buttonText="Explore All Features"
              />
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>
            </div>

            {/* Popular Services Section */}
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Popular Services
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
