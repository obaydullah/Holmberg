$(function(){
 'use strict'
 
 //scroll-spy & Smooth-scrolling
 var scrollLink = $('.scroll-link');
 $(scrollLink).on('click',function(event){
   event.preventDefault();
   $('html,body').animate({scrollTop: $(this.hash).offset().top-80},1000);
 });
 $(window).on('scroll',function(){
   var scrollTop = $(this).scrollTop();
   scrollLink.each(function(){
   var sectionhead = $(this.hash).offset().top-85;
   if(scrollTop >= sectionhead) {
     $(this).parent().addClass('active');
     $(this).parent().siblings().removeClass('active');
   }
   });
 });

 $(window).scroll(function(){
  var sticky = $(this).scrollTop();
  if(sticky > 300){
    $('.navbar ').addClass('sticky-menu');
  }
  else{
    $('.navbar ').removeClass('sticky-menu');
  }
 });

 $('.main-test-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 1500,
    autoplay: true,
    asNavFor: '.main-content-slider-t'
  });
  $('.main-content-slider-t').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main-test-slider',
    dots: true,
    arrows:false,
    fade: true,
    speed: 2000,
    autoplay:false,
  });


});