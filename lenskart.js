//video 

let video = document.getElementById("video");
let icon1 = document.getElementsByClassName("play");
let icon2 = document.getElementsByClassName("pause");

icon1[0].style.color = 'black';
icon2[0].style.color = 'black';

icon1[0].addEventListener('click', e=>{
    if (icon1[0].style.color == 'black') {
        console.log("play your video");
        video.play();
        icon1[0].style.display = 'none';
        icon2[0].style.backgrounColor = 'white '
        icon2[0].style.color = 'black';
    } 
    else if(icon2[0].style.color = 'black'){
        video.pause();
    }
    else {
        console.log("some network issue");
    }

})

//slider

document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const icons = document.getElementsByClassName("icons");

    let slideIndex = 0;

    function showSlides() {
        slider.style.transform = `translateX(${-slideIndex * 50}%)`;
    }

    function nextSlide() {
        if (slideIndex < slider.children.length - 1) {
            slideIndex++;
            if (slideIndex <= 2) { //it is used when slide length over 2 so it will not show that part
                showSlides();
            }
        }
    }

    function prevSlide() {
        if (slideIndex > 0) {
            slideIndex--;
            showSlides();
        }
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});
