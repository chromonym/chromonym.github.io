function getCookie(cname) {
    let name = cname + "=";
    console.log(document.cookie);
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function openMenu() {
    document.getElementsByTagName("header")[0].classList.toggle("open");
}

var theme = "dark";
var opened = false;

window.onload = function () {
    let thm = getCookie("theme");
    if (thm == "light") {
        document.getElementById('theme_css').href = "./themes/light.css";
        document.getElementById("theme").value = "light";
        theme = "light";
    } else if (thm == "gradient") {
        console.log("a");
        document.getElementById('theme_css').href = "./themes/gradient.css";
        document.getElementById("theme").value = "gradient";
        theme = "gradient";
    } else {
        console.log("a");
        document.getElementById('theme_css').href = "./themes/dark.css";
        document.getElementById("theme").value = "dark";
        theme = "dark";
    }
};

document.getElementById('theme').onchange = function () {
    theme = document.getElementById("theme").value;
    if (theme == "light") {
        document.getElementById('theme_css').href = "./themes/light.css";
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
    } else if (theme == "gradient") {
        document.getElementById('theme_css').href = "./themes/gradient.css";
        document.cookie = "theme=gradient; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
    } else if (theme == "dark") {
        document.getElementById('theme_css').href = "./themes/dark.css";
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
    }
}