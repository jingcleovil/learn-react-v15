var elixir = require('laravel-elixir');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
    var nodemodules = "node_modules/";
    var bower = "bower_components/";
    var sourceJs = "src/client/js/";
    var sourceCss = "src/client/css/";
    var distFile = "dist/";
    var inProduction = elixir.config.production;

    if(inProduction) {
        commonStyles.push('style.css');
    }

    mix
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(bower + 'font-awesome/fonts', distFile + '/fonts/font-awesome')
        .copy(bower + 'bootstrap/dist/css/bootstrap.min.css', sourceCss + 'bootstrap.min.css')
        .styles(['bootstrap'],'dist/css/common.min.css');
});
