var isIOS = Ti.Platform.osname == 'ipad' || Ti.Platform.osname == 'iphone';

var font_dir = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "fonts");

var userFonts = {};

function getBaseFileName(file_name) {
	var partsArray = file_name.split('.');
	partsArray = partsArray.splice(0, partsArray.length - 1);
	return partsArray.join('.');
};

function addPSNametoexport(file_name) {
	var baseFileName = getBaseFileName(file_name);
	userFonts[baseFileName] = baseFileName;
};

if (isIOS) {
	exports.registerFont = function(file_name) {
		var fontFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "fonts", file_name);
		require('yy.tidynamicfont').registerFont(fontFile);
		addPSNametoexport(file_name);
	};
} else {
	// Android
	exports.registerFont = function(file_name) {
		addPSNametoexport(file_name);
	};
}

var files = font_dir.getDirectoryListing();
if (files) {
	files.forEach(function(file_name) {
		if (file_name.toLowerCase().match(/\.otf$/) || file_name.toLowerCase().match(/\.ttf$/)) {// assume font
			Ti.API.debug('registering font ' + file_name);
			exports.registerFont(file_name);
		}
	});
};

exports.fonts = userFonts;
