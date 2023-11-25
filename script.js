function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".grand-pita"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".grand-pita" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".grand-pita", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".grand-pita").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

loco();

function imgAnim() {
  gsap.to("#circle", {
    rotate: 200,
    scrollTrigger: {
      trigger: "#circle",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 40%",
      scrub: 4,
    },
  });

  gsap.to("#rt-1", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-1",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 80%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to("#rt-2", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-2",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 70%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to("#rt-3", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-3",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 70%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to("#rt-4", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-4",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 70%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to("#rt-5", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-5",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 70%",
      scrub: 2,
      markers: false,
    },
  });

  gsap.to("#rt-6", {
    rotate: 0,
    scrollTrigger: {
      trigger: "#rt-6",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 70%",
      scrub: 2,
      markers: false,
    },
  });
}

imgAnim();

function textAnim() {

  gsap.from(".home .head1", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
  });

  gsap.from(".home .head2", {
    x: 200,
    opacity: 0,
    duration: 0.5,
    delay: 0.6,
  });

  gsap.from(".home .head3", {
    y: 100,
    opacity: 0,
    duration: 0.5,
    delay: 0.8,
  });

  gsap.from("#circle", {
    x: -100,
    y: 100,
    duration: 0.5,
    delay: 1,
    opacity: 0
  })

  gsap.from(".second-child1 h1", {
    y: 100,
    rotate: 15,
    opacity: 0,
    scrollTrigger: {
      trigger: ".second-child1 h1",
      scroller: ".grand-pita",
      start: "top 80%",
      end: "bottom 80%",
      scrub: true,
      markers: false
    }
  })
  gsap.from("#mani .fff a", {
    y: 100,
    rotate: 15,
    opacity: 0,
    scrollTrigger: {
      trigger: "#mani .fff a",
      scroller: ".grand-pita",
      start: "top 95%",
      end: "bottom 80%",
      scrub: 2,
      markers: false
    }
  })

}

textAnim();

function epicAnim() {
  gsap.to(".four .dad", {
    y: -2700,
    scrollTrigger: {
      trigger: ".four .dad",
      scroller: ".grand-pita",
      start: "top 40%",
      end: "bottom 60%",
      scrub: 2,
    }
  })
}

epicAnim();


// const crsr =  document.querySelector("#crsr");
// const pita =  document.querySelector(".grand-pita");

// pita.addEventListener("mousemove",function(dets){
//      crsr.style.left = dets.x-18 + "px";
//      crsr.style.top = dets.y-18 + "px";
// })

