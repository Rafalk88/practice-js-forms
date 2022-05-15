document.addEventListener('DOMContentLoaded', init);

function init() {
    const boxElement = document.querySelector('.box');
    setBoxShadow(boxElement, '#000000');

    const panelEl = document.querySelector('.panel')
    const colorEl = panelEl.children.color
    const opacityEl = panelEl.children.opacity

    colorEl.addEventListener('change', changeColorAndOrOpacity)
    opacityEl.addEventListener('change', changeColorAndOrOpacity)
    opacityEl.addEventListener('mousemove', changeColorAndOrOpacity)

    function changeColorAndOrOpacity() {

        const color = colorEl.value
        const opacity = opacityEl.value / 100
       
        setBoxShadow(boxElement, color, opacity)

    }

}

function setBoxShadow(element, colorInHex, opacity = 1) {
    const colorInRGBA = `rgba(
        ${getChannelColor(colorInHex, 'red')}, 
        ${getChannelColor(colorInHex, 'green')}, 
        ${getChannelColor(colorInHex, 'blue')}, 
        ${opacity}
    )`;

    element.style.boxShadow = `0 0 5px 5px ${colorInRGBA}`;
}


function getChannelColor(colorInHex, channelName) {
    let start;
    switch(channelName) {
        case 'red':
            start = 1;
            break;
        case 'green':
            start = 3;
            break;
        case 'blue':
            start = 5;
            break;
    }

    const channelColorHex = colorInHex.substr(start, 2);
    const channelColorDec = parseInt(channelColorHex, 16);

    return channelColorDec; 
}


