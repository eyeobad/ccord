import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/laptop.jpg";

const projectImages = [
  { id: 1, title: "3D Gaming Project", image: image1 },
  { id: 2, title: "Virtual Reality Experience", image: image2 },
  { id: 3, title: "Augmented Reality App", image: image3 },
];

gsap.registerPlugin(ScrollTrigger);

const Firstsegment = () => {
  // Track which images are loaded
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(projectImages.length).fill(false));

  // Preload images and update state when loaded
  useEffect(() => {
    projectImages.forEach(({ image }, index) => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
    });
  }, []);

  useGSAP(() => {
    // ... your GSAP animation code unchanged
    gsap.fromTo(
      "#h2",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 0.5,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#vertical-section",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      "#tdiv",
      { width: 0, opacity: 0 },
      {
        width: "60%",
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.2,
        scrollTrigger: {
          trigger: "#vertical-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#horizontal-scroll",
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => {
          const el = document.querySelector("#horizontal-scroll") as HTMLElement | null;
          return el ? `+=${el.scrollWidth - window.innerWidth}` : "+=0";
        },
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { min: 0.4, max: 0.6 },
          ease: "power2.out",
        },
        invalidateOnRefresh: true,
      },
    });

    gsap.utils.toArray<HTMLElement>(".panel").forEach((panel) => {
      const image = panel.querySelector(".project-image") as HTMLElement | null;
      const imageTitle = panel.querySelector(".project-title") as HTMLElement | null;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel as gsap.DOMTarget,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: 0.5,
        },
      });

      if (image) {
        tl.fromTo(
          image,
          { scale: 0.8, rotate: -10, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 0.5 }
        );
      }

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30, opacity: 0 }, { y: -100, opacity: 1, duration: 0.3 }, 0.2);
      }
    });
  }, []);

  return (
    <main className="overflow-hidden relative py-20 bg-black text-white" id="vertical-section">
      {/* Heading & line */}
      <div className="container mx-auto px-4 mb-16 relative z-10 text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          id="h2"
        >
          Featured Products
        </h2>
        <div
          className="h-1 bg-gradient-to-r from-[#ee9453] to-[#e99b63] mx-auto"
          id="tdiv"
          style={{ width: "0%", opacity: 0 }}
        ></div>
      </div>

      {/* Horizontal scroll */}
      <div id="horizontal-scroll" className="flex w-[300vw]">
        {projectImages.map((project, index) => (
          <div
            key={project.id}
            className="panel w-screen relative flex items-center justify-center"
          >
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
              {/* Skeleton placeholder */}
              {!loadedImages[index] && (
                <div className="w-full max-w-4xl h-64 rounded-2xl bg-gray-700 animate-pulse shadow-2xl" />
              )}
              {/* Actual image */}
              {loadedImages[index] && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full max-w-4xl h-auto rounded-2xl object-cover shadow-2xl"
                  style={{ transform: "translateZ(0)", imageRendering: "auto" }}
                />
              )}
              <h3 className="project-title flex items-center gap-3 md:text-3xl text-xl font-bold text-white mt-8 z-10 cursor-pointer hover:text-gray-300 transition-colors duration-300">
                {project.title} <SlShareAlt />
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Firstsegment;
