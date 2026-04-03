export default function Book() {
    return (
        <>
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
        </>
    )
}   