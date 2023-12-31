window.onload = function() {
    if (!window.frameElement) {
        for (element of document.getElementsByClassName("iframed")) {
            element.classList.toggle("hidden");
        }
    }
}