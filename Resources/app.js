Ti.UI.setBackgroundColor('#000');

// Just requiring ufonts will load all the fonts in the /fonts directory
// Remember to rename your fonts  if necessary so the filename matches
//  the PostScript name
var ufonts = require('ufonts');

var win = Ti.UI.createWindow({
	title : 'uFonts',
	backgroundColor : '#fff',
	tabBarHidden : true
});

var scrollView = Ti.UI.createScrollView({
	layout : 'vertical'
});

win.add(scrollView);

// ufonts.fonts will contain all the names of the 
// fonts loaded
for (var fontName in ufonts.fonts) {
	var label = Ti.UI.createLabel({
		color : '#333',
		text : fontName,
		font : {
			fontSize : 24,
			fontFamily : fontName
		}
	});
	scrollView.add(label);
}

// tabGroup to display
var tabGroup = Ti.UI.createTabGroup();
var tab1 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'uFonts',
	window : win
});

tabGroup.addTab(tab1);

// open tab group
tabGroup.open();
