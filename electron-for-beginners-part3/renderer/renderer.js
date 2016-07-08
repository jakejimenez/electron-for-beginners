// Renderer process BrowserWindow module from Electron
const {BrowserWindow} = require('electron').remote;
let secondWindow;

function createSecondWindow() {
    let secondWindow = new BrowserWindow({
        width: 300,
        height: 300
    });

    secondWindow.loadURL('file://' + __dirname + '/window2.html');
}

var button = document.getElementById('open-window-two');

button.onclick = function() {
    createSecondWindow();
};

