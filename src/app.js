import "./styles/editor.styl";
import photo from "./images/you-dont-know-js.jpg";
// import editor from "./js/editor.js";

const inputBlur = document.getElementById("blur"),
      inputBrightness = document.getElementById("brightness"),
      imageContainer = document.getElementById("imageContainer"),
      filtersInputs = document.getElementsByClassName("filterInput");

const img = document.createElement("img");
img.setAttribute("src", photo);
img.className = "filter";
imageContainer.append(img);

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