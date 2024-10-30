function allowDrop(){
        event.preventDefault();
    }
    function drag(event){
        event.dataTransfer.setData("text/plain",event.target.src);
    }

    function drop(event){
        event.preventDefault();
        const imageSrc = event.dataTransfer.getData("text/plain");
        const targetContainer = event.currentTarget;

        while(targetContainer.firstChild){
            targetContainer.removeChild(targetContainer.firstChild);
        }
        const newImage = document.createElement("img");
        newImage.src = imageSrc;
        newImage.className = "draggable";
        newImage.draggable = true;
        newImage.ondragstart = drag;

        targetContainer.appendChild(newImage);
    }