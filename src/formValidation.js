import { acceptData } from "./acceptData.js";

let addNote = document.querySelector("#add");
let msg = document.querySelector("#msg");
let textInput = document.querySelector("#textInput");
let category = document.querySelector("#category");

export let formValidation = () => {
    if (textInput.value === "") {
        msg.innerHTML = "Task Name cannot be blank";
    } else if (category.value === "") {
        msg.innerHTML = "Category cannot be empty";
    } else {
        msg.innerHTML = "";
        acceptData();
        addNote.setAttribute("data-bs-dismiss", "modal");
        addNote.click();
        addNote.setAttribute("data-bs-dismiss", "");
    }
};
