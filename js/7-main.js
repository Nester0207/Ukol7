let h1 = document.querySelectorAll("h1")[0];

h1.addEventListener("click", () => {
    h1.style.color = "green";
    setTimeout(() => {
    h1.style.color = "black";
    }, 5000);
});
