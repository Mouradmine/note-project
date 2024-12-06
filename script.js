const notesContainer = document.querySelector(".note-container");
const createNoteBtn = document.querySelector(".btn");

function upadteStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
createNoteBtn.addEventListener("click", () => {
    
    const inputBox = document.createElement("div");
    const deleteImg = document.createElement("img");

    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.textContent = "New Note"; 


    deleteImg.src = "images/delete.png";
    deleteImg.alt = "Delete";
    deleteImg.className = "delete-btn";

    deleteImg.addEventListener("click", () => {
        inputBox.remove(); 
        upadteStorage();
    }
    )
    inputBox.appendChild(deleteImg);

    notesContainer.appendChild(inputBox);
});
