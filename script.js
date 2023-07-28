window.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".options div");
    const cup = document.querySelector(".cup");
    const title = document.querySelector(".title");

    function formatOption(option) {
        return option.toLowerCase().replace(/\s/g, "-");
    }

    options.forEach((option) => {
        option.addEventListener("click", function () {
            options.forEach((opt) => {
                cup.classList.remove(formatOption(opt.textContent));
            });
            cup.classList.add(formatOption(this.textContent));
            title.innerHTML = this.textContent;
        });
    });
});
