 window.onload = function () {
    //DOUBLECLICK CODE
    if (Enabler.isInitialized()) {
      init();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
    }

    // Runs when Enabler is ready.
    function init() {
      if (Enabler.isPageLoaded()) {
        politeInit();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
      }
    };

    // Runs when the page is completely loaded.		
    function politeInit(){		
        initBannerAdd();
      // Add your code to load creative assets or begin creative animation.
    };
    
    
    var tlOne, banner, FrameOne, cta, bgexit;
    var tlOne = new TimelineLite();
    var banner = document.getElementById("banner");
    var FrameOne = document.getElementById("FrameOne");
    var Logo = document.getElementById("Logo");    
    var cta = document.getElementById("cta");
    var bgexit = document.getElementById("bgexit");
   
    function initBannerAdd() {
        setPositionsObjects();
        animateAdNew();
    }

    function setPositionsObjects() {
        banner.style.opacity = "1";
    }

    function animateAdNew() {
        /*      
        tlOne.to(FrameOneMove,10, {x:-80, scaleX:1, scaleY:1, ease:Power4.easeout}, "-=0")
        .to(FrameTwoImage,10, {rotation:12,  y:-4, ease:Power4.easeout}, "-=10")
        .to(FrameThreeImage,10, {rotation:8,  y:-4, ease:Power4.easeout, onComplete:restartAnimation}, "-=10")
        .from(textone,1, {x:-340,  opacity:0, ease:Power4.easeIn}, "-=9.5")
        */
        //tlOne.totalDuration(15);
    }
    

    ////timer
    var myVar = setInterval(function () {myTimer()}, 1000);
    function myTimer() {
        var d = new Date();
        //tlOne.totalDuration(10);
    }

    var animationLoop = 1;
    function restartAnimation() {
        if (animationLoop === 1) {
            animationLoop = animationLoop + 1;
            tlOne.restart();
        }
    }

    //init(); ///start initialising everything   
    /////////////// /////////////// /////////////// //////////////  
};