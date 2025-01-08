var comp = app.project.activeItem;
if (comp && comp instanceof CompItem) {
    var selectedLayers = comp.selectedLayers;
    
    if (selectedLayers.length > 0) {
        app.beginUndoGroup("Reverse Layer Order");

        for (var i = 0; i < selectedLayers.length; i++) {
            selectedLayers[i].moveToBeginning();
        }

        app.endUndoGroup();
    } else {
        alert("Layer is not selected.");
    }
} else {
    alert("Composition is not active。");
}