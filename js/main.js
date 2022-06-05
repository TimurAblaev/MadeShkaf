let days = document.querySelector(".days"),
    hours = document.querySelector(".hours"),
    minutes = document.querySelector(".minutes"),
    seconds = document.querySelector(".seconds"),
    arrowUp = document.querySelector(".arrow-up"),
    cost = document.querySelector(".cost__content"),
    costImg = document.querySelector(".cost__content img"),
    tab = document.querySelectorAll(".tabs__item"),
    tabTitle = document.querySelectorAll(".tabs__name"),
    seeMore = document.querySelector(".see__more"),
    offersCards = document.querySelector(".offers__cards");

function time() {
    seconds.innerHTML--;
    if(seconds.innerHTML == 0) {
        seconds.innerHTML = 60;
        minutes.innerHTML--;
    }
    setTimeout(function(){
        time();
    }, 1000)
}

time();

let deg = 180;

arrowUp.addEventListener('click', function() {
    arrowUp.style.transition = "0.5s";
    arrowUp.style.transform = `rotate(${deg}deg)`;

    if(deg == 180) {
        cost.style.height = "0";
        costImg.style.height = "0";
    } else if(deg = 360) {
        cost.style.height = "100%";
        costImg.style.height = "544px";
    }

    if(deg == 180) {
        deg = 360;
    } else if(deg == 360) {
        deg = 180;
    }
});

tabTitle.forEach(function(item, key) {
    item.addEventListener("click", function() {
        tabTitle.forEach(function(item, key) {
            tabTitle[key].classList.remove("Active");
            tab[key].classList.remove("Active");
        });
        tabTitle[key].classList.add("Active");
        tab[key].classList.add("Active");
    });
}); 

seeMore.addEventListener('click', function() {
    if(seeMore.innerHTML == "Смотреть ещё") {
        offersCards.style.maxHeight = "8000px";
        seeMore.innerHTML = "Свернуть";
    } else if(seeMore.innerHTML = "Свернуть") {
        offersCards.style.maxHeight = "1080px";
        seeMore.innerHTML = "Смотреть ещё";
    }
});


