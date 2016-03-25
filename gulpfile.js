var elixir = require('laravel-elixir');
var bump = require('gulp-bump');
var gulp = require('gulp');

elixir.config.assetsPath = "src/client"
elixir.config.publicPath="dist";

elixir(function(mix){
    var nodemodules = "node_modules/";
    var bower = "bower_components/";
    var sourceJs = "src/client/js/";
    var sourceCss = "src/client/css/";
    var distFile = "dist/";
    var inProduction = elixir.config.production;

    var commonStyles = [
        'fixed-data-table.min.css',
        'font-awesome.min.css',
        'select.css',
        'theme.css',
        'admin-forms.css',
        'override.css',
        'responsive.css'
    ];

    if(inProduction) {
        commonStyles.push('style.css');
    }

    mix
        .copy(bower + 'accounting.js/accounting.min.js', sourceJs + 'accounting.min.js')
        .copy(bower + 'Uploadcare/uploadcare.full.min.js', sourceJs + 'uploadcare.min.js')
        .copy(nodemodules + 'fixed-data-table/dist/fixed-data-table.min.css', sourceCss + 'fixed-data-table.min.css')
        .copy(bower + 'font-awesome/css/font-awesome.min.css', sourceCss + 'font-awesome.min.css')
        .copy(bower + 'font-awesome/fonts', distFile + '/fonts/font-awesome')
        .styles(commonStyles,'dist/css/common.min.css')

        .scripts([
            'accounting.min.js'
        ], 'dist/js/common.min.js')

        .scripts([
            'uploadcare.min.js',
        ], 'dist/js/uploadcare.min.js')
});

gulp.task('bump', function(){
    gulp.src(['./deploy.json'])
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});
