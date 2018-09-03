requirejs.config({
    paths: {
        hello: './hello-amd-module'
    }
})

requirejs(['hello'], function (hello) {
    hello.showInPage('main')
})