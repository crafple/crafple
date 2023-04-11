var circles = document.getElementsByClassName("indicator");
var allslides = document.getElementsByClassName("slides");
var slideindex = 0;
var pause = false
var isFirst = true





//setInterval(slideShow(slideindex),3000);
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
        
        //alert(slideindex+"を表示します");
        //alert(allslides[index].outerHTML+"slides[index");
       
        
        allslides[slideindex].style.display = "block";
        allslides[1].style.display = "none";
        allslides[2].style.display = "none";
        //circles[slideindex].classList.remove("selectedcirclecolor");
        slideindex++;
        
        
        
    }else if(slideindex == 1){
        //alert(slideindex+"を表示します");
        //alert(allslides[index].outerHTML+"slides[index");
        //circles[slideindex].classList.add("selectedcirclecolor");
        //circles[slideindex-1].classList.remove("selectedcirclecolor")
        if(circles[0].classList.contains("selectedcirclecolor")){
            circles[0].classList.remove("selectedcirclecolor")
        }
        if(circles[2].classList.contains("selectedcirclecolor")){
            circles[2].classList.remove("selectedcirclecolor")
        }

        allslides[slideindex].style.display = "block";
        allslides[0].style.display = "none";
        allslides[2].style.display = "none";
        //circles[slideindex].classList.remove("selectedcirclecolor");
        slideindex++;
       
    }else if(slideindex == 2){
        //alert(slideindex+"を表示します");
        //alert(allslides[index].outerHTML+"slides[index");
       //circles[slideindex].classList.add("selectedcirclecolor");
       //circles[slideindex-1].classList.remove("selectedcirclecolor")
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
        //circles[slideindex].classList.remove("selectedcirclecolor");
    }

    
    
};
function setInitialColor(){
    circles[0].classList.add("selectedcirclecolor")
}

