function App() {
  return (
    <>
      {/* Header */}
      <header className="sticky-top bg-white border-bottom">
        <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#0d6efd" }}></i>
              <span className="ms-2 fs-4 fw-bold">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2 fw-semibold">Home</a></li>
            <li><a href="#books" className="nav-link px-2">Buku</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg" style={{ background: "linear-gradient(135deg, #f0f8ff 0%, #e8f4f8 100%)" }}>
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <span className="badge bg-primary mb-3">Buku Terlaris #1</span>
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Atomic Habits</h1>
              <p className="lead text-muted">Perubahan kecil yang memberikan hasil luar biasa. Cara mudah dan efektif untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk — oleh James Clear.</p>
              <div className="d-flex align-items-center mb-3">
                <span className="text-warning fs-5">★★★★★</span>
                <span className="ms-2 text-muted">(4.8 / 5 dari 12.400 ulasan)</span>
              </div>
              <p className="fs-4 fw-bold text-primary">Rp 89.000 <span className="text-muted text-decoration-line-through fs-6">Rp 120.000</span></p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">🛒 Beli Sekarang</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail Buku</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img
                className="rounded-lg-3"
                src="https://nlink.at/KpRR"
                alt="Atomic Habits Book"
                width="720"
                style={{ objectFit: "cover", height: "350px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-4">
        <div className="container">
          <div className="row text-center g-3">
            {[
              { value: "10.000+", label: "Judul Buku", color: "text-primary" },
              { value: "50.000+", label: "Pelanggan", color: "text-success" },
              { value: "500+", label: "Penulis", color: "text-warning" },
              { value: "4.9 ⭐", label: "Rating Toko", color: "text-danger" },
            ].map((stat, i) => (
              <div className="col-md-3 col-6" key={i}>
                <div className="p-3 border rounded-3 shadow-sm">
                  <h3 className={`fw-bold ${stat.color}`}>{stat.value}</h3>
                  <p className="text-muted mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section id="books" className="py-5 text-center">
        <div className="container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className="fw-bold">Buku Best Seller</h2>
              <p className="lead text-body-secondary">Temukan koleksi buku terlaris pilihan pembaca kami. Dari self-improvement hingga fiksi bestseller internasional.</p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">Lihat Semua</a>
                <a href="#" className="btn btn-secondary my-2">Kategori Lainnya</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Cards */}
      <div className="album py-5 bg-body-tertiary rounded-3 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {[
              { title: "Atomic Habits", author: "James Clear", price: "Rp 89.000", genre: "Self-Help", img: "https://nlink.at/KpRR", rating: "★★★★★" },
              { title: "Rich Dad Poor Dad", author: "Henry Manampiring", price: "Rp 75.000", genre: "Self Improvement", img: "https://nlink.at/aYnq", rating: "★★★★★" },
              { title: "The Psychology of Money", author: "Morgan Housel", price: "Rp 82.000", genre: "Finansial", img: "https://nlink.at/cPLG", rating: "★★★★☆" },
              { title: "Laut Bercerita", author: "Leila S. Chudori", price: "Rp 68.000", genre: "Self-Help", img: "https://nlink.at/KfUH", rating: "★★★★★" },
              { title: "Sebuah Seni untuk Bersikap Bodo Amat", author: "Mark Manson", price: "Rp 72.000", genre: "Self-development", img: "https://nlink.at/jYq2", rating: "★★★★★" },
              { title: "Sapiens", author: "Yuval Noah Harari", price: "Rp 115.000", genre: "Sejarah", img: "https://nlink.at/gBCr", rating: "★★★★☆" },
              { title: "Start With Why", author: "Simon Sinek", price: "Rp 79.000", genre: "Bisnis", img: "https://nlink.at/jms5", rating: "★★★★★" },
              { title: "Bumi Manusia", author: "Pramudya Ananta Toer", price: "Rp 85.000", genre: "Sejarah", img: "https://nlink.at/35xF", rating: "★★★★☆" },
              { title: "Dune", author: "Frank Herbert", price: "Rp 130.000", genre: "Sci-Fi", img: "https://nlink.at/qJY6", rating: "★★★★★" },
            ].map((book, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img src={book.img} className="card-img-top" alt={book.title} style={{ height: "180px", objectFit: "cover" }} />
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-1 align-self-start">{book.genre}</span>
                    <h6 className="card-title fw-bold mb-0">{book.title}</h6>
                    <small className="text-muted">{book.author}</small>
                    <p className="text-warning mb-1">{book.rating}</p>
                    <p className="fw-bold text-primary mb-2">{book.price}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Detail</button>
                        <button type="button" className="btn btn-sm btn-primary">🛒 Beli</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="team">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="badge bg-primary fs-6 mb-3">Tim Kami</span>
            <h2 className="display-5 fw-bold">Kenalan dengan Tim Bookstore</h2>
            <p className="lead text-muted col-md-7 mx-auto">
              Kami adalah sekumpulan orang yang bersemangat di bidang literasi dan teknologi,
              bersatu untuk menghadirkan pengalaman membaca terbaik bagi Indonesia.
            </p>
            <hr className="w-25 mx-auto border-primary border-2" />
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[
              { name: "Andi Pratama", role: "CEO & Founder", bio: "Pecinta buku sejak kecil dengan pengalaman 10 tahun di industri penerbitan. Mendirikan Bookstore untuk mewujudkan mimpi semua orang bisa mengakses buku berkualitas.", img: "https://randomuser.me/api/portraits/men/32.jpg", skills: ["Leadership", "Strategy", "Publishing"], social: { ig: "#", linkedin: "#", twitter: "#" } },
              { name: "Siti Rahayu", role: "Head of Curation", bio: "Kurator buku berpengalaman dengan latar belakang sastra Indonesia dan internasional. Bertanggung jawab memilih koleksi terbaik untuk pelanggan.", img: "https://randomuser.me/api/portraits/women/44.jpg", skills: ["Literature", "Curation", "Editorial"], social: { ig: "#", linkedin: "#", twitter: "#" } },
              { name: "Budi Santoso", role: "Lead Developer", bio: "Software engineer dengan passion di bidang teknologi dan literasi. Membangun platform Bookstore agar mudah digunakan semua kalangan.", img: "https://randomuser.me/api/portraits/men/51.jpg", skills: ["React", "Node.js", "UI/UX"], social: { ig: "#", linkedin: "#", twitter: "#" } },
              { name: "Dewi Lestari", role: "Marketing Manager", bio: "Ahli pemasaran digital dengan fokus pada pertumbuhan komunitas pembaca. Mengelola kampanye dan promosi untuk menjangkau lebih banyak pecinta buku.", img: "https://randomuser.me/api/portraits/women/68.jpg", skills: ["Digital Marketing", "SEO", "Community"], social: { ig: "#", linkedin: "#", twitter: "#" } },
              { name: "Rizky Hermawan", role: "Customer Success", bio: "Memastikan setiap pelanggan mendapat pengalaman belanja buku yang menyenangkan. Selalu siap membantu menemukan buku yang tepat.", img: "https://randomuser.me/api/portraits/men/22.jpg", skills: ["Customer Service", "Communication", "CRM"], social: { ig: "#", linkedin: "#", twitter: "#" } },
              { name: "Nadia Putri", role: "Graphic Designer", bio: "Desainer kreatif yang bertanggung jawab atas visual brand Bookstore. Menciptakan tampilan yang menarik dan mencerminkan kecintaan terhadap buku.", img: "https://randomuser.me/api/portraits/women/29.jpg", skills: ["UI Design", "Branding", "Illustration"], social: { ig: "#", linkedin: "#", twitter: "#" } },
            ].map((member, i) => (
              <div className="col" key={i}>
                <div
                  className="card h-100 shadow-sm text-center border-0"
                  style={{ transition: "transform 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <div className="card-body pt-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle mb-3 border border-3 border-primary"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <h5 className="card-title fw-bold mb-0">{member.name}</h5>
                    <p className="text-primary fw-semibold mb-2">{member.role}</p>
                    <p className="card-text text-muted small">{member.bio}</p>
                    <div className="mb-3">
                      {member.skills.map((skill, j) => (
                        <span key={j} className="badge bg-light text-dark border me-1 mb-1">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-top-0 pb-3">
                    <a href={member.social.ig} className="btn btn-sm btn-outline-danger me-1">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href={member.social.linkedin} className="btn btn-sm btn-outline-primary me-1">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href={member.social.twitter} className="btn btn-sm btn-outline-info">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 text-center rounded-3 bg-primary text-white">
            <h3 className="fw-bold">Mau Bergabung dengan Tim Kami?</h3>
            <p className="lead mb-4">Kami selalu mencari orang-orang berbakat yang mencintai buku dan teknologi.</p>
            <a href="#contact" className="btn btn-light btn-lg fw-semibold">📩 Hubungi Kami</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div style={{ background: "#f8f9fa" }} className="py-5">
          <div className="container">

            <div className="text-center mb-5">
              <span className="badge bg-primary fs-6 mb-3"> Hubungi Kami</span>
              <h2 className="display-5 fw-bold">Ada Pertanyaan? Kami Siap Membantu!</h2>
              <p className="lead text-muted col-md-7 mx-auto">
                Tim kami siap menjawab pertanyaan, menerima saran, dan membantu Anda menemukan buku yang tepat.
              </p>
              <hr className="w-25 mx-auto border-primary border-2" />
            </div>

            <div className="row g-5">
              {/* Contact Info */}
              <div className="col-md-5">
                <h4 className="fw-bold mb-4">Informasi Kontak</h4>
                {[
                  {
                    icon: (<i className="fa-solid fa-location-dot fa-xs" style={{color:"#0d6efd" }}></i>),title: "Alamat", text: (<>
                        Jl. Raya Bogor No. 123, Kota Bogor,<br />
                        Jawa Barat 16115, Indonesia
                      </>
                    ),
                  },
                  { icon: (<i className="fa-solid fa-phone fa-xs" style={{color:"#0d6efd" }}></i>), title: "Telepon", text: <>+62 812-3456-7890<br />Senin – Jumat, 08.00 – 17.00 WIB</> },
                  { icon: (<i className="fa-solid fa-envelope fa-xs" style={{color:"#0d6efd" }}></i>), title: "Email", text: <>hello@bookstore.id<br />support@bookstore.id</> },
                  { icon: (<i className="fa-solid fa-clock fa-xs" style={{color:"#0d6efd" }}></i>), title: "Jam Operasional", text: <>Senin – Jumat: 08.00 – 20.00<br />Sabtu – Minggu: 09.00 – 17.00</> },
                ].map((item, i) => (
                  <div className="d-flex align-items-start mb-4" key={i}>
                    <div className="me-3 text-primary fs-4">{item.icon}</div>
                    <div>
                      <h6 className="fw-bold mb-1">{item.title}</h6>
                      <p className="text-muted mb-0">{item.text}</p>
                    </div>
                  </div>
                ))}
                <h6 className="fw-bold mt-4 mb-3">Ikuti Kami</h6>
                <div className="d-flex gap-2">
                  <a href="#" className="btn btn-outline-danger"><i className="fa-brands fa-instagram"></i> Instagram</a>
                  <a href="#" className="btn btn-outline-primary"><i className="fa-brands fa-facebook"></i> Facebook</a>
                  <a href="#" className="btn btn-outline-dark"><i className="fa-brands fa-tiktok"></i> TikTok</a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-7">
                <div className="card shadow border-0 p-4">
                  <h4 className="fw-bold mb-4">Kirim Pesan</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Nama Lengkap <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" placeholder="Masukkan nama Anda" required />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" placeholder="email@contoh.com" required />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Subjek</label>
                        <select className="form-select">
                          <option value="">Pilih subjek...</option>
                          <option value="pemesanan">Pertanyaan Pemesanan</option>
                          <option value="pengiriman">Status Pengiriman</option>
                          <option value="retur">Retur & Refund</option>
                          <option value="kerjasama">Kerjasama & Partnership</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Pesan <span className="text-danger">*</span></label>
                        <textarea className="form-control" rows="5" placeholder="Tulis pesan Anda di sini..." required></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                          📨 Kirim Pesan
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-5">
              <h4 className="fw-bold text-center mb-4">Pertanyaan yang Sering Diajukan</h4>
              <div className="accordion" id="faqAccordion">
                {[
                  { q: "Berapa lama pengiriman buku?", a: "Pengiriman dalam kota 1-2 hari kerja, luar kota 3-5 hari kerja, luar Jawa 5-7 hari kerja melalui mitra ekspedisi kami." },
                  { q: "Apakah bisa retur buku?", a: "Ya, retur dapat dilakukan dalam 7 hari sejak barang diterima, dengan syarat buku masih dalam kondisi original dan belum dibaca." },
                  { q: "Metode pembayaran apa saja yang tersedia?", a: "Kami menerima Transfer Bank, GoPay, OVO, Dana, QRIS, COD (untuk area tertentu), dan Kartu Kredit/Debit." },
                  { q: "Apakah ada program membership?", a: "Ya! Program Bookstore Member menawarkan diskon 10% setiap pembelian, akses early bird promo, dan poin reward yang bisa ditukar hadiah." },
                ].map((item, i) => (
                  <div className="accordion-item border mb-2 rounded" key={i}>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed fw-semibold rounded"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq${i}`}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div id={`faq${i}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#home" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#books" className="nav-link px-2 text-body-secondary">Buku</a></li>
            <li className="nav-item"><a href="#team" className="nav-link px-2 text-body-secondary">Team</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
          </ul>
          <p className="text-center text-body-secondary">© 2026 Bookstore · Nurul Fikri Academy</p>
        </footer>
      </div>
    </>
  )
}

export default App
