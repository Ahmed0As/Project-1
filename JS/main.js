let barsIcon = document.getElementsByTagName("i")[0],
links = document.querySelector(".header .links");

barsIcon.addEventListener("click" , function () {
    barsIcon.classList.toggle("fa-times");
    links.classList.toggle("link-toggle")
});

window.onscroll = () => {
    barsIcon.classList.remove("fa-times");
    links.classList.remove("link-toggle")
};