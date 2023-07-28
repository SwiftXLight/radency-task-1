let form = document.querySelector("#form");

export let data = [{}];

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
})();
