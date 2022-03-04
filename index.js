const light = document.querySelector(".light");
const image = document.querySelector(".image");

//functions
const mouseEnter = () => {
    light.style.width = "400px";
    light.style.height = "400px";
}
const mouseleave = () => {
    light.style.width = "0px";
    light.style.height = "0px";
}

//events
image.addEventListener("mouseover", mouseEnter)
image.addEventListener("mouseleave", mouseleave)

//for mouse move
image.addEventListener("mousemove", (e) => {
    let rect = e.target. getBoundingClientRect();
    let pageX = e.clientX - rect.left;
    let pageY = e.clientY - rect.top;

    //move light source
    light.style.left = `${pageX}px`
    light.style.top = `${pageY}px`

})