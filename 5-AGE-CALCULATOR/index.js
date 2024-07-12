document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn');
    const day = document.getElementById('day');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1; // getMonth() is zero-based
        const currentDay = currentDate.getDate();

        const birthDay = parseInt(day.value);
        const birthMonth = parseInt(month.value);
        const birthYear = parseInt(year.value);

        let ageYear = currentYear - birthYear;
        let ageMonth = currentMonth - birthMonth;
        let ageDay = currentDay - birthDay;

        // Adjust months and years if needed
        if (ageDay < 0) {
            ageMonth--;
            ageDay += new Date(currentYear, currentMonth - 1, 0).getDate(); // days in previous month
        }
        if (ageMonth < 0) {
            ageYear--;
            ageMonth += 12;
        }

        result.innerHTML = `You are <span class="highlight">${ageYear}</span> years, <span class="highlight">${ageMonth}</span> months, and <span class="highlight">${ageDay}</span> days old.`;
    });
});
