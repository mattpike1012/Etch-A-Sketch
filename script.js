function createGrid(size){
    var width = screen.width / size + "px";
    var height = screen.height / size + "px";
    for (var i = 0; i < size; i++){
        var rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        var columnContainer;
        for (var j = 0; j < size; j++){
            columnContainer = document.createElement('div');
            columnContainer.classList.add('box');
            // columnContainer.style.width = width;
            // columnContainer.style.height = height;
            rowContainer.appendChild(columnContainer);
        }
        document.querySelector(".container").appendChild(rowContainer);
    }
    var boxes =  Array.from(document.querySelectorAll(".box"));
    boxes.forEach(element => {
        element.style.width = width;
        element.style.height = height;
        element.addEventListener('mouseover', function() {
            element.classList.add('hover');
        })
    });
}

createGrid(16);


const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", function() {
    resetGrid();
})

function resetGrid() {

    var size = parseInt(window.prompt("How big would you like your grid to be?"), 10);
    
    if (!isNaN(size)){
        if (size > 0 && size <= 100){
            var container = document.querySelector(".container");
            while (container.firstChild){
                container.removeChild(container.firstChild);
            }
            createGrid(size);
        }
        else {
            alert("Must be in the range of 1-100");
        }
    }
    else {
        alert("Input must be a number value!");
    }
}