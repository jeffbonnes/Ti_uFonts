// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');

// Load the fonts
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

for (var fontName in ufonts.fonts) {
	var label = Ti.UI.createLabel({
		color : '#333',
		text : fontName,
		font : {
			fontSize : 20,
			fontFamily : fontName
		}
	});
	scrollView.add(label);
}

// create tab group
var tabGroup = Ti.UI.createTabGroup();
//
//  add tabs
//
var tab1 = Ti.UI.createTab({
	icon : 'KS_nav_ui.png',
	title : 'uFonts',
	window : win
});

tabGroup.addTab(tab1);

// open tab group
tabGroup.open();
