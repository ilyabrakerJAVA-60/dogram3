const detailedImage = document.querySelector(".detail_image");
const detailedTitle=document.querySelector(".container--detail_title");
const boxesElements = document.querySelectorAll(".gallery--item");
function setDetails(boxElement){
detailedImage.src=boxElement.getAttribute("data-alt-text");
detailedTitle.innerHTML=boxElement.getAttribute("data-detailed-text");
}
for(let i= 0;i< boxesElements.length;i++ ){
    boxesElements[i].addEventListener("click",function(){
        setDetails(boxesElements[i]);
        animate()
    
 
    })
}
function animate(){
    detailedImage.classList.remove("animation")
    detailedTitle.classList.remove("animation")
    setTimeout(function () {
        detailedImage.classList.add("animation");
        detailedTitle.classList.add("animation");
      }, 0);

}
detailedImage.classList.add("animation");
detailedTitle.classList.add("animation");

   

