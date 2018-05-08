console.log("Background is running");
chrome.browserAction.onClicked.addListener(function (tab) { //listener detecting if the logo button is clicked
  var msg = "true"; //message to be send to the content.js
  chrome.tabs.sendMessage(tab.id, msg); //Sends message to content.js
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) { //Listener listening for updates in the content
  var msg = "true"; //message to be send to the content.js
  chrome.tabs.sendMessage(tab.id, msg); //Sends message to content.js
});
