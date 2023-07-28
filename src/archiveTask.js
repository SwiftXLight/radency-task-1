import { data } from "../index.js";
import { countCategory } from "./countCategory.js";
import { toggleNotesDisplay } from "./toggleNotesDisplay.js";

export let archiveTask = (e) => {
    let element = e.parentElement.parentElement;
    data[element.id].isArchived = !data[element.id].isArchived;

    if (data[element.id].isArchived) {
        element.classList.add("archived");
        element.classList.remove("active");
    } else {
        element.classList.add("active");
        element.classList.remove("archived");
    }
  
    localStorage.setItem("data", JSON.stringify(data));
    try {
        countCategory();
        toggleNotesDisplay();
    } catch(e) {
        console.log(e);
    }
};
