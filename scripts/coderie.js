const getElement = document.getElementById.bind(document);
let formElements = {
  rawSvg: getElement('rawSvg'),
  encoded: encoded = getElement('encoded'),
  compiled: getElement('compiled'),
  output: getElement('output')
}

function encodeIt(e) { 
  const { rawSvg } = formElements;
  var encodedSvg = replaceBadChars(input.value);
  
  rawSvg.value = encodedSvg;
  compileIt(encodedSvg);
  e.preventDefault();

}

function decodeIt(e) {  
  const { rawSvg, encoded } = formElements;
  var entry = encoded.value;
  var decodedSvg = decodeURIComponent(entry.replace(/\'/g,  '"'));
  
  rawSvg.value = decodedSvg;
  compileIt(entry);
  e.preventDefault();
}

function replaceBadChars(input) {
  const badChars = /[-~<>&#%\r\n\t]/g;
  var result = input.replace(/\"/g, "'");
  result = result.replace(badChars, encodeURIComponent);
  return result;
}

function compileIt(input) {
  const { compiled, output } = formElements;
  const cssBg = 'background-image: url("data:image/svg+xml,' + input + '");';

  compiled.value = cssBg;
  output.setAttribute("style", cssBg);
}

function switchContrast() {
  let box = getElement('lightbox');
  box.classList.toggle("dark");
}


