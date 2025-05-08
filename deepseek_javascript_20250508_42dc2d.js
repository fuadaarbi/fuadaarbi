// Fungsi untuk form kontak
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil nilai form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Di sini Anda bisa menambahkan kode untuk mengirim data ke server
    // Untuk contoh ini, kita hanya akan menampilkan alert
    alert(`Terima kasih ${name}! Pesan Anda telah diterima. Kami akan segera menghubungi Anda melalui email ${email}.`);
    
    // Reset form
    this.reset();
});

// Smooth scrolling untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});