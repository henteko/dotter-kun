let selectedPalette;

function setUpDrawAria() {
  function draw() {
    this.style.backgroundColor = selectedPalette.style.backgroundColor;
  }

  for (let i = 0; i < 625; i++) {
    const div = document.createElement("div");
    div.className = "dot";
    div.addEventListener("click", draw);
    document.querySelector("#dot-area").append(div);
  }
}

function setUpPalette() {
  function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function convertRGBtoHex(red, green, blue) {
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
  }

  function select() {
    selectedPalette.style.border = "initial";

    selectedPalette = this;
    this.style.border = "3px solid black";
  }

  const colorPalette = [];
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 6; k++) {
        colorPalette.push(convertRGBtoHex(k*51, j*51, i*51));
      }
    }
  }

  colorPalette.forEach((element, index) => {
    const div = document.createElement("div");
    div.className = "palette-value";
    div.addEventListener("click", select);
    div.style.backgroundColor = element;
    document.querySelector(".palette").append(div);

    if (index === 0) { selectedPalette = div; }
  });

}

setUpDrawAria();
setUpPalette();