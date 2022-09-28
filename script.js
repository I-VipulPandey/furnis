function show() {
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}


function NavAndMainPageAnimation(){
  gsap.from(".upper", {

    y: "150%",
    duration: 1,
    opacity: 1,
  
  
  })
  
  gsap.from("#link-part a", {
  
    y: "-120%",
    duration: 1,
    stagger: .1,
    opacity: 1,
  
  
  
  })
  
  gsap.from(".leftse", {
  
    x: "-150%",
    duration: 1,
    delay: 'none',
    opacity: 1,
  
  
  
  })

}

function ImageAnimationMobile(){

  gsap.to("#page2 #left #lft-img", {

    scrollTrigger: {
      trigger: "#page2 #left #lft-img",
      scroller: "#main",
      end: "top 30%",
      scrub: true,
    },
    height: "25vh",
  })
  
  
  
  gsap.to("#page2 #right #right-img", {
  
    scrollTrigger: {
      trigger: "#page2 #right #right-img",
      scroller: "#main",
      end: "top 50%",
      scrub: true,
    },
    height: "25vh",
  })
  
  
  gsap.to("#page3 #left #left-img ", {
  
    scrollTrigger: {
      trigger: "#page3 #left #left-img ",
      scroller: "#main",
      end: "top 50%",
      scrub: true,
    },
    height: "25vh",
  })
  
  gsap.to("#page3 #right #right-img ", {
  
    scrollTrigger: {
      trigger: "#page3 #right #right-img",
      scroller: "#main",
      end: "top 30%",
      scrub: true,
    },
    height: "25vh",
  })
  
  
  
  
  gsap.to(".img-anim", {
  
    scrollTrigger: {
      trigger: ".img-anim",
      scroller: "#main",
      end: "top 30%",
      scrub: true,
    },
    height: "21vh",
  })

}

function ImageAnimation(){


  gsap.to("#page2 #left #lft-img", {

    scrollTrigger: {
      trigger: "#page2 #left #lft-img",
      scroller: "#main",
      end: "top 50%",
      scrub: true,
    },
    height: "40vh",
  })
  
  
  
  gsap.to("#page2 #right #right-img", {
  
    scrollTrigger: {
      trigger: "#page2 #right #right-img",
      scroller: "#main",
      end: "top 50%",
      scrub: true,
    },
    height: "35vh",
  })
  
  
  gsap.to("#page3 #left #left-img ", {
  
    scrollTrigger: {
      trigger: "#page3 #left #left-img ",
      scroller: "#main",
      end: "top 50%",
      scrub: true,
    },
    height: "45vh",
  })
  
  gsap.to("#page3 #right #right-img ", {
  
    scrollTrigger: {
      trigger: "#page3 #right #right-img",
      scroller: "#main",
      end: "top 30%",
      scrub: true,
    },
    height: "50vh",
  })
  
  
  
  
  gsap.to(".img-anim", {
  
    scrollTrigger: {
      trigger: ".img-anim",
      scroller: "#main",
      end: "top 30%",
      scrub: true,
    },
    height: "40vh",
  })


}


if (window.innerWidth<=500) {

show();
NavAndMainPageAnimation();
ImageAnimationMobile();

  
}

else{

  show();
NavAndMainPageAnimation();
ImageAnimation();
}







