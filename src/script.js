const detailedImage = document.querySelector(".detail_image");
const detailedTitle=document.querySelector(".detail--item_title");
const boxesElements = document.querySelectorAll(".gallery--item");
let boxAnimationElement=document.getElementById("box_animate")
function setDetails(boxElement){
    detailedImage.src=boxElement.getAttribute("data-alt-text");
    detailedTitle.innerHTML=boxElement.getAttribute("data-detailed-text");
}
for(let i= 0;i< boxesElements.length;i++ ){
    boxesElements[i].addEventListener("click",function(){
        setDetails(boxesElements[i]);
    
    boxAnimationElement.classList.toggle("animation")
    
 
    })
}
boxAnimationElement.classList.add("animation")

   

