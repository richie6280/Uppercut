var mySwiper = new Swiper('.swiper-container', {
    autoplay:true,//等同于以下设置
    /*autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      },*/
  });

  $(window).scroll(function(event){
      var scroll = $(window).scrollTop();
        if (scroll >= 50) {
          $("#back-to-top").addClass("show");
        }else {
          $("#back-to-top").removeClass("show");
        }
    });
    
    $('#back-to-top').click(function(){
        $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
      });
      