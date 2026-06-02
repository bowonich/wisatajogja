document.addEventListener("DOMContentLoaded", () => {
    // bereanda
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");

    function showSlides() {
        if (!slides.length) return;
        slides.forEach(slide => {
            slide.style.display = "none";
        });
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
    }
    if (slides.length > 0) {
        showSlides();
        setInterval(showSlides, 3000);
    }


document.addEventListener("DOMContentLoaded", () => {
    const profileCard = document.getElementById('profile-card');
    if (profileCard) {
        setTimeout(() => {
            profileCard.classList.add('appear');
        }, 150); 
    }
});

  // --- ARTIKEL
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
        if (isHidden) {
        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
        }
        });
    });

  //  Buku Tamu 
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

// Scrol Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth" 
            });
        });
    }
