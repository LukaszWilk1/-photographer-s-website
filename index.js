function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(let i=0;i<reveals.length;i++){
        var winddowHeight = window.innerHeight;                     // Height of the Viewport
        var elementTop=reveals[i].getBoundingClientRect().top;       // Distance from the reveal element to the top
        var elementVisible = 150;                                   // Height at which element will be revealed
        if(elementTop < winddowHeight - elementVisible){
            reveals[i].classList.add("active");
        }
       /* else{
            reveals[i].classList.remove("active");
        }*/
    }
}

window.addEventListener("scroll", reveal);

reveal();

function navbar(){
    var navbarElement=document.getElementById("navbar");
    if(navbarElement.classList.contains("animation")){
        navbarElement.classList.remove("animation");
        navbarElement.classList.add("anim-back");
    }
    else{
        navbarElement.classList.remove("anim-back");
        navbarElement.classList.add("animation");
    }
}