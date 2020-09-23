$(document).ready(function() {
    //according for menu
      $( ".popular-communities-items a" ).click(function() {
          var according =  $(this).attr('aria-expanded');
           if(according === 'false') {
               $('.popular-communities-items a img').css('transform', 'rotate(0deg)');
               $(this).find('img').css('transform', 'rotate(90deg)');
           } else {
               $('.popular-communities-items a img').css('transform', 'rotate(0deg)');
               $(this).css('transform', 'rotate(0deg)');
           }
    });
    $(".register-right .joined-btn").click(function() {
        $(this).toggleClass('joined-btn-click');
    });
    $(".small-toggle-menu").click(function() {
        $('#topicsNavbar').toggleClass('open-menu-form');
    });
    $(".keep-inside-clicks-open").click(function(e){
        e.stopPropagation();
    });
    $("#toggleInput").click(function(e){
        $('body').toggleClass('activeContent');
    });
    $(".downvoted-close").click(function(e){
        $(this).parent().css('display', 'none');
    });

    // FAQ
    $(".coins-section-5 .freq-asked-quest").click(function(e){
        $('.faq-toggle-text-hide').css('display', 'none');
        $('.coins-down').css('display', 'block');
        $('.coins-up').css('display', 'none');
        $(this).find('.faq-toggle-text-hide').css('display', 'block');
        $(this).find('.coins-down').css('display', 'none');
        $(this).find('.coins-up').css('display', 'block');

    });

    //help-center-block
    $(".help-center .help-container").click(function(e){
        $('.help-container').find('.show-center-block').removeClass('show-center-block');
        $(this).find('.help-center-block').addClass('show-center-block');
    });
    //chat
    $(".chat-minimize").click(function(e){
        $(".chat-section-2").css("display", "flex");
        $(".chat-section").css("display", "none");
    });
    $(".chat-close").click(function(e){
        $(".chat-section").css("display", "none");
    });
    $(".chat-open").click(function(e){
        $(".chat-section").css("display", "block");
    });
    $(".chat-section-2 img").click(function(e){
        $(".chat-section-2").css("display", "none");
    });
    $(".open-small-chat").click(function(e){
        $(".chat-section-2").css("display", "none");
        $(".chat-section").css("display", "block");
    });



});