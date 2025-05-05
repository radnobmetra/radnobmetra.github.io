

const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
let fontSize = 16;

textInput.addEventListener('input', function () {
  output.textContent = textInput.value;
});


function makeBigger(){
    //alert("Hello, world!");
    //document.getElementById("userInput").style.propertyName = "value";
    fontSize += 2;
    output.style.fontSize = fontSize + 'px';
}

    