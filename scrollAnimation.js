var dinnerTitle = document.getElementById("dinner-title");
var dinnerDesc = document.getElementById("dinner-desc");

document.addEventListener('scroll', animate);

function inView() {

    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollPosition = windowHeight + scrollY;
    var yPos = getPosition(dinnerTitle);

    if (scrollPosition > yPos) {
        return true;
    }

    return false;
}

function getPosition(element) {
    var yPosition = 0;
    var height = element.clientHeight;

    while (element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    yPosition += height;
    return yPosition;
}

function animate() {
    if (inView()) {
        dinnerTitle.classList.add('animate');
        dinnerDesc.classList.add('animate');
    }
}