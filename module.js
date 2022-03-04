export default function web4ukraine() {
    function getCountryInfo(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            callback(this.responseText);
        };
        xhr.open("GET", "https://ipapi.co/country/");
        xhr.send();
    }

    function setCookie(name, value, expiration) {
        var date = new Date();
        date.setTime(date.getTime() + (expiration * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + "; " + expires + "; path=/";
    }

    function getCookie(name) {
        name = name + "=";
        var response;

        decodeURIComponent(document.cookie)
            .split('; ')
            .forEach(function (val) {
                if (val.indexOf(name) === 0) {
                    response = val.substring(name.length);
                }
            });

        return response;
    }

    if (!getCookie('stop_war')) {
        getCountryInfo(function (countryCode) {
            setCookie('stop_war', 'now!', 1);
            if (countryCode === 'RU') {
                window.location = 'https://web4ukraine.org/stop?url=' + window.location.href;
            }
        });
    }
}