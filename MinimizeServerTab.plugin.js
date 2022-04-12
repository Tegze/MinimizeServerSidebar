/**
 *@name MinimizeServerTab
 *@author Tegze
 *@description Shows the server selector tab on hover
 *@version 1.0.0
 *@authorLink https://twitter.com/ItsTegze
 **/

module.exports = class MinimizeServerTab {

	start() {
		var minimizeServerTab = document.getElementById("minimizeServerTab");
		if (minimizeServerTab === null) {
			var wrapped = document.getElementsByClassName("wrapper-3NnKdC guilds-1SWlCJ")[0];
			minimizeServerTab = document.createElement("div");
			minimizeServerTab.id = "minimizeServerTab";
			wrapped.parentNode.insertBefore(minimizeServerTab, wrapped);
			minimizeServerTab.appendChild(wrapped);
			
			BdApi.injectCSS("MinimizeServerTabCSS", `
			#minimizeServerTab {
  				position: absolute;
  				width: 50px; 							/*Change px to set the hover hitbox size | Default: 50px*/
 				height: calc(100% - 52px);				/*~~THESE VALUES MUST REMAIN THE SAME~~ Change px to reduce hitbox height | Default: 52px*/
  				z-index: 10;
			}
			#minimizeServerTab:hover .wrapper-3NnKdC {
 				width: 72px;
			}
			#minimizeServerTab:hover ~ .base-3dtUhz {
  				padding-left: 72px;
			}
			.wrapper-3NnKdC:hover {
  				width: 72px;
			}
			.wrapper-3NnKdC {
  				height: calc(100% + 52px);				/*~~THESE VALUES MUST REMAIN THE SAME~~ Change px to reduce hitbox height | Default: 52px*/
  				width: 0px;
		`);
		}
	}

	stop() {
		var minimizeServerTab = document.getElementById("minimizeServerTab");
		var container = document.getElementsByClassName("container-2lgZY8")[0];
		var wrapped = document.getElementsByClassName("wrapper-3NnKdC guilds-1SWlCJ")[0];
		container.insertBefore(wrapped, minimizeServerTab);
		minimizeServerTab.remove();
		BdApi.clearCSS("MinimizeServerTabCSS");
	}
}