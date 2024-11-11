document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.comprar');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const produto = this.getAttribute('data-produto');
            alert(`Você comprou: ${produto}`);
        });
    });
});
