$('.multiple-items').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
   
  ]
});
 
// Counter
const counters = document.querySelectorAll('.count');
const speed = 200;
const count = [];
counters.forEach((counter) => {
  count.push(counter);
  const updateCount = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
window.addEventListener('scroll', ()=>{
  let y = window.scrollY;
  if (y > 3700) {
    count.forEach(element => {
      element.classList.add('active');
      console.log(element);
    });
  }

});