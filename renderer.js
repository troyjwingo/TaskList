var app = require('electron').remote
var dialog = app.dialog
var fs = require('fs')

document.getElementById('btn').addEventListener('click', saveFile)
document.getElementById('open').addEventListener('click', openfile)
document.getElementById('over').addEventListener('click', append)

function saveFile(){
    dialog.showSaveDialog((filename)=>{
        if (filename === undefined){
            alert("Yo Dummy, You didn't enter anything...")
            return;
        }

        var content = document.getElementById('content').value

        fs.writeFile(filename, content, (err)=>{
            if (err) console.log(err)
            alert('The file was saved Yo!')
        })

    })

}

function openfile(){
    dialog.showOpenDialog((filenames)=>{
        if (filenames === undefined){
            alert("Yo Dummy, You didn't choose anything...")
            return;
        }

        readFile(filenames[0]);
    })
}

function readFile(filepath){
    fs.readFile(filepath, 'utf-8', (err, data)=>{
        if (err){
            alert('Yo, there was an error retreiving the file')
            return;
        }
        var textArea = document.getElementById('output')
        textArea.value = data
    })
}


