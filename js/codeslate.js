var fileTabCount = 0;
var openedTabs= 0;
var untitledCount = 0;
function createNewFile(){
    //responsible for appending a new list item in filesContainer
    addNewExplorerTabeInFilesContainer();

    //responsible for opening a coding screen
    openCodeSlate(fileTabCount);
}

function addNewExplorerTabeInFilesContainer(){
    fileTabCount++;
    openedTabs++;
    untitledCount++;
    var fileName = "Untitled - " + untitledCount;
    $(".filesContainer").append("<li><span class='closeTabIcon'>x</span> <div class='fileNameSpan'>"+fileName+"</div></li>");
}

function openCodeSlate(tabNumber){
    editorId = "codeslate_"+tabNumber;
    codeStatId= "codestat_"+tabNumber;

    var editorStyles = "position:relative;" +
                      "top:0; right:0; bottom:90; left:0"; +
                      "font-size:12pt; font-weight:normal; white-space:nowrap; display:block; z-index:999";

    var editorDesign = "<div class='codeslate' id='"+editorId+"' style='"+editorStyles+"'></div>";
    var codeStatContent = "<div class='codeStat'><div class='currentLang'>JAVASCRIPT</div></div>";
    editorDesign += codeStatContent;

    //$(".editorContainer").append(editorDesign);
}