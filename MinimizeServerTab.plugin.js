/**
*@name MinimizeServerTab
*@author Tegze
*@description Shows the server selector tab on hover. This plugin may cause issues with apps that change the size or position of the side bar.
*@version 1.1.0
*@authorLink https://twitter.com/qmTegze
**/

module.exports = class MinimizeServerTab {

	start() {
		BdApi.injectCSS("MinimizeServerTabCSS",
		`
		.guilds-2JjMmN {
			position: absolute;
			width: calc(72px + 50px);  				/* 72 is length of sever bar, 50px is the overlap */
 			height: calc(100% - 52px);
			z-index: 1000;							/* change this if z-index overlap issues */
			-webkit-transform: translateX(-72px);   /* 72 is length of sever bar */
			-webkit-transition: transform 250ms ease-in-out;
			--background-tertiary: transparent;
			background: linear-gradient(90deg, rgba(32, 34, 37, 1) 72px, transparent 50px);  /* rgba is background color, 72 is length of sever bar, 50px is the overlap */
		}
		.guilds-2JjMmN:hover {
			-webkit-transform: translateX(0%);
			-webkit-transition: transform 250ms ease-in-out;
		}
		`);
	}

	stop() {
		BdApi.clearCSS("MinimizeServerTabCSS");
	}
}