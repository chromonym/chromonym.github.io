function getCookie(cname) {
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
}

function openMenu() {
    document.getElementsByTagName("header")[0].classList.toggle("open");
    document.getElementById("mobileNav").classList.toggle("open");
}

function switchTheme(thm) {
    if (thm == "light") {
        document.getElementById('theme_css').href = document.getElementById('theme_css').href.replace("gradient","light").replace("dark","light");
        document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href = document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href.replace("gradient","light").replace("dark","light");
        document.getElementById("theme").value = "light";
        document.cookie = "theme=light; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
        return "light";
    } else if (thm == "gradient") {
        document.getElementById('theme_css').href = document.getElementById('theme_css').href.replace("light","gradient").replace("dark","gradient");
        document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href = document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href.replace("light","gradient").replace("dark","gradient");
        document.getElementById("theme").value = "gradient";
        document.cookie = "theme=gradient; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
        return "gradient";
    } else {
        document.getElementById('theme_css').href = document.getElementById('theme_css').href.replace("light","dark").replace("gradient","dark");
        document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href = document.getElementById('interestPopup').contentWindow.document.getElementById('theme_css').href.replace("light","dark").replace("gradient","dark");
        document.getElementById("theme").value = "dark";
        document.cookie = "theme=dark; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;";
        return "dark";
    }
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

var theme = "dark";
var opened = false;

window.onload = function () {
    let thm = getCookie("theme");
    theme = switchTheme(thm);
};

document.getElementById('theme').onchange = function () {
    theme = document.getElementById("theme").value;
    switchTheme(theme);
}