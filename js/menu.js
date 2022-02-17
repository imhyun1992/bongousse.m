$(function(){
    $(document).ready(function(){
        $('.bxslider').bxSlider({
            auto:true,
            //autoControls:true,
            //stopAutoOnClick: true,
            pager:true,
            });
        })

    $('#menu_over').css({width:'0'});
    $('.toggleOn').on('click',function(){
        $('#menu_over').animate({width:'100%'});
    })
    $('.toggleCls').on('click',function(){
        $('#menu_over').animate({width:'0'});
    })

    $('.menuSub').hide();
    $('.menu').on('click',function(){
        $(this).next('.menuSub').slideToggle();
    })

    
})
