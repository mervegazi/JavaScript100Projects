const panels = document.querySelectorAll(".panel");

panels.forEach( panel => { //when we click on each panel, this panel image will open
    panel.addEventListener("click", () =>{

        removeActive();
        panel.classList.add("active");
    });
})

function removeActive(){ //Only the panel image we clicked will open, other panels will be closed
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}