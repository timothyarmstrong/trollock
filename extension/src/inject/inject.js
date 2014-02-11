var keyCounter = 0;
var disabled = false;

function sendMessageToExtension() {
  if (!disabled) {
    chrome.extension.sendMessage({}, function(response) {
      console.log('Sent message to lock computer.');
    });
    disabled = true;
  }
}

setTimeout(function() {

  document.body.addEventListener('keydown', function(e) {
    if (e.keyCode == 17) {
      keyCounter++;
      if (keyCounter >= 5) {
        disabled = true;
        alert('disabled');
      }
    } else {
      sendMessageToExtension();
    }
  }, false);

  document.body.addEventListener('mousemove', sendMessageToExtension, false);

}, 2000);

alert('okay');
