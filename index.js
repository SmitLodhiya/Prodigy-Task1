
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#222'; 
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

const menuItems = document.querySelectorAll('.nav-item');


menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.color = '#ff9900'; 
  });

  item.addEventListener('mouseleave', () => {
    item.style.color = '#fff';
  });
});
