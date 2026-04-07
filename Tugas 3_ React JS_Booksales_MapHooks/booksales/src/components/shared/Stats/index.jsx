export default function Stats() {
    return (
        <>
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
        </>
    )
}   