var gulp = require('gulp');
		connect = require('gulp-connect');

// 定义 webserver 任务
gulp.task('webserver', function() {
  connect.server({
  	livereload: true,
  	port: 80,
  	host: 'gulp.dev'
  });
});

// 定义 watch 任务
// gulp.task('watch', function() {
//   gulp.watch('/');
// })

gulp.task('default', ['webserver']);