/**
*@name MinimizeServerSidebar
*@author Tegze
*@description Shows the server sidebar on hover. This plugin may cause issues with apps that change the size or position of the sidebar.
*@version 1.1.1
*@source https://github.com/Tegze/MinimizeServerSidebar
*@authorLink https://twitter.com/qmTegze
**/

module.exports = class MinimizeServerSidebar {
	start() {
		let serverSidebarWidth = "72px"; 				  /* default:72px | Width of the server sidebar */
		let sidebarActivationWidth = "50px";		 	  /* default:50px | Width to make the server sidebar pop out */
		let serverSidebarColor = "rgba(32, 34, 37, .97)"; /* default:rgba(32, 34, 37, 1) | Background color of the server sidebar */ 
		
		BdApi.injectCSS("MinimizeServerSidebarCSS",
		`
		.guilds-2JjMmN {
			position: absolute;
			width: calc(${serverSidebarWidth} + ${sidebarActivationWidth});
 			height: calc(100% - 52px);
			z-index: 1000;
			-webkit-transform: translateX(-${serverSidebarWidth});
			-webkit-transition: transform 250ms ease-in-out;
			background: linear-gradient(90deg, ${serverSidebarColor} ${serverSidebarWidth}, transparent ${sidebarActivationWidth});
		}
		.guilds-2JjMmN:hover {
			-webkit-transform: translateX(0);
			-webkit-transition: transform 250ms ease-in-out;
		}
		`);
	}

	stop() {
		BdApi.clearCSS("MinimizeServerSidebarCSS");
	}
}