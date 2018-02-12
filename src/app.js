import "./styles/base/normalize.styl";
import "./styles/base/reset.styl";
import "./styles/base/util.styl";
import "./styles/base/icons.styl";
import "./styles/header.styl";
import "./styles/editor.styl";
import "./styles/preview.styl";

import photo from "./images/you-dont-know-js.jpg";

const brightness = document.getElementById("brightness"),
      contrast = document.getElementById("contrast"),
      imageContainer = document.getElementById("image-preview"),
      filtersInputs = document.getElementsByClassName("filter-range");

const img = document.createElement("img");
img.setAttribute("src", photo);
img.className = "preview__image";
imageContainer.appendChild(img);

function defaultFilters() {
    for(let i = 0; i < filtersInputs.length; i++) {
        imageContainer.style.setProperty(`--${filtersInputs[i].id}`, "1");
    }
}

defaultFilters();

let val = null;

function update(filter, unit) {
    let newval = + filter.value;

    let unitValue = unit ? unit : "";

    if(val !== newval ) {
        imageContainer.style.setProperty(`--${filter.id}`, `${val = newval}${unitValue}`);
    }
}

function brightnessF() {
    update(brightness);
}

function contrastF() {
    update(contrast);
}

function grayscaleF() {
    update(grayscale);
}

function invertF() {
    update(invert);
}


brightness.addEventListener("input", brightnessF, false);
brightness.addEventListener("input", brightnessF, false);

contrast.addEventListener("input", contrastF, false);
contrast.addEventListener("input", contrastF, false);

grayscale.addEventListener("input", grayscaleF, false);
grayscale.addEventListener("input", grayscaleF, false);

invert.addEventListener("input", invertF, false);
invert.addEventListener("input", invertF, false);