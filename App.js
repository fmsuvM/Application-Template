'use strict';
const electron = require('electron');
const {
    app,
    BrowserWindow,
    Menu
} = electron;

let mainWindow = null;

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    // open the developer tool
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createMainWindow();
    // createSubWindow();
});

app.on('window-all-closed', () => {
    if(process.platform != 'darwin'){
        app.quit();
    }
});

app.on('active', () => {
    if(mainWindow === null) createWindow();
});
