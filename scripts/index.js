//for Toggle nav
// const tabs = document.querySelector('.tabs');

// function toggleBtn() {
//    tabs.classList.toggle('responsive');
// }

//media query 1265px, left and right scroll, and media query 630px, up and down scroll
const menu = document.querySelector('.menu');
document.getElementById('scroll-down').addEventListener('click', function() {
   const maxScroll = menu.scrollHeight - menu.clientHeight; // حداکثر میزان اسکرول
   if (menu.scrollTop < maxScroll) {
      menu.scrollBy({
         top: 200, // اسکرول به پایین
         behavior: 'smooth'
      });
   }
});

document.getElementById('scroll-up').addEventListener('click', function() {
   if (menu.scrollTop > 0) {
      menu.scrollBy({
         top: -100, // اسکرول به بالا
         behavior: 'smooth'
      });
   }
});

document.getElementById('scroll-left').addEventListener('click', function () {
   menu.scrollBy(-100, 0); // Scroll left
    document.querySelector('.menu').scrollBy({
      left: -300, // میزان اسکرول به سمت چپ
      behavior: 'smooth' // اسکرول نرم
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
   menu.scrollBy(100, 0); // Scroll right
    document.querySelector('.menu').scrollBy({
      left: 300, // میزان اسکرول به سمت راست
      behavior: 'smooth' // اسکرول نرم
    });
});

