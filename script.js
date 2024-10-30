let draggedImage = null;
    function allowDrop(event){
        event.preventDefault();
    }
    function drag(event){
        draggedImage = event.target;
    }

    function drop(event){
        event.preventDefault();
        const targetContainer = event.currentTarget;

       if(targetContainer !== draggedImage.parentElement){
        const targetImage = targetContainer.querySelector('img');

        const tempSrc = targetImage.src;
        targetImage.src = draggedImage.src;
        draggedImage.src = tempSrc;
       }
    }