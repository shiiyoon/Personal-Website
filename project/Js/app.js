
//navbar-sec
let screenHeight = $(window).height();

$(window).scroll(function(){
   let currentHeight = $(this).scrollTop();
   console.log(currentHeight)
   if(currentHeight > screenHeight-20){
     $(".navBar").addClass("navbar-sec");
   }else{
     $(".navBar").removeClass("navbar-sec");
     setActive("home");
   }
 });

 //lineactive
    function setActive (current){
      $(".nav-link").removeClass("lineactive");
      $(`.nav-link[href = '#${current}']`).addClass("lineactive");
    }

    function setScroll(){
       let currentSection = $("Section[id]");
       
       currentSection.waypoint(function(direction){

        if(direction == 'down'){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
       }
      },{offset: '100px'});

      currentSection.waypoint(function(direction){

        if(direction == 'up'){
            let currentSectionId = $(this.element).attr('id');
            console.log(currentSectionId);
            setActive(currentSectionId);
       }
      },{offset: '100px'});
    } 
setScroll();

//close icon
$(".navbar-toggler").click(function(){
  let checkshow = $(".navbar-collapse").hasClass("show");
   console.log(checkshow);
   
   if(checkshow){
     let iconMenu = $(".navbar-toggler i").removeClass("feather-x").addClass("feather-menu"); //icon
     
      $(".navbar-toggler").click(function(){ //btn
         $(".navbar-collapse").show(); //navbar show
     });
   }else{ //show
     let iconX = $(".navbar-toggler i").removeClass("feather-menu").addClass("feather-x"); //icon

        $(".nav-link").click(function(){ //a link
          $(".navbar-collapse").hide(); //navbar hide
          $(".navbar-toggler i").removeClass("feather-x").addClass("feather-menu"); //icon
     });
   }
});

//social fixed
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

//counter up
    $('.counter').counterUp({
    delay: 40,
    time: 1000
});

//dark mode
$(".dayMode").click(function(){

   $("body").toggleClass("darkMode");   //body darkMode
   $("dayMode").toggleClass("darkMode"); //icon darkMode
   $("img[id='logo']").attr("src","../My Portfolio Website/project/img/PW dark.png"); //logo darkMode
});





