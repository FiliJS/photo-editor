import "./styles/base/normalize.styl";
import "./styles/base/reset.styl";
import "./styles/base/util.styl";
import "./styles/base/icons.styl";
import "./styles/header.styl";
import "./styles/editor.styl";
import "./styles/preview.styl";

import photo from "./images/you-dont-know-js.jpg";

const inputBlur = document.getElementById("blur"),
      inputBrightness = document.getElementById("brightness"),
      imageContainer = document.getElementById("image-preview"),
      filtersInputs = document.getElementsByClassName("filterInput");

const img = document.createElement("img");
img.setAttribute("src", photo);
img.className = "preview__image";
imageContainer.appendChild(img);

let val = null;

function defaultFilters() {
    for(let i = 0; i < filtersInputs.length; i++) {
        imageContainer.style.setProperty(`--${filtersInputs[i].id}`, "1");
    }
}

defaultFilters();

function update(filter, unit) {
    let newval = + filter.value;

    let unitValue = unit ? unit : "";

    if(val !== newval ) {
        imageContainer.style.setProperty(`--${filter.id}`, `${val = newval}${unitValue}`);
    }
}

function blur() {
    update(inputBlur);
}

function brightness() {
    update(inputBrightness);
}

inputBlur.addEventListener("input", blur, false);
inputBlur.addEventListener("input", blur, false);

inputBrightness.addEventListener("input", brightness, false);
inputBrightness.addEventListener("input", brightness, false);