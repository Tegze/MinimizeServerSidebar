/**
 *@name MinimizeServerTab
 *@author Tegze
 *@description Shows the server selector tab on hover
 *@version 1.0.5
 *@authorLink https://twitter.com/ItsTegze
 **/

module.exports = class MinimizeServerTab {

	start() {
		this.load();
		//container-1eFtFS is "wrapper-1_HaEi guilds-2JjMmN" parent
		// wrapper-1_HaEi guilds-2JjMmN is Servers sidebar
	}

	stop() {
		let minimizeServerTab = document.getElementById("minimizeServerTab");
		let container = document.getElementsByClassName("container-1eFtFS")[0];
		let wrapped = document.getElementsByClassName("wrapper-1_HaEi guilds-2JjMmN")[0];
		container.insertBefore(wrapped, minimizeServerTab);
		minimizeServerTab.remove();
		BdApi.clearCSS("MinimizeServerTabCSS");
	}

	load() {
		let minimizeServerTab = document.getElementById("minimizeServerTab");
		if (minimizeServerTab === null) {
			let wrapped = document.getElementsByClassName("wrapper-1_HaEi guilds-2JjMmN")[0];
			minimizeServerTab = document.createElement("div");
			minimizeServerTab.id = "minimizeServerTab";
			wrapped.parentNode.insertBefore(minimizeServerTab, wrapped);
			minimizeServerTab.appendChild(wrapped);
			
			BdApi.injectCSS("MinimizeServerTabCSS", `
			#minimizeServerTab {
  				position: absolute;
  				width: 40px; 							/*Change px to set the hover hitbox size | Default: 50px*/
 				height: calc(100% - 52px);				/*~~THESE VALUES MUST REMAIN THE SAME~~ Change px to reduce hitbox height | Default: 52px*/
  				z-index: 10;
			}
			#minimizeServerTab:hover .wrapper-1_HaEi {
				-webkit-transform: translateX(0px);
				-webkit-transition: transform 250ms ease-in-out;
			}
			.wrapper-1_HaEi {
  				height: calc(100% + 52px);				/*~~THESE VALUES MUST REMAIN THE SAME~~ Change px to reduce hitbox height | Default: 52px*/
				-webkit-transform: translateX(-100%);
				-webkit-transition: transform 250ms ease-in-out;
			}
			`);
		}
	}
}