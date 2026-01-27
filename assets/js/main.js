;(function($){

  $(document).ready(function(){
  
  //========== HEADER ACTIVE STRATS ============= //
  if ($("#header").length > 0) {
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
    $(".header-area").removeClass("sticky");
    } else {
    $(".header-area").addClass("sticky");
    }
    });
  }
  //========== HEADER ACTIVE ENDS ============= //
  
  //========== PAGE PROGRESS STARTS ============= // 
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
    "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  //========== PAGE PROGRESS STARTS ============= // 
  
  //========== VIDEO POPUP STARTS ============= //
     if ($(".popup-youtube").length > 0) {
      $(".popup-youtube").magnificPopup({
      type: "iframe",
      });
      }
  //========== VIDEO POPUP ENDS ============= //
  AOS.init;
  AOS.init({disable: 'mobile'});
  
  //========== NICE SELECT ============= //
  $('select').niceSelect();
  
  });
  //========== COUNTER UP============= //
  const ucounter = $('.counter');
  if (ucounter.length > 0) {
   ucounter.countUp();  
  };
  
  // color-selactor
  const color = $(".select-area .btn-area1 a ");
  color.on("click", function () {
    $(".select-area .btn-area1 a ").removeClass("active-size");
    $(this).addClass("active-size");
  });
  //========== TESTIMONIAL AREA ============= //
  
  // testimonial //
  $('.slider-nav1').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    asNavFor: '.foter-carousel',
    dots: true,
    arrows:true,
    nav:true,
    centerMode: false,
    focusOnSelect: true,
    items:4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  $('.foter-carousel').slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
    fade: false,
    asNavFor: '.slider-nav1',
  });
  
  // testimonial //
  $('.slider-nav2').slick({
    slidesToShow: 1,
    slidesToScroll: 3,
    asNavFor: '.foter-carousel2',
    dots: true,
    arrows:true,
    nav:true,
    centerMode: false,
    focusOnSelect: true,
    items:4,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
  });
  $('.foter-carousel2').slick({
    slidesToShow: 1,
    infinite:false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
    prevArrow: $('.testimonial-next-arrow'),
    nextArrow: $('.testimonial-prev-arrow'),
    fade: false,
    asNavFor: '.slider-nav2',
  });
  
  const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    effect: 'coverflow',
    loop: true,
    slidesPerView: 3,
    grabCursor: true,
    speed: 1000,
    autoplay:true,
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
      return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
    },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
  
  // Swiper 2 //
  const swiper2 = new Swiper('.swiper2', {
    centeredSlides: true,
    effect: 'coverflow',
    loop: true,
    slidesPerView: 3,
    grabCursor: true,
    speed: 1000,
    autoplay:true,
    navigation: {
      enabled: false,
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
      return `<span class="outer-dot swiper-pagination-bullet"><span class="inner-dot"></span></span>`;
    },
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    }
  });
  
  $('.slider').slick({
    draggable: true,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  });
  
  // testimonial //
  $('.header-carousel-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots:true,
    items:10,
    infinite:true,
    mouseDrag:false,
    navText:["<i class='fa-solid fa-angle-up'></i>" , "<i class='fa-solid fa-angle-down'></i>"],
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            mouseDrag:false,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
  });
    
  $('.testimonial-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:true,
    center: true,
    items:10,
    navText:["<i class='fa-solid fa-angle-left'></i>" , "<i class='fa-solid fa-angle-right'></i>"],
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            center: false,
        },
        600:{
          center: false,
          items:2,
        },
        1000:{
            items:3,
        }
    }
  });
  
  // Testimonial //
  $('.slider3-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
          items:3,
        },
        1000:{
            items:6,
        }
    }
  });
  
  // Testimonial //
  $('.others4-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
        },
        600:{
          items:3,
        },
        1000:{
            items:6,
        }
    }
  });
  
  // Testimonial //
  $('.testionial4-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
          items:2,
        },
        1000:{
            items:2,
        }
    }
  });
  
  // Testimonial //
  $('.testionial5-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
          items:2,
        },
        1000:{
            items:2,
        }
    }
  });
  
  $('.service4-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
          items:2,
        },
        1000:{
            items:4,
        }
    }
  });
  
  $('.service5-slider-area').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:true,
    items:10,
    autoplay:true,
    smartSpeed:3000,
    autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
          items:2,
        },
        1000:{
            items:4,
        }
    }
  });
  //========== PRELOADER ============= //
  $(window).on("load", function (event) {
    setTimeout(function () {
      $(".preloader").fadeToggle();
    }, 200);
  
  });
  
  //========== RANGE SLIDER ============= //
  const slider = document.getElementById("slider");
      const sliderValue = document.getElementById("slider-value");
  
      slider.oninput = function() {
          const value = this.value;
          sliderValue.innerHTML = value;
  
          const percent = (value - this.min) / (this.max - this.min);
          const sliderWidth = this.offsetWidth;
          const valueOffset = percent * sliderWidth;
          sliderValue.style.left = `calc(${valueOffset}px - 25px)`;
      }
  
      const slider2 = document.getElementById("slider2");
      const sliderValue2 = document.getElementById("slider-value2");
  
      slider2.oninput = function() {
          const value = this.value;
          sliderValue2.innerHTML = value;
  
          // Position the value tooltip based on the slider's position
          const percent = (value - this.min) / (this.max - this.min);
          const sliderWidth = this.offsetWidth;
          const valueOffset = percent * sliderWidth;
          sliderValue2.style.left = `calc(${valueOffset}px - 25px)`;
      }
  })(jQuery);
  
  //========== GSAP AREA ============= //
  
  if ($('.text-anime-style-1').length) {
    let staggerAmount 	= 0.05,
    translateXValue = 0,
    delayValue 		= 0.5,
     animatedTextElements = document.querySelectorAll('.text-anime-style-1');
  
    animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.words, {
      duration: 1,
      delay: delayValue,
      x: 20,
      autoAlpha: 0,
      stagger: staggerAmount,
      scrollTrigger: { trigger: element, start: "top 85%" },
      });
    });
    }
  
    if ($('.text-anime-style-2').length) {
    let	 staggerAmount 		= 0.05,
     translateXValue	= 20,
     delayValue 		= 0.5,
     easeType 			= "power2.out",
     animatedTextElements = document.querySelectorAll('.text-anime-style-2');
  
    animatedTextElements.forEach((element) => {
    let animationSplitText = new SplitText(element, { type: "chars, words" });
      gsap.from(animationSplitText.chars, {
        duration: 1,
        delay: delayValue,
        x: translateXValue,
        autoAlpha: 0,
        stagger: staggerAmount,
        ease: easeType,
        scrollTrigger: { trigger: element, start: "top 85%"},
      });
    });
    }
  
    if ($('.text-anime-style-3').length) {
    let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
  
    animatedTextElements.forEach((element) => {
    //Reset if needed
    if (element.animation) {
      element.animation.progress(1).kill();
      element.split.revert();
    }
  
    element.split = new SplitText(element, {
      type: "lines,words,chars",
      linesClass: "split-line",
    });
    gsap.set(element, { perspective: 400 });
  
    gsap.set(element.split.chars, {
      opacity: 0,
      x: "50",
    });
  
    element.animation = gsap.to(element.split.chars, {
      scrollTrigger: { trigger: element,	start: "top 90%" },
      x: "0",
      y: "0",
      rotateX: "0",
      opacity: 1,
      duration: 1,
      ease: Back.easeOut,
      stagger: 0.02,
    });
    });
    }
  //========== Images AREA ============= //
    if($('.reveal').length)
      {gsap.registerPlugin(ScrollTrigger);
        let revealContainers=document.querySelectorAll(".reveal");
        revealContainers.forEach((container)=>{let image=container.querySelector("img");
        let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});
        tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});
        tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});})
        ;}
  



