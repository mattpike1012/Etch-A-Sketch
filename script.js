for (var i = 0; i < 16; i++){
    var rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    var columnContainer;
    for (var j = 0; j < 16; j++){
        columnContainer = document.createElement('div');
        columnContainer.classList.add('box');
        rowContainer.appendChild(columnContainer);
    }
    document.querySelector(".container").appendChild(rowContainer);
}

var boxes = document.querySelectorAll('.box');
var boxesArr = Array.from(boxes);

boxesArr.forEach(element => {
    element.addEventListener('mouseover', function() {
        element.classList.add('hover');
    });
});