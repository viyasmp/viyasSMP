// Ganti dengan tanggal reset dunia kamu
const resetDate = new Date("2024-08-01T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = resetDate - now;

    if (diff <= 0) {
        document.getElementById("timer").innerHTML = "Reset Sudah Terjadi!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
        `${days} hari ${hours} jam ${mins} menit ${secs} detik`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
