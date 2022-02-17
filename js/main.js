$(function(){
    $('.navSub').slideUp();
    $('#navM').on('mouseenter',function(){
        $('.navSub').slideDown();
    }).on('mouseleave',function(){
        $('.navSub').slideUp();
    });
})