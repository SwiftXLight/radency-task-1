import { data } from "../index.js";

let notesList = document.querySelector(".notes-list");
let isShowingArchived = false;

export function toggleNotesDisplay() {
    isShowingArchived = !isShowingArchived;

    for (let i = 0; i < data.length; i++) {
        if (data[i].isArchived && isShowingArchived) {
            notesList.children[i].style.display = "grid";
        } else if (!data[i].isArchived && !isShowingArchived) {
            notesList.children[i].style.display = "grid";
        } else {
            notesList.children[i].style.display = "none";
        }
    }

    const toggleButton = document.querySelector(".toggle-notes");
    if (isShowingArchived) {
        toggleButton.innerText = "Archived";
    } else {
        toggleButton.innerText = "Active";
    }
}
