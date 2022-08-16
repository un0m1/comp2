'use strict';

{
  // sp menu
  const open = document.querySelector('.humberger');
  const spmenu = document.querySelector('.sp-menu');
  const close = document.getElementById('close');

  const concept = document.querySelector('.menu-concept');
  const service = document.querySelector('.menu-service');
  const works = document.querySelector('.menu-works');
  const contact = document.querySelector('.menu-contact');

  open.addEventListener('click', () => {
    spmenu.classList.add('show');
  });

  close.addEventListener('click', () => {
    spmenu.classList.remove('show');
  });

  concept.addEventListener('click', () => {
    spmenu.classList.remove('show');
  });
  service.addEventListener('click', () => {
    spmenu.classList.remove('show');
  });
  works.addEventListener('click', () => {
    spmenu.classList.remove('show');
  });
  contact.addEventListener('click', () => {
    spmenu.classList.remove('show');
  });

  // scroll
  function callback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');  
      }
    });
  }

  const header = document.querySelector('header');

  const observer = new IntersectionObserver(callback);
  observer.observe(document.getElementById('target'));

  // hero img

  function play()  {
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if (currentIndex > images.length -1) {
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 3000);
  }
  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
}