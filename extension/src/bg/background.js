console.log('background running');

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('got message');
  var url = 'http://localhost:1337/TROLLOCK';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
});

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('browserAction clicked');
  chrome.tabs.executeScript({
    file: '/src/inject/inject.js'
  });
});
