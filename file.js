document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const element = entry.target;
            if (entry.isIntersecting) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    });

    document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));
});
