import { useState } from "react";
import books from "../../../Utils/books";
import styles from "../../../styles/Books.module.css";

export default function Book() {
  const [bookList, setBookList] = useState(books);

  const handleTambahBuku = () => {
    const newBook = {
    title: "Perahu Kertas",
    author: "Dee Lestari",
    price: "Rp 69.000",
    genre: "Romansa",
    img: "https://placehold.co/300x180",
    rating: "★★★★☆",
    };

    setBookList((prevList) => [...prevList, newBook]);
    alert("Buku baru berhasil ditambahkan!");
  };

  return (
    <>
      <section id="books" className="py-5 text-center">
        <div className="container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className="fw-bold">Buku Best Seller</h2>
              <p className="lead text-body-secondary">
                Temukan koleksi buku terlaris pilihan pembaca kami. Dari
                self-improvement hingga fiksi bestseller internasional.
              </p>
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

          <div className="mb-4 text-end">
            <button className={styles.btnTambah} onClick={handleTambahBuku}>
              + Tambah Buku
            </button>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {bookList.map((book, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.img}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-secondary mb-1 align-self-start">
                      {book.genre}
                    </span>
                    <h6 className="card-title fw-bold mb-0">{book.title}</h6>
                    <small className="text-muted">{book.author}</small>
                    <p className="text-warning mb-1">{book.rating}</p>
                    <p className="fw-bold text-primary mb-2">{book.price}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                          Detail
                        </button>
                        <button type="button" className="btn btn-sm btn-primary">
                          🛒 Beli
                        </button>
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
  );
}