const images = document.querySelectorAll('.image');
let draggedItem = null;

images.forEach(image => {
    image.addEventListener('dragstart', () => {
        draggedItem = image;
        setTimeout(() => {
            image.style.display = 'none'; // Hide the dragged item
        }, 0);
    });

    image.addEventListener('dragend', () => {
        setTimeout(() => {
            draggedItem = null;
            image.style.display = 'block'; // Show the item again
        }, 0);
    });

    image.addEventListener('dragover', (event) => {
        event.preventDefault(); // Allow dropping
    });

    image.addEventListener('dragenter', () => {
        image.classList.add('selected'); // Highlight the target item
    });

    image.addEventListener('dragleave', () => {
        image.classList.remove('selected'); // Remove highlight
    });

    image.addEventListener('drop', () => {
        image.classList.remove('selected'); // Remove highlight
        if (draggedItem) {
            const draggedIndex = Array.from(images).indexOf(draggedItem);
            const targetIndex = Array.from(images).indexOf(image);

            if (draggedIndex !== targetIndex) {
                const parent = document.getElementById('parent');
                const draggedClone = draggedItem.cloneNode(true);
                const targetClone = image.cloneNode(true);

                parent.replaceChild(targetClone, draggedItem);
                parent.replaceChild(draggedClone, image);

               
                draggedClone.id = `drag${targetIndex + 1}`;
                targetClone.id = `drag${draggedIndex + 1}`;
            }
        }
    });
});