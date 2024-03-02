'use strict';

import { dcreate } from '/assets/js/dom.js';

const elements = {};

const domMapping = () => {
    elements.btnWuerfeln = document.querySelector("#btnWuerfeln");
    elements.taOut = document.querySelector("#taOutput");
}

const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min);

const wuerfeln = () => {
    const wuerfel = parseInt(document.querySelector("#wuerfel").value);
    const offset = parseInt(document.querySelector("#offset").value);
    const max = 6 + offset - 1;
    let summe = 0;
    let strOut = "";
    for (let cnt = 1; cnt <= wuerfel; cnt++) {
        const randNumber = createNumber(offset, max);
        strOut += `Würfel ${cnt}: ${randNumber}.\r\n`;
        summe += randNumber;
    }
    strOut += `\r\nErgebnis: ${summe}.\r\n`;
    renderSite(strOut);
}

const appendEventlisteners = () => {
    elements.btnWuerfeln.addEventListener('click', wuerfeln);
}

const renderSite = strOut => {
    elements.taOut.innerHTML = "";
    elements.taOut.value = strOut;
}

const init = () => {
    domMapping();
    appendEventlisteners();
}

init();


