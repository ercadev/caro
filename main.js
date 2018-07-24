/**
 * Init the first item with image and header.
 */

document.getElementById("first-item").className = "list-item active";
document.getElementById("image-first").className = "show";
document.getElementById("first-header").classList.add('active');

/**
 * Start the loop that change item every 7000ms (7 seconds).
 */

setInterval(changeItem, 7000);

/**
 * Function checks which item is actice and then change to the next one.
 */

function changeItem() {
    if (document.getElementById("first-item").classList.contains('active')) {
        removeActiveClass("first");
        setActiveClass("second");
    } else if (document.getElementById("second-item").classList.contains('active')) {
        removeActiveClass("second");
        setActiveClass("third");
    } else {
        removeActiveClass("third");
        setActiveClass("first");
    }
}

function manualChangeItem(item) {
    if (item == "first") {
        removeActiveClass("second");
        removeActiveClass("third");
        setActiveClass("first");
    } else if (item == "second") {
        removeActiveClass("first");
        removeActiveClass("third");
        setActiveClass("second");
    } else {
        removeActiveClass("second");
        removeActiveClass("first");
        setActiveClass("third");
    }
}

function removeActiveClass(item) {
    document.getElementById(item + "-item").classList.remove('active');
    document.getElementById(item + "-header").classList.remove('active');
    document.getElementById("image-" + item).classList.remove('show');
}

function setActiveClass(item) {
    document.getElementById(item + "-item").classList.add('active');
    document.getElementById(item + "-header").classList.add('active');
    document.getElementById("image-" + item).classList.add('show');
}