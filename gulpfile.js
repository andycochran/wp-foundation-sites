// Include gulp & plugins
var gulp = require('gulp'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    });

// Compile, autoprefix, minify SASS
gulp.task('styles', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9'],
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css/'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./assets/css/'))
});

// Concat, minify custom JavaScript
gulp.task('scripts', function() {
  return gulp.src([
      './assets/js/scripts/*.js'
    ])
    .pipe(plugins.babel({
        'presets': ['es2015']
    }))
    .pipe(plugins.concat('scripts.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./assets/js'))
});

// Concat, minify Foundation's JavaScript
gulp.task('foundation-js', function() {
  return gulp.src([
      // Required if you need any components
      './bower_components/what-input/what-input.js',
      './bower_components/foundation-sites/js/foundation.core.js',
      './bower_components/foundation-sites/js/foundation.util.*.js',

      // Uncomment the components you need:
      './bower_components/foundation-sites/js/foundation.abide.js',
      './bower_components/foundation-sites/js/foundation.accordion.js',
      './bower_components/foundation-sites/js/foundation.accordionMenu.js',
      './bower_components/foundation-sites/js/foundation.drilldown.js',
      './bower_components/foundation-sites/js/foundation.dropdown.js',
      './bower_components/foundation-sites/js/foundation.dropdownMenu.js',
      './bower_components/foundation-sites/js/foundation.equalizer.js',
      './bower_components/foundation-sites/js/foundation.interchange.js',
      './bower_components/foundation-sites/js/foundation.magellan.js',
      './bower_components/foundation-sites/js/foundation.offcanvas.js',
      './bower_components/foundation-sites/js/foundation.orbit.js',
      './bower_components/foundation-sites/js/foundation.responsiveMenu.js',
      './bower_components/foundation-sites/js/foundation.responsiveToggle.js',
      './bower_components/foundation-sites/js/foundation.reveal.js',
      './bower_components/foundation-sites/js/foundation.slider.js',
      './bower_components/foundation-sites/js/foundation.sticky.js',
      './bower_components/foundation-sites/js/foundation.tabs.js',
      './bower_components/foundation-sites/js/foundation.toggler.js',
      './bower_components/foundation-sites/js/foundation.tooltip.js',
    ])
    .pipe(plugins.babel({
        'presets': ['es2015']
    }))
    .pipe(plugins.concat('foundation.js'))
    .pipe(gulp.dest('./assets/js'))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('./assets/js'))
});

// Create a default task
gulp.task('default', function() {
  gulp.start('styles');
  gulp.start('scripts');
  gulp.start('foundation-js');
});

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('./assets/scss/**/*.scss', ['styles']);
  gulp.watch('./assets/js/scripts/*.js', ['scripts']);
  gulp.watch('./bower_components/foundation-sites/js/*.js', ['foundation-js']);
});
