const electron = require('electron');
// This module is to manage your application more efficiently.
const app = electron.app;
// Module to create our browser window.
const BrowserWindow = electron.BrowserWindow;

// Normally you shouldn't use global variables, but, in Electron it's good practice to keep a global variable for your browserwindow to have a base line.
let mainWindow;
let secondaryWindow;

function createWindow() {
    // Create the browser window with some parameters.
    // A full list of parameters can be seen here: http://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions
    mainWindow = new BrowserWindow({
        width: 300,
        height: 300,
        center: true
    });

    // Load the HTML file for your BrowserWindow
    mainWindow.loadURL('file://' + __dirname + '/window1.html');

    // This will be emitted when the window has been closed. Essentially unbinding that mainWindow variable from a BrowserWindow and setting it to null.
    mainWindow.on('closed', function () {

        // Set the variable to null
        mainWindow = null;
    });
};

function createSecondWindow() {
    // Create the browser window with some parameters.
    // A full list of parameters can be seen here: http://electron.atom.io/docs/api/browser-window/#new-browserwindowoptions
    secondaryWindow = new BrowserWindow({
        width: 300,
        height: 300
    });

    // Load the HTML file for your BrowserWindow
    secondaryWindow.loadURL('file://' + __dirname + '/window2.html');

    // This will be emitted when the window has been closed. Essentially unbinding that mainWindow variable from a BrowserWindow and setting it to null.
    secondaryWindow.on('closed', function () {

        // Set the variable to null
        secondaryWindow = null;
    });
};

// This method will be called to create our window on the mainWindow variable.
// Remember that const we set at the top? Well we are going to use that to setup some methods.
app.on('ready', createWindow);
app.on('ready', createSecondWindow);

// Quit when all windows are closed, mainly this is for OSX.
app.on('windows-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    };
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  };
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (secondaryWindow === null) {
    createSecondWindow()
  };
});


// Under this comment is where you would put all of your other main processes that need to run with these electron processes.