(function () {
    const buttons = document.querySelectorAll('.btn');
    const images = document.querySelectorAll('.image');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            images.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block';
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});