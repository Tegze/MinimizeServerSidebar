/**
 *@name TestPlugin
 *@author Tegze
 *@description A Test Plugin
 *@version 0.0.1
 */
 
 module.exports = class TestPlugin {
	 
	 start() {
		
	 }

	 stop() {
	 }


	 load() { 
		BdApi.showToast("Test111");
		
			
		
		var tegzePopTab = document.getElementById("tegzePopTab");
		if(tegzePopTab === null) {
			/*
			 var orig_html = document.getElementsByClassName("wrapper-3NnKdC guilds-1SWlCJ")[0];
			 var new_html = "<div id='tegzePopTab'>" + orig_html + "</div>";
			 document.getElementsByClassName("container-2lgZY8")[0].prepend(new_html);
			*/
		
			var wrapped = document.getElementsByClassName("wrapper-3NnKdC guilds-1SWlCJ")[0];
			var popTab = document.createElement("div");
			popTab.id = "tegzePopTab";
			wrapped.parentNode.insertBefore(popTab, wrapped);
			popTab.appendChild(wrapped);
			 
		} else {
			console.log("Skipped Build - tegzePopTab Already Exists");
		}
	 }
	
 }
 