requirejs.config({
    paths: {
        hello: './hello-module'
    }
})

requirejs(['hello'], function (hello) {
    hello.showInPage('main')
})