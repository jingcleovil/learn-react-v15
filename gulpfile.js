var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";
elixir.config.sourcemaps = false;

elixir(function(mix){
    var nodemodules = "node_modules/";
    var bower = "bower_components/";
    var sourceJs = "src/client/js/";
    var sourceCss = "src/client/css/";
    var sourceSass = "src/client/sass/";
    var distFile = "dist/";
    var inProduction = elixir.config.production;

    if(inProduction) {
        commonStyles.push('style.css');
    }

    mix
        .sass(['style.scss'], sourceCss + 'style.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(bower + 'font-awesome/fonts', distFile + '/fonts/font-awesome')
        
        .styles([
           'style.css',
        ],'dist/css/common.min.css');
});
