import '../styles/advices.scss';

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('slider__item');
    const nums = document.getElementsByClassName('slider__numbers_item');
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < nums.length; i++) {
        nums[i].classList.replace('active', 'normal');
    }
    slides[slideIndex - 1].style.display = 'block';
    nums[slideIndex - 1].classList.add('active');
}

const btn1 = document.querySelector('#btn_1');
btn1.addEventListener('click', function(){
    currentSlide(1)
});

const btn2 = document.querySelector('#btn_2');
btn2.addEventListener('click', function(){
    currentSlide(2)
});

const btn3 = document.querySelector('#btn_3');
btn3.addEventListener('click', function(){
    currentSlide(3)
});

const btn4 = document.querySelector('#btn_4');
btn4.addEventListener('click', function(){
    currentSlide(4)
});



