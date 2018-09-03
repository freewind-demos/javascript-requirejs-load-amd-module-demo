define([], function () {
    return {
        showInPage: function (elementId) {
            document.getElementById(elementId).innerText = 'Hello, RequireJS (from hello-module)'
        }
    }
})