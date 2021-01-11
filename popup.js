document.addEventListener('DOMContentLoaded', function() {
  var checkFirstButton = document.getElementById('change');
 
  checkFirstButton.addEventListener('click', function() {    
    chrome.tabs.executeScript ({
        code: `
        document.getElementsByClassName("notion-app-inner")[0].style.fontFamily = "Fira Code, " + document.getElementsByClassName("notion-app-inner")[0].style.fontFamily
        `
       });
  }, false);  
}, false);
