//Helpers
var t = document.getElementById.bind(document),
    theTaco = t('taco'),
    raw = t('raw'),
    encoded = t('encoded'),
    compiled = t('compiled'),
    output = t('output'),
    switchBox = t('switchbox'),
    badChars = /[-~<>&#%\r\n\t]/g;
    
function encodeIt(e) {  
  var entry = raw.value;
  var encodedSvg = entry.replace(/\"/g, "'");
      encodedSvg = encodedSvg.replace(badChars, escape);
  var cssBg = 'background-image: url("data:image/svg+xml,' + encodedSvg + '");';
  
  //Output
  encoded.value = encodedSvg;
  compiled.value = cssBg;
  output.setAttribute("style", cssBg);
}

document.getElementById('editableDiv').addEventListener('paste', handlePaste);

//Scheme color
function changeScheme() {
 output.parentElement.classList.toggle("dark");
}

//Copy to clipboard


