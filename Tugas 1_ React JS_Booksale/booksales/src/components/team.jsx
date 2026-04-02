function Team() {
  const teamMembers = [
    {
      name: "Andi Pratama",
      role: "CEO & Founder",
      bio: "Pecinta buku sejak kecil dengan pengalaman 10 tahun di industri penerbitan. Mendirikan Bookstore untuk mewujudkan mimpi semua orang bisa mengakses buku berkualitas.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      skills: ["Leadership", "Strategy", "Publishing"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Siti Rahayu",
      role: "Head of Curation",
      bio: "Kurator buku berpengalaman dengan latar belakang sastra Indonesia dan internasional. Bertanggung jawab memilih koleksi terbaik untuk pelanggan.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      skills: ["Literature", "Curation", "Editorial"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Budi Santoso",
      role: "Lead Developer",
      bio: "Software engineer dengan passion di bidang teknologi dan literasi. Membangun platform Bookstore agar mudah digunakan semua kalangan.",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      skills: ["React", "Node.js", "UI/UX"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Dewi Lestari",
      role: "Marketing Manager",
      bio: "Ahli pemasaran digital dengan fokus pada pertumbuhan komunitas pembaca. Mengelola kampanye dan promosi untuk menjangkau lebih banyak pecinta buku.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      skills: ["Digital Marketing", "SEO", "Community"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Rizky Hermawan",
      role: "Customer Success",
      bio: "Memastikan setiap pelanggan mendapat pengalaman belanja buku yang menyenangkan. Selalu siap membantu menemukan buku yang tepat.",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      skills: ["Customer Service", "Communication", "CRM"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Nadia Putri",
      role: "Graphic Designer",
      bio: "Desainer kreatif yang bertanggung jawab atas visual brand Bookstore. Menciptakan tampilan yang menarik dan mencerminkan kecintaan terhadap buku.",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      skills: ["UI Design", "Branding", "Illustration"],
      social: { ig: "#", linkedin: "#", twitter: "#" }
    },
  ]

  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="badge bg-primary fs-6 mb-3">👥 Tim Kami</span>
        <h2 className="display-5 fw-bold">Kenalan dengan Tim Bookstore</h2>
        <p className="lead text-muted col-md-7 mx-auto">
          Kami adalah sekumpulan orang yang bersemangat di bidang literasi dan teknologi,
          bersatu untuk menghadirkan pengalaman membaca terbaik bagi Indonesia.
        </p>
        <hr className="w-25 mx-auto border-primary border-2" />
      </div>

      {/* Team Cards */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {teamMembers.map((member, i) => (
          <div className="col" key={i}>
            <div className="card h-100 shadow-sm text-center border-0" style={{ transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
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

      {/* Join Us CTA */}
      <div className="mt-5 p-5 text-center rounded-3 bg-primary text-white">
        <h3 className="fw-bold">Mau Bergabung dengan Tim Kami?</h3>
        <p className="lead mb-4">Kami selalu mencari orang-orang berbakat yang mencintai buku dan teknologi.</p>
        <a href="#contact" className="btn btn-light btn-lg fw-semibold">📩 Hubungi Kami</a>
      </div>
    </div>
  )
}

export default Team
