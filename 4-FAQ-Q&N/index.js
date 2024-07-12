document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".question-ans-container");

    faqs.forEach(faq => {
        const toggleIcon = faq.querySelector(".toggle-icon");
        const answer = faq.querySelector(".para");

        toggleIcon.addEventListener("click", () => {
            answer.classList.toggle("active");
            if (toggleIcon.textContent === "+") {
                toggleIcon.textContent = "-";
            } else {
                toggleIcon.textContent = "+";
            }
        });
    });
});
