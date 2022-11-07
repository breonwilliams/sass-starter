//https://laravel-mix.com/docs/6.0/examples

const mix = require('laravel-mix');

mix.disableSuccessNotifications();
mix.setPublicPath('./dist');

mix.sass('./src/scss/index.scss', '/css')
    .options({
        processCssUrls: false,
    })
    .sourceMaps(true, 'source-map')
    .webpackConfig({devtool: 'source-map'});

//Javascript 
mix.js(['./src/js/main.js',], './js');

//Copy the images to the dist folder
mix.copy('./src/images/', './dist/images/');

//Copy the fonts to the dist folder
mix.copy('./src/fonts/', './dist/fonts/');