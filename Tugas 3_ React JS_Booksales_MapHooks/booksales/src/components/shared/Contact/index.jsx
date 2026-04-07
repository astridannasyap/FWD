export default function Contact() {
    return (
        <>
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
        </>
    )
}   