let goodsBtn = document.querySelector(".goods__btn"),
    push = document.querySelector(".push"),
    pushBtn = document.querySelector(".push__btn");

goodsBtn.addEventListener("click", function() {
    push.classList.remove("d-none");
    push.classList.add("d-flex");
    push.classList.add("flex-column");
    push.classList.add("justify-content-center");
    push.classList.add("align-items-center");
});

pushBtn.addEventListener("click", function() {
    push.classList.remove("d-flex");
    push.classList.add("d-none");
});