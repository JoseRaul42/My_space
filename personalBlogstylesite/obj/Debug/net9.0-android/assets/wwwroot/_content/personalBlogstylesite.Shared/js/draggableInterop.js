export function initDraggable(elementId, handleId) {
    console.log(`Initializing draggable for element: #${elementId} with handle: #${handleId}`);
    const elmnt = document.getElementById(elementId);
    const handle = document.getElementById(handleId);
    
    if (!elmnt || !handle) {
        console.error("Draggable element or handle not found. Aborting.", { element: elmnt, handle: handle });
        return;
    }
    console.log("Draggable element and handle found successfully.");

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let isFirstDrag = true;

    handle.onmousedown = dragMouseDown;
    console.log("Mousedown event listener attached to handle.");

    function dragMouseDown(e) {
        console.log("Mousedown event triggered.");
        e = e || window.event;
        e.preventDefault();
        
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        console.log("Mousemove and mouseup listeners attached to document.");
        
        // On the first drag, convert the element's position from bottom/right to top/left
        if (isFirstDrag) {
             console.log("First drag detected. Converting position.");
             const rect = elmnt.getBoundingClientRect();
             elmnt.style.right = 'auto';
             elmnt.style.bottom = 'auto';
             elmnt.style.top = rect.top + 'px';
             elmnt.style.left = rect.left + 'px';
             isFirstDrag = false;
        }
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        console.log("Mouseup event triggered. Removing listeners.");
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
