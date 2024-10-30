const { app, BrowserWindow } = require("electron")

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadURL("https://voxiom.io")
}

app.commandLine.appendSwitch("disable-frame-rate-limit")
app.whenReady().then(createWindow)