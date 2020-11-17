$(document).ready(function(){
    $('#cog').on('click' , function(){
        $('.colors').toggle();
    });

    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top >= 112){
            $(".navbar").addClass('nav-col');
        }else if($(".navbar").hasClass('nav-col')){
            $(".navbar").removeClass('nav-col');
        }
    });
})