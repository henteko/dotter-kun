customElements.define('dotter-kun',
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = '<link rel="stylesheet" href="https://henteko.github.io/dotter-kun/dotter-kun.css">';

      const header = document.createElement("div");
      header.className = "header";
      const editor = document.createElement("div");
      editor.className = "editor";
      const palette = document.createElement("div");
      palette.className = "palette";
      const footer = document.createElement("div");
      footer.className = "footer";

      shadowRoot.append(header);
      shadowRoot.append(editor);
      shadowRoot.append(palette);
      shadowRoot.append(footer);

      const logo = document.createElement("div");
      logo.className = "logo";
      logo.textContent = "dotter kun";
      header.append(logo);

      const dotArea = document.createElement("div");
      dotArea.className = "dot-area";
      editor.append(dotArea);

      const paletteTitle = document.createElement("div");
      paletteTitle.className = "palette-title";
      paletteTitle.textContent = "Palette";
      const paletteArea = document.createElement("div");
      paletteArea.className = "palette-area";
      palette.append(paletteTitle);
      palette.append(paletteArea);

      const footerText = document.createElement("span");
      footerText.textContent = "Created by ";

      const footerLink = document.createElement("a");
      footerLink.href = "https://henteko07.com";
      footerLink.target = "_blank";
      footerLink.textContent = "henteko";
      footerText.append(footerLink);

      footer.append(footerText);

      // Setup Editor and Palette

      let selectedPalette;

      function setUpDrawAria() {
        for (let i = 0; i < 625; i++) {
          const div = document.createElement("div");
          div.className = "dot";
          div.addEventListener("click", (event) => {
            event.target.style.backgroundColor = selectedPalette.style.backgroundColor;
          });
          dotArea.append(div);
        }
      }

      function setUpPalette() {
        function select(element) {
          if (selectedPalette !== undefined) {
            selectedPalette.style.border = "0.1px solid lightgray";
          }

          selectedPalette = element;
          element.style.border = "3px solid black";
        }

        // Referred to here.
        // https://gist.github.com/raineorshine/10394189
        const colorPalette = ["#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#FF00FF", "#FF00FF", "#BA55D3", "#9370DB", "#8A2BE2", "#9400D3", "#9932CC", "#8B008B", "#800080", "#4B0082", "#483D8B", "#6A5ACD", "#7B68EE", "#FFC0CB", "#FFB6C1", "#FF69B4", "#FF1493", "#DB7093", "#C71585", "#FFA07A", "#FA8072", "#E9967A", "#F08080", "#CD5C5C", "#DC143C", "#B22222", "#8B0000", "#FF0000", "#FF4500", "#FF6347", "#FF7F50", "#FF8C00", "#FFA500", "#FFFF00", "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4B5", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#FFD700", "#FFF8DC", "#FFEBCD", "#FFE4C4", "#FFDEAD", "#F5DEB3", "#DEB887", "#D2B48C", "#BC8F8F", "#F4A460", "#DAA520", "#B8860B", "#CD853F", "#D2691E", "#8B4513", "#A0522D", "#A52A2A", "#800000", "#556B2F", "#808000", "#6B8E23", "#9ACD32", "#32CD32", "#00FF00", "#7CFC00", "#7FFF00", "#ADFF2F", "#00FF7F", "#00FA9A", "#90EE90", "#98FB98", "#8FBC8F", "#3CB371", "#2E8B57", "#228B22", "#008000", "#006400", "#66CDAA", "#00FFFF", "#00FFFF", "#E0FFFF", "#AFEEEE", "#7FFFD4", "#40E0D0", "#48D1CC", "#00CED1", "#20B2AA", "#5F9EA0", "#008B8B", "#008080", "#B0C4DE", "#B0E0E6", "#ADD8E6", "#87CEEB", "#87CEFA", "#00BFFF", "#1E90FF", "#6495ED", "#4682B4", "#4169E1", "#0000FF", "#0000CD", "#00008B", "#000080", "#191970", "#FFFFFF", "#FFFAFA", "#F0FFF0", "#F5FFFA", "#F0FFFF", "#F0F8FF", "#F8F8FF", "#F5F5F5", "#FFF5EE", "#F5F5DC", "#FDF5E6", "#FFFAF0", "#FFFFF0", "#FAEBD7", "#FAF0E6", "#FFF0F5", "#FFE4E1", "#DCDCDC", "#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969", "#778899", "#708090", "#2F4F4F", "#000000"];

        colorPalette.reverse().forEach((element, index) => {
          const div = document.createElement("div");
          div.className = "palette-value";
          div.addEventListener("click", (event) => {
            select(event.target);
          });
          div.style.backgroundColor = element;
          paletteArea.append(div);

          if (index === 0) {
            select(div);
          }
        });

      }

      setUpDrawAria();
      setUpPalette();
    }
  }
);