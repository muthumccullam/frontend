let button = document.querySelector(".arrow"),
     links=document.querySelector(".nav-links");
button.addEventListener("click",function () {
        links.classlist.toggle("display");
    })
