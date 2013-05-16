$(window).bind("load", function() {
    $('#loading').fadeOut(200);

    // $(function(){
    // Self-executing recursive animation
   // (function pulse(){
   //     $('.newly_created:odd').delay(2000).fadeOut('slow').delay(00).fadeIn('slow',pulse);
    //    $('.newly_created:even').delay(4000).fadeOut('slow').delay(1000).fadeIn('slow',pulse);
 //   })();
// });
});


$(document).ready(function() {

$('#tag_cloud').masonry({
  itemSelector: '.item_wrap',
  isAnimated: true,
  isFitWidth: true,
  animationOptions: {
    duration: 1000000,
    easing: 'linear',
    queue: false
  }
});


$("#post_tag_list").select2({
    placeholder: "Reading",
    allowClear: true
});


// $(".item").mouseover(function(){
//       $(".tag_name").hide("slow");
//       $(this).prev(".tag_name").slideToggle("display");
// });
 $(function(){
    $(".tag_name.select_form").hide();

        $(".item.newly_created.brandnew .tag_name.manual").show();

    $(".item").mouseover(function(){
        $(this).prev(".tag_name.select_form").show();    
    });

    $(".item").mouseout(function(){
        $(this).prev(".tag_name.select_form").show(); 
 
         $(".tag_name.select_form").hide();  
    });


   $(".item").click(function(){
        $(this).prev(".tag_name.select_form").show();  
         $(".tag_name").hide();  
    });




});





// var animateBubbles = function(targetElement, speed){

//     $(targetElement).delay(5000).animate({'top': '5px'}, 500);
//     $(targetElement).delay(0).animate({'top': '0px'}, 500);
// };

// animateBubbles($('#tag_cloud'), 1000);
// animateBubbles($('#tag_cloud .newly_created'), 4000);

$('#add_new').click(function(){
        $(this).toggleClass('open');
        $('p.add_post').toggleClass("selected_on");
        $('p.post').removeClass("select_on");
             $('#new_form').toggleClass('getup');
    });


$('#links').click(function(){
        $('#get_social').slideToggle("slow");
        $(this).toggleClass('uppety');
    });

if ( $("p.notice").is(":visible") ) {
  $(".item.newly_created:last").addClass("brandnew");
  $(".item_wrap.personal_entry").addClass("new_entry");
  $(".item_wrap.personal_entry span.tag_name").show();

 }

$('#tag_cloud .item_wrap .item.newly_created.brandnew').attr('style','display: block !important');

$('.item.newly_created.brandnew').parent('div').addClass('easy');


$(".newly_created.brandnew").animate({top:"200px"}, 4000).delay(2000).animate({left:"0px"}, 3000);


setTimeout(function() {
    $('.plus_tag_name').fadeOut('slow');
}, 7000); 




if ( $(".item_wrap.personal_entry").is(":visible") ) {
  $(".item.newly_created:last").removeClass("brandnew");
}



//Slider

    $('.slide_wrap section').hide();
    $('.slide_wrap section:first').show();
    $('.slide_thumbs ul li a:first').addClass('active');

    $('.slide_thumbs ul li a').click(function() {
        if ($(this).hasClass('active') == true) {
            return false;
        }
        else {
            $('.slide_thumbs ul li a').removeClass('active');
            $(this).addClass('active');

            $('.slide_wrap section').fadeOut(800);
            var contentToLoad = $(this).attr('href');
            $(contentToLoad).fadeIn(1200);
             $(contentToLoad).promise().done(function(){
                }); // will be called when all the animations on the queue finish

            return false;
        }
    });  

//overlay

    $('#meet_mellon').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#content').animate({'top':'150px'},500);
        });
    });
    $('.close_overlay').click(function(){
        $('#content').animate({'top':'-160px'},500,function(){
            $('#overlay').fadeOut('fast');
        });
        });

        $('#overlay').click(function(e) {
            if (e.target.id === "overlay"){
        $('#overlay').fadeOut("fast");
    }
      
 
});

});


// $(document).click(function(e) {
//     var target = e.target;

//     if (!$(target).is('input#post_new_post') && !$(target).parents().is('input#post_new_post')) {
//         $('input#post_new_post').hide();
//     }
//     });
// });


function changeColor(curNumber){
    curNumber++;

    if(curNumber > 160) {
        // back at 1
        curNumber = 1;

        // no animation here
        $('body').addClass('color' + curNumber);

        // remove
        $('body').removeClass('color' + 160, 600);
    } else {
        $('body').addClass('color' + curNumber, 400);
        // add
        $('body').attr('class', 'color' + curNumber);
    }
    console.log(curNumber);
    setTimeout(function(){changeColor(curNumber)}, 600); } 

changeColor(0); 



