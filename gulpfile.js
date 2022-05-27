const { src, watch, dest, series } = require("gulp");
const sass = require("gulp-sass")((require('sass')));
const csscomb = require("gulp-csscomb");
const autoPrefixer = require("gulp-autoprefixer");
const plumberNotifier = require("gulp-plumber-notifier");


const AUTOPREFIXER_BROWSERS = [
	"last 2 version",
	"> 1%",
	"ie >= 9",
	"ie_mob >= 10",
	"ff >= 30",
	"chrome >= 34",
	"safari >= 7",
	"opera >= 23",
	"ios >= 7",
	"android >= 4",
	"bb >= 10",
];

const frontendSassFiles = "assets/css/styles.scss";

function makeFrontendCSS() {
	return src(frontendSassFiles)
		.pipe(plumberNotifier())
		.pipe(sass())
		.pipe(autoPrefixer(AUTOPREFIXER_BROWSERS))
		.pipe(csscomb())
		.pipe(dest("assets/css"));
}

function startWatching() {
	watch(frontendSassFiles, makeFrontendCSS);
}

exports.default = series(
	makeFrontendCSS,
	startWatching
);