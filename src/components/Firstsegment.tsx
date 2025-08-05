import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
const Firstsegment = () => {
  useGSAP(() => {
      gsap.fromTo('#h2', {
        y: 100,
        opacity: 0,
      },{
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#vertical-section",
          start: "top center",
          scrub: true,
          toggleActions: "play none none reverse"
        }
      });

      gsap.fromTo('#tdiv', {
        width: 0,
        opacity: 0,
      },{
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inout",
        delay: 0.3,
        scrollTrigger: {
          trigger: "#vertical-section",
          start: "top center",
          scrub: true,
          toggleActions: "play none none reverse"
        }
      });
  }, []);

  return (
    <main className="overflow-hidden relative py-20 bg-grey/40" id="vertical-section" >
     <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4" id="h2">featured product</h2>
     </div>
      <div className="w-0 h-1 bg-gradient-to-r from-[#ee9453] to-[#e99b63] mx-auto opacity-0"id="tdiv">
  </div>
  {/* slide scroll center */}
  <div className="overflow-hidden">
     <div className="">

     </div>
  </div>
    </main>
  );
};

export default Firstsegment;
