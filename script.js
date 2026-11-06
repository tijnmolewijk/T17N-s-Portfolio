console.log("Script loaded!");

const slides = document.querySelectorAll(".spero-slide");

console.log(slides.length);

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    });

    slides[index].classList.add("active-slide");
}

showSlide(currentSlide);

document.querySelector(".next-button").addEventListener("click", () => {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

document.querySelector(".previous-button").addEventListener("click", () => {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

const ateraSlides = document.querySelectorAll(".atera-slide");

let currentAteraSlide = 0;

function showAteraSlide(index){

    ateraSlides.forEach(slide => {
        slide.classList.remove("atera-active-slide");
    });

    ateraSlides[index].classList.add("atera-active-slide");
}

showAteraSlide(currentAteraSlide);

document.querySelector(".atera-next-button").addEventListener("click", () => {

    currentAteraSlide++;

    if(currentAteraSlide >= ateraSlides.length){
        currentAteraSlide = 0;
    }

    showAteraSlide(currentAteraSlide);
});

document.querySelector(".atera-previous-button").addEventListener("click", () => {

    currentAteraSlide--;

    if(currentAteraSlide < 0){
        currentAteraSlide = ateraSlides.length - 1;
    }

    showAteraSlide(currentAteraSlide);
});

const conceptSlides = document.querySelectorAll(".concept-slide");

let currentConceptSlide = 0;

function showConceptSlide(index){

    conceptSlides.forEach(slide => {
        slide.classList.remove("concept-active-slide");
    });

    conceptSlides[index].classList.add("concept-active-slide");
}

showConceptSlide(currentConceptSlide);

document.querySelector(".concept-next-button").addEventListener("click", () => {

    currentConceptSlide++;

    if(currentConceptSlide >= conceptSlides.length){
        currentConceptSlide = 0;
    }

    showConceptSlide(currentConceptSlide);
});

document.querySelector(".concept-previous-button").addEventListener("click", () => {

    currentConceptSlide--;

    if(currentConceptSlide < 0){
        currentConceptSlide = conceptSlides.length - 1;
    }

    showConceptSlide(currentConceptSlide);
});
