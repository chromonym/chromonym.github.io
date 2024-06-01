/*function getCookie(cname) {
    let name = cname + "=";
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
}*/

function openMenu() {
    document.getElementsByTagName("header")[0].classList.toggle("open");
    document.getElementById("mobileNav").classList.toggle("open");
}

function switchTheme(old=null) {
    let thm = sessionStorage.getItem("theme");
    let body = document.getElementsByTagName("body").item(0);
    let themeDrop = (document.getElementById("theme")||{});
    if (old) {body.classList.remove(old);}
    if (thm == "light") {
        themeDrop.value = "light";
        body.classList.add("light");
    } else if (thm == "gradient") {
        themeDrop.value = "gradient";
        body.classList.add("gradient");
    } else {
        themeDrop.value = "dark";
        body.classList.add("dark");
    }
    (document.getElementById("interestPopup")||{}).contentWindow.switchTheme(old);
    sessionStorage.setItem("theme",thm);
}

var popup = "";

function interestPopup(link) {
    if (window.innerWidth < 670 && popup) {
        document.getElementById('iPopupBorder').style.display = "none";
        document.getElementById('interestBody').style.width = "100%";
        document.getElementById(popup).classList.remove("active");
        if (popup == link) {
            popup = "";
            return false;
        } else {
            popup = "";
            return true;
        }
    } else if (window.innerWidth >= 670) {
        if (document.getElementById('iPopupBorder').style.display == "none" || !document.getElementById('iPopupBorder').style.display) {
            document.getElementById('iPopupBorder').style.display = "block";
            document.getElementById('interestBody').style.width = "50%";
            document.getElementById(link).classList.add("active");
            popup = link;
        } else if (popup == link) {
            document.getElementById('iPopupBorder').style.display = "none";
            document.getElementById('interestBody').style.width = "100%";
            document.getElementById(popup).classList.remove("active");
            popup = "";
        } else {
            document.getElementById(link).classList.add("active");
            if (popup) {
                document.getElementById(popup).classList.remove("active");
            }
            popup = link;
        }
        document.getElementById("interestPopup").src = "./"+link+".html";
        console.log(document.getElementById("interestPopup").src);
        return false;
    } else {
        return true;
    }
}

var opened = false;

function pageFirstLoad() {
    if (!sessionStorage.getItem("theme")) {
        sessionStorage.setItem("theme","dark");
    }
    switchTheme();
}

document.addEventListener('DOMContentLoaded', pageFirstLoad);

(document.getElementById('theme')||{}).onchange = function () {
    let old = sessionStorage.getItem("theme");
    sessionStorage.setItem("theme", document.getElementById("theme").value);
    switchTheme(old);
}