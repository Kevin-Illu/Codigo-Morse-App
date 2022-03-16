const { app, BrowserWindow } = require('electron');

if (process.env.NODE_ENV !== 'production') {
    require('electron-reload')(__dirname, {
        // electron: path.join(__dirname, './node_modules', '.bin', 'electron')
    })
}


const createWindow = () => {
    const win = new BrowserWindow({
        widht: 800,
        height: 600,
        title: 'MorseApp',
    })
    // win.setMenu(null);
    win.loadFile('index.html');
}



app.whenReady().then(() => {
    createWindow();
})

// Salir de la aplicacion cuando todas las ventanas esten serradas
// (Windows y Linux)
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
})

