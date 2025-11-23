// botão de download
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btnDownload');

    if (btn) {
        btn.addEventListener('click', function (event) {
            const confirmDownload = confirm("Deseja fazer o download do Projeto AlarMINI?");
            if (!confirmDownload) {
                event.preventDefault();
                alert("Download cancelado.");
            }
        });
    }
});