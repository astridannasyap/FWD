export default function Hero() {
    return (
        <>
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
        </>
    )
}