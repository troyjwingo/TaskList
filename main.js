const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const Menu = electron.Menu

app.on('ready', function(){
    //console.log('electron is running!')
    mainWindow = new BrowserWindow({
        width:500,
        height:500

    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu)

})

const template = [
    {
        label: electron.app.getName(),
        submenu: [
            {label: 'Add Task'},   
            {label: 'Remove Task'},
            {type: 'separator'}, 
            {label: 'Quit',
            click: _=>{
                app.quit()
            },
            accelerator: 'Ctrl+Q'
            }
        ]
    },{label: "Dev Tools",
       click: function(item, focusedWindow){
           focusedWindow.toggleDevTools()
       }
}
]


