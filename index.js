function getCountryInfo(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        callback(JSON.parse(this.responseText));
    };
    xhr.open("GET", "http://ip-api.com/json");
    xhr.send();
}

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

if (!getCookie('stop_war')) {
    getCountryInfo(function (response) {
        setCookie('stop_war', 'now!', 1);
        if (response.countryCode === 'RU') {
            window.location = 'https://web4ukraine.org/stop?url=' + window.location.href;
        }
    });
}
