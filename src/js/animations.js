import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//HEADER
gsap.to('.hero__title', {duration: 1.5, yPercent: 100, ease: "bounce"});
gsap.to('.hero__text', {duration: 1.5, yPercent: -20});

//SCROLLTRIGGER
const article1 = document.querySelector('.article__first');
gsap.fromTo(article1.children, {y:'+=100', opacity:0}, 
{y:0, opacity:1, stagger: 0.2, duration:3, scrollTrigger:{
    trigger: '.article',
    start: 'top 85%',
}})

const articleOpinionImage = document.querySelector('.article__opinion_image');
gsap.fromTo(articleOpinionImage.children, {x:'-=100', opacity:0}, 
{x:0, opacity:1, stagger: 0.2, duration:3, scrollTrigger:{
    trigger: '.article__opinion',
    start: 'top 70%',
}})

const articleOpinionContent = document.querySelector('.article__opinion_content');
gsap.fromTo(articleOpinionContent.children, {x:'+=100', opacity:0}, 
{x:0, opacity:1, stagger: 0.2, duration:3, scrollTrigger:{
    trigger: '.article__opinion',
    start: 'top 70%',
}})

const article2 = document.querySelector('.article__second');
gsap.fromTo(article2, {y:'+=100', opacity:0}, 
{y:0, opacity:1, stagger: 0.2, duration:2, scrollTrigger:{
    trigger: '.article__second',
    start: 'top 100%',
}})


       
