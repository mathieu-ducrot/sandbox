// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
// the project directory where all compiled assets will be stored
    .setOutputPath('web/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')

    // will create web/build/app.js and web/build/app.css
    .addStyleEntry('admin/main', './assets/admin/styles/main.scss')

    // allow sass/scss files to be processed
    // https://symfony.com/doc/3.4/frontend/encore/bootstrap.html
    .enableSassLoader(function(sassOptions) {
        // https://github.com/sass/node-sass#options
        sassOptions.includePaths = ['vendor']
    }, {
        resolveUrlLoader: false
    })


    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    // empty the outputPath dir before each build
    .cleanupOutputBeforeBuild()

    // show OS notifications when builds finish/fail
    .enableBuildNotifications()

    // create hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())
;

// export the final configuration
module.exports = Encore.getWebpackConfig();