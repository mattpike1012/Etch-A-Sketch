for (var i = 0; i < 16; i++){
    var rowContainer = document.createElement('div');
    var columnContainer;
    for (var j = 0; j < 16; j++){
        columnContainer = document.createElement('div');
        rowContainer.appendChild(columnContainer);
    }
    document.querySelector(".container").appendChild(rowContainer);
}