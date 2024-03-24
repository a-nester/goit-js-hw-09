const form = document.querySelector(".feedback-form");
const input = form.elements[0];
const message = form.elements[1];

const localStorageKey = "feedback-form-state";
const container = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

input.value = container.input ?? "";
message.value = container.message ?? "";

form.addEventListener("input", (event) => {
        const input = event.currentTarget[0].value;
        const message = event.currentTarget[1].value;
        container.input = input;
        container.message = message;
        localStorage.setItem(localStorageKey, JSON.stringify(container));
});
    // Remove data from storage after submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(container);
    input.value = "";
    message.value = "";
    localStorage.removeItem(localStorageKey);
})