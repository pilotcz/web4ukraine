(function () {
    function getCountryInfo(callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            callback(JSON.parse(this.responseText));
        };
        xhr.open("GET", "http://ip-api.com/json");
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
        getCountryInfo(function (response) {
            setCookie('stop_war', 'now!', 1);
            if (response.countryCode === 'RU') {
                window.location = 'https://web4ukraine.org/stop?url=' + window.location.href;
            }
        });
    }
}());
