// public/scripts/animations.js
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Animações de Entrada ao Scroll
  const fadeInElements = gsap.utils.toArray(".fade-in");
  if (fadeInElements.length) {
    fadeInElements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: -75,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  const fadeUpElements = gsap.utils.toArray(".fade-up");
  if (fadeUpElements.length) {
    fadeUpElements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 75,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  const leftToRightElements = gsap.utils.toArray(".left-to-right");
  if (leftToRightElements.length) {
    leftToRightElements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -75,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  const rightToLeftElements = gsap.utils.toArray(".right-to-left");
  if (rightToLeftElements.length) {
    rightToLeftElements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: 75,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  const zoomInElements = gsap.utils.toArray(".zoom-in");
  if (zoomInElements.length) {
    zoomInElements.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  // Animação de Big Numbers - informa dentro do data-counter o valor final do contador
  const counters = document.querySelectorAll("[data-counter]");
  if (counters.length) {
    counters.forEach((counter) => {
      const finalValue = parseInt(counter.dataset.counter, 10);
      const step = parseInt(counter.dataset.step || "1", 10);
      const digits = finalValue.toString().length;

      counter.style.display = "inline-block";
      counter.style.minWidth = `${digits}ch`;
      counter.style.textAlign = "right";

      const obj = { val: 0 };

      gsap.to(obj, {
        val: finalValue,
        duration: 1,
        ease: "power1.out",
        snap: { val: step },
        onUpdate() {
          counter.textContent = Math.floor(obj.val);
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });
    });
  }

  // Animação de Spin Infinito
  const spinElements = document.querySelectorAll(".spin");
  if (spinElements.length) {
    gsap.to(spinElements, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
    });
  }
});
