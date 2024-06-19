
//! start the navbar 


let navWidth = $(".nav-bar").innerWidth()
$(".nav-bar").animate({left:-navWidth},1000)
$(".open-nav").css({left:"10px"})
// (".caption").css({marginLeft:"0px"})

$(".close-nav").on("click", function(){

    $(".nav-bar").animate({left:-navWidth},1000)
    $(".open-nav").animate({left:"10px"},1000)
    $(".caption").animate({marginLeft:"0px"},1000)
})


$(".open-nav").on("click", function(){
    let navbar = $(".nav-bar").offset().left
    // console.log(navbar);

    if(navbar !== 0){
        $(".nav-bar").animate({left: "0px"},1000)
        $(".open-nav").animate({left:"250px"},1000)
        $(".caption").animate({marginLeft:"200px"},1000)
    }
    
})
$("#header a").on( "click",function(){
    //get the href at frist and know the href offset from top 
    var sectionLink= $(this).attr("href");
    
    var offsetSection = $(sectionlink).offset().top;
    
    $("html , body").animate({scrollTop:offsetSection},1000);
    
})

//! start the slideshow

$("#singers .item p").slideUp(500);

$("#singers .item h2").on("click", function(){
   // all p exapt the one who is brother for h2 make for them slide up 
   //and the brother make a tiggle for him
    $("#singers .item p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);

})

//! count days to event

window.onload = function() {

    countDaysToEvent("10 june 2024 00:00:00");
}

function countDaysToEvent(count) {
//get the time of now and the time of the event and subtraction of the time 
// to know the difference between them 
        let theDate = new Date(count);
        theDate = (theDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDiff = (theDate- now);
        
    let days = Math.floor( timeDiff / (24*60*60));
    // console.log(days);
   let hours = Math.floor((timeDiff - (days * (24*60*60))) / 3600);
//    console.log(hours);
   let mins = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDiff - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

//    console.log(mins);
//    console.log(secs);

// !html 
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)


    setInterval(function() {  countDaysToEvent(count); }, 1000);
}

//! textarea  


let maxLength = 100;
$("textarea").keyup(function(){

   keywordValue =  $(this).val().length;
   console.log(keywordValue);
   let  theRest = maxLength - keywordValue;

   if(theRest < 0){
    $(".keyValue").text("Your limit is 100");
   }else{
    $(".keyValue").text(theRest);
   }

})