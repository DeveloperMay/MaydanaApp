const electron = require('electron')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

let icon = path.join(__dirname, 'logo.png');

function createWindow () {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1200,
		height: 900,
		icon: icon
	});

	//mainWindow.webContents.openDevTools();

	mainWindow.loadURL(`file://${__dirname}/app/index.html`)

	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {

	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {

	if (mainWindow === null) {
		createWindow()
	}
})