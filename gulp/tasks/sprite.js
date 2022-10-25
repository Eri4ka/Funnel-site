import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

export const sprite = () => {
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(cheerio({
			run: function($) {
				$('[fill]').removeAttr('fill');
				$('[stroke]').removeAttr('stroke');
				$('[style]').removeAttr('style');
			},
			parserOptions: { xmlMode: true }
		}))
		.pipe(app.plugins.replace('&gt;', '>'))
		.pipe(svgSprite({
			mode: {
				symbol: {
					sprite: '../icons/sprite.svg',
					// example: true
				}
			},
		}))
		.pipe(app.gulp.dest(`${app.path.build.images}`))
		.pipe(app.plugins.browserSync.stream());
}