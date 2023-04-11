var circles = document.getElementsByClassName("indicator");
var allslides = document.getElementsByClassName("slides");
var slideindex = 0;

setTimeout(setInitialColor,10);
setInterval(function(){
    slideShow(slideindex)
},3000);

function slideShow(i){
     slideindex = i
        circles[slideindex].classList.add("selectedcirclecolor")
    if(slideindex == 0){
        if(circles[1].classList.contains("selectedcirclecolor")){
            circles[1].classList.remove("selectedcirclecolor")
        }
        
        if(circles[2].classList.contains("selectedcirclecolor")){
            circles[2].classList.remove("selectedcirclecolor")
        }
        
        allslides[slideindex].style.display = "block";
        allslides[1].style.display = "none";
        allslides[2].style.display = "none";
        slideindex++;
        
    }else if(slideindex == 1){
        if(circles[0].classList.contains("selectedcirclecolor")){
            circles[0].classList.remove("selectedcirclecolor")
        }
        
        if(circles[2].classList.contains("selectedcirclecolor")){
            circles[2].classList.remove("selectedcirclecolor")
        }

        allslides[slideindex].style.display = "block";
        allslides[0].style.display = "none";
        allslides[2].style.display = "none";
        slideindex++;
       
    }else if(slideindex == 2){
       if(circles[0].classList.contains("selectedcirclecolor")){
        circles[0].classList.remove("selectedcirclecolor") 
    }
        
    if(circles[1].classList.contains("selectedcirclecolor")){
        circles[1].classList.remove("selectedcirclecolor")
    }
        allslides[slideindex].style.display = "block";
        allslides[1].style.display = "none";
        allslides[0].style.display = "none";
            slideindex = 0;
    }
};

function setInitialColor(){
    circles[0].classList.add("selectedcirclecolor")
}

