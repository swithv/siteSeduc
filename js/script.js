const carrousel = document.querySelector(".cards_carrousel");

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carrousel.scrollLeft = e.pageX;
}


carrousel.addEventListener("mousedown", dragStart);
carrousel.addEventListener("mousemove", dragging);
carrousel.addEventListener("mousemove", dragging);