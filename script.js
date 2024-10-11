gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Hero Animations
  const dotPulse = gsap.timeline({ repeat: -1 });
  const bubblePulse = gsap.timeline({ repeat: -1 });
  const crossSpin = gsap.timeline({ repeat: -1 });
  const mainTimeline = gsap.timeline();

  // BG Dot Pulse
  dotPulse.to(".bg-dot", {
    scale: 1.1,
    opacity: 0.25,
    duration: 3,
    ease: "linear"
  });
  dotPulse.to(".bg-dot", {
    scale: 0.9,
    opacity: 0.15,
    duration: 3,
    yoyo: true,
    repeat: -1,
    ease: "linear"
  });
  bubblePulse.to(".circle", { scale: 0.9, duration: 2 });
  bubblePulse.to(".circle", {
    scale: 1,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
  });

  // Hero Animations
  mainTimeline.to(".hero-circle", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(1)",
      start: "50% center",
      end: "bottom start",
      toggleActions: "play none none reverse",
      scrub: true,
      snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 3 }, 
            delay: 0.2
        }
    },
    bottom: -250,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 1
  });

  // About Animations
  mainTimeline.from(".about_heading", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(2)",
      start: "start center",
      end: "30% center",
      toggleActions: "play none none reverse",
      scrub: true
    },
    x: -50,
    opacity: 0,
    stagger: 0.1,
    ease: "bounce",
    duration: 1
  });
  mainTimeline.from(".about_bounce", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(2)",
      start: "start center",
      end: "40% center",
      toggleActions: "play none none reverse",
      scrub: true
    },
    scale: 0.2,
    opacity: 0,
    stagger: 0.1,
    ease: "elastic",
    duration: 2
  });

  // Skills Animations
  mainTimeline.from(".skill_items", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(3)",
      start: "top center",
      end: "25% 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    y: 100,
    scale: 0.7,
    opacity: 0,
    stagger: 0.5,
    duration: 1
  });

  mainTimeline.from(".skill_circle", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(3)",
      start: "10% center",
      end: "85% 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    scale: 0,
    top: 300,
    opacity: 0,
    ease: "elastic",
    duration: 2
  });

  // Project Animations
  crossSpin.to(".cross-spin", { rotate: 360, duration: 5, ease: "linear" });
  mainTimeline.from(".project_items", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(4)",
      start: "top center",
      end: "25% 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    y: 100,
    opacity: 0,
    stagger: 0.5,
    duration: 1
  });
  mainTimeline.from(".project_placeholder", {
    scrollTrigger: {
      trigger: ".project_container",
      start: "top center",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    height: 0,
    duration: 1,
    ease: "linear"
  });

  // Contact Animations
  mainTimeline.from(".contact_load", {
    scrollTrigger: {
      trigger: ".app-container:nth-child(5)",
      start: "top center",
      end: "30% 50%",
      toggleActions: "play none none reverse",
      scrub: true
    },
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "linear"
  });
});