var gulp=require("gulp");
var server=require(("gulp-webserver"));

gulp.task("server",function(){
	.pipe(server({
		port:7740,
		proxies:[{
			source:"/user",
			target:"https://localhost:3000/user"
		}]
	}))
})