const colorOptions = [
    "Black",
    "Red",
    "Green",
    "Blue",
    "OD Green",
    "White",
    "Matrix Green"
]

const formatOptions = [
    "png",
    "jpeg",
    "gif",
    "svg"
]

function generateBgColorSelect() {
    const selectBgColor = document.querySelectorAll("#bgColorSelect");

    selectBgColor.forEach(selectBgColor => {
        selectBgColor.innerHTML = "";

        // Setting the default option
        const defaultBgColor = document.createElement("option");
        defaultBgColor.value = "";
        defaultBgColor.textContent = "Background Color";
        defaultBgColor.disabled = true;
        defaultBgColor.selected = true;
        selectBgColor.appendChild(defaultBgColor);

        // Loop to generate the options
        for (let i = 0; i < colorOptions.length; i++) {
            const bgOption = document.createElement("option");
            bgOption.value = colorOptions[i];
            bgOption.textContent = colorOptions[i];
            selectBgColor.appendChild(bgOption);
        }
    });
}

function generateCodeColorSelect() {
    const selectElements = document.querySelectorAll("#codeColorSelect");

    selectElements.forEach(selectElement => {
        selectElement.innerHTML = "";

        // Setting the default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Code Color";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        selectElement.appendChild(defaultOption);

        // Loop to generate the options
        for (let i = 0; i < colorOptions.length; i++) {
            const option = document.createElement("option");
            option.value = colorOptions[i];
            option.textContent = colorOptions[i];
            selectElement.appendChild(option);
        }
    });
}

function generateFormatSelect() {
    const selectElements = document.querySelectorAll("#formatSelect");

    selectElements.forEach(selectElement => {
        selectElement.innerHTML = "";

        // Setting the default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Image Format";
        defaultOption.disabled = true;
        defaultOption.selected = true;
        selectElement.appendChild(defaultOption);

        // Loop to generate the options
        for (let i = 0; i < formatOptions.length; i++) {
            const option = document.createElement("option");
            option.value = formatOptions[i];
            option.textContent = formatOptions[i];
            selectElement.appendChild(option);
        }
    });
}

document.addEventListener("DOMContentLoaded", generateBgColorSelect);
document.addEventListener("DOMContentLoaded", generateCodeColorSelect);
document.addEventListener("DOMContentLoaded", generateFormatSelect);
