const { app, ipcMain } = require('electron');
const fileUrl = require('file-url');
const BrowserLikeWindow = require('../index');

let browser;
let child;
function createWindow() {
  browser = new BrowserLikeWindow({
    controlHeight: 50,
    controlPanel: fileUrl(`${__dirname}/renderer/control.html`),
    workspacePanel: fileUrl(`${__dirname}/renderer/workspace.html`),
    startPage: 'https://google.com',
    // startPage: '',
    blankTitle: 'New tab',
    debug: true // will open controlPanel's devtools
  });

  browser.on('closed', () => {
    browser = null;
    child = null;
  });
}

app.on('ready', async () => {
  createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (browser === null) {
    createWindow();
  }
});

ipcMain.on('close-all', (evt, arg) => {
  app.quit()
})
