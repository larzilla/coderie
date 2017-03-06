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
      encodedSvg = encodedSvg.replace(badChars, encodeURIComponent);
  var cssBg = 'background-image: url("data:image/svg+xml,' + encodedSvg + '");';
  
  //Output
  encoded.value = encodedSvg;
  compileIt(cssBg);
  e.preventDefault();
}
function decodeIt(e) {  
  var entry = encoded.value;
  var decodedSvg = decodeURIComponent(entry.replace(/\'/g,  '"'));
  var cssBg = 'background-image: url("data:image/svg+xml,' + entry + '");';
  
  //Output
  raw.value = decodedSvg;
  compileIt(cssBg);
  e.preventDefault();
}
function compileIt(cssBg) {
  compiled.value = cssBg;
  output.setAttribute("style", cssBg);
}

//Scheme color
function changeScheme() {
 output.parentElement.classList.toggle("dark");
}


