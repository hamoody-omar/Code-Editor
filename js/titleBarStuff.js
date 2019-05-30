const remote = require('electron').remote;

var minimize = document.getElementById("minimize");
var maximize = document.getElementById("maximize");
var quit = document.getElementById("quit");

minimize.addEventListener("click", minimizeApp);
maximize.addEventListener("click", maximizeApp);
quit.addEventListener("click", quitApp);

function minimizeApp()
{
    console.log("cmmmm");
    remote.BrowserWindow.getFocusedWindow().minimize();
}

function maximizeApp()
{
    remote.BrowserWindow.getFocusedWindow().maximize();
}

function quitApp()
{
    remote.getCurrentWindow().close();
}


