const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const wrapper = document.querySelector('#banner-headers')
const slides = document.querySelector('carousel-slides')
let currentBannerHeader = document.querySelector('#banner-header-1')
nextButton.addEventListener('click', next)

prevButton.addEventListener('click', previous)

function next (){
    currentBannerHeader.classList.toggle('hidden')
    if (currentBannerHeader.nextElementSibling){
        currentBannerHeader = currentBannerHeader.nextElementSibling;
    }
    else{
        currentBannerHeader = currentBannerHeader.parentElement.firstElementChild;
    }
    currentBannerHeader.classList.toggle('hidden')
}
function previous (){
    currentBannerHeader.classList.toggle('hidden')
    if (currentBannerHeader.previousElementSibling){
        currentBannerHeader = currentBannerHeader.previousElementSibling;
    }
    else{
        currentBannerHeader = currentBannerHeader.parentElement.lastElementChild;
    }
    currentBannerHeader.classList.toggle('hidden')
}
// const y = document.getElementById('banner-header-1');
// const x = setTimeout('y, 2000');
// const z = document.getElementById('banner-header-2');
// const a = setTimeout('a, 2000');

function Next1(){
    next();
    setInterval(next, 4000);
   
}
Next1();

let currentindex = 0
letautoslideinterval;

function updatecarousel(){
    const translatex = currentindex * -100;
    wrapper.addEventListener
}