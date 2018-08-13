/** 
 * Wait for DOM to load and then listen for mouseover 
 */ 

window.addEventListener("DOMContentLoaded", function () {
    document.getElementById('first-item').addEventListener("mouseover", function () {
        manualChangeItem("first");
    });
    document.getElementById('second-item').addEventListener("mouseover", function () {
        manualChangeItem("second");
    });
    document.getElementById('third-item').addEventListener("mouseover", function () {
        manualChangeItem("third");
    });

    const excerpts = document.getElementsByClassName('excerpt');

    for (let i = 0; i < excerpts.length; i++) {
        if (excerpts[i].innerHTML.length > 90) {
            excerpts[i].innerHTML = excerpts[i].innerHTML.substr(0,90) + "...";
        }

        
    }
    console.log(document.getElementsByClassName('excerpt')[0].innerHTML);
}, false);

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
    document.getElementById(item + "-item").className = "list-item";
    document.getElementById(item + "-header").className = "overlay-header";
    document.getElementById("image-" + item).className = "";
}

function setActiveClass(item) {
    document.getElementById(item + "-item").className = "list-item active";
    document.getElementById(item + "-header").className = "overlay-header active";
    document.getElementById("image-" + item).className = "show";
}