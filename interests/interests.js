window.onload = function() {
    if (!window.frameElement) {
        for (element of document.getElementsByClassName("iframed")) {
            element.classList.toggle("hidden");
        }
    }
}

function clickOut(link) {
    if (window.frameElement) {
        // window is inside an iframe
        console.log("swapping");
        return parent.interestPopup(link);
    } else {
        // window is not in an iframe
        return true;
    }
}