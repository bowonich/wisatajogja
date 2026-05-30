document.addEventListener("DOMContentLoaded", () => {
  // --- 1. FITUR BERANDA: Slider Gambar Otomatis ---
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    const showSlides = () => {
    if (!slides.length) return;
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex = slideIndex >= slides.length ? 0 : slideIndex;
    slides[slideIndex].style.display = "block";
    slideIndex++;
    setTimeout(showSlides, 3000); // Ganti tiap 3 detik
};
showSlides();

  // --- 2. FITUR ARTIKEL: Pencarian & Baca Selengkapnya ---
const searchInput = document.getElementById("searchInput");
const articles = document.querySelectorAll(".article-grid .card");

if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const filter = e.target.value.toLowerCase();
        articles.forEach((article) => {
        const title = article.querySelector("h3").innerText.toLowerCase();
        article.style.display = title.includes(filter) ? "" : "none";
    });
    });
}

    document.querySelectorAll(".btn-readmore").forEach((btn) => {
    btn.addEventListener("click", function () {
        const fullText = this.previousElementSibling;
        const isHidden = fullText.style.display === "none";

        fullText.style.display = isHidden ? "inline" : "none";
        this.innerText = isHidden ? "Sembunyikan" : "Baca Selengkapnya";
    });
});

  // --- 3. FITUR BUKU TAMU: Validasi Form ---
    const guestForm = document.getElementById("guestForm");
    if (guestForm) {
    guestForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nama = document.getElementById("nama").value.trim();
        const email = document.getElementById("email").value.trim();
        const pesan = document.getElementById("pesan").value.trim();

        if (!nama || !email || !pesan) return alert("Semua kolom harus diisi!");

        alert(`Terima kasih, ${nama}! Pesan Anda telah berhasil dikirim.`);
        guestForm.reset();
    });
    }
});

// --- 4. FITUR SCROLL TO TOP ---
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    if (scrollTopBtn) {
        // Deteksi event scroll pada window
        window.addEventListener("scroll", () => {
            // Tampilkan tombol jika scroll lebih dari 300px dari atas
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        // Aksi ketika tombol diklik
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Efek meluncur mulus
            });
        });
    }
