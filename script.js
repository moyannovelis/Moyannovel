const novels = [
  {
    id: 1,
    title: "Moonlit Echoes",
    genre: ["Fantasy", "Romance", "Mystery"],
    rating: 4.9,
    readers: "28.4K",
    chapters: 32,
    updated: "2 jam lalu",
    description: "Di kota neon Asterra, Lyra menemukan relik kuno yang menghubungkannya dengan pewaris keluarga malam.",
    cover: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    featured: true,
    synopsis: "Kisah romansa fantasi urban yang memadukan politik keluarga, rahasia kuno, dan percikan cinta di tengah gemerlap kota modern.",
    chapterList: [
      {
        title: "Chapter 1 — Cahaya di Atas Menara Kaca",
        content: [
          "Langit Asterra berpendar ungu malam itu, memantulkan cahaya papan hologram di dinding menara kaca. Lyra berdiri di halte terakhir, menggenggam buku lusuh yang seharusnya tidak pernah ia temukan di perpustakaan lama.",
          "Di halaman terakhir buku itu ada lambang bulan terbelah, sama seperti liontin yang selama ini disembunyikan ibunya. Sejak saat itu, kota yang ia kenal terasa berubah; lorong-lorong sempit seolah berbisik, dan bayangan orang-orang tampak bergerak lebih cepat dari tubuh mereka.",
          "Ketika lift menara terbuka, seorang pria berjas hitam menatapnya seperti telah menunggu kedatangannya sejak lama. 'Akhirnya kau datang juga,' katanya pelan. Malam itu, hidup Lyra tidak lagi milik dirinya sendiri."
        ]
      },
      {
        title: "Chapter 2 — Nama yang Disembunyikan",
        content: [
          "Di ruang arsip tertutup, Lyra menemukan daftar nama keluarga yang telah dihapus dari catatan kota. Salah satunya adalah nama ibunya.",
          "Ia mulai sadar bahwa takdirnya telah ditulis jauh sebelum ia lahir, dan orang-orang di sekelilingnya mungkin tahu lebih banyak daripada yang mereka akui."
        ]
      },
      {
        title: "Chapter 3 — Kontrak Malam",
        content: [
          "Tawaran itu terdengar sederhana: tinggal bersama keluarga Noctis selama tiga puluh hari, lalu semua pertanyaannya akan dijawab.",
          "Namun setiap jawaban memiliki harga, dan Lyra baru akan mengetahui betapa mahalnya harga tersebut ketika pintu mansion besi itu tertutup di belakangnya."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Neon Requiem",
    genre: ["Sci-Fi", "Action"],
    rating: 4.8,
    readers: "19.1K",
    chapters: 48,
    updated: "Kemarin",
    description: "Pemburu data ilegal dan android pemberontak bersekutu melawan perusahaan memori terbesar di dunia.",
    cover: "linear-gradient(135deg, #06b6d4, #2563eb)",
    featured: true,
    synopsis: "Thriller cyberpunk dengan aksi cepat, dunia penuh implant, dan konflik moral antara manusia serta mesin.",
    chapterList: []
  },
  {
    id: 3,
    title: "Crimson Sonata",
    genre: ["Drama", "Romance"],
    rating: 4.7,
    readers: "14.8K",
    chapters: 27,
    updated: "3 hari lalu",
    description: "Pianis jenius yang kehilangan pendengaran bertemu komposer jalanan dengan masa lalu penuh luka.",
    cover: "linear-gradient(135deg, #ef4444, #f59e0b)",
    featured: true,
    synopsis: "Romansa emosional tentang musik, kehilangan, dan keberanian mencintai diri sendiri sebelum mencintai orang lain.",
    chapterList: []
  },
  {
    id: 4,
    title: "The Last Oracle",
    genre: ["Fantasy", "Adventure"],
    rating: 4.6,
    readers: "10.2K",
    chapters: 58,
    updated: "5 hari lalu",
    description: "Seorang peramal terakhir diburu kerajaan karena ramalan yang dapat menjatuhkan takhta.",
    cover: "linear-gradient(135deg, #14b8a6, #22c55e)",
    featured: false,
    synopsis: "Petualangan epik dengan dunia kerajaan pecah, artefak kuno, dan politik magis yang mematikan.",
    chapterList: []
  },
  {
    id: 5,
    title: "Velvet Ashes",
    genre: ["Mystery", "Thriller"],
    rating: 4.5,
    readers: "9.6K",
    chapters: 21,
    updated: "1 minggu lalu",
    description: "Jurnalis muda menyelidiki kebakaran teater lama dan menemukan jaringan rahasia elit kota.",
    cover: "linear-gradient(135deg, #64748b, #334155)",
    featured: false,
    synopsis: "Misteri gelap dengan atmosfer sinematik dan teka-teki yang terurai perlahan.",
    chapterList: []
  },
  {
    id: 6,
    title: "Aurora Hearts",
    genre: ["Slice of Life", "Romance"],
    rating: 4.8,
    readers: "16.7K",
    chapters: 39,
    updated: "Hari ini",
    description: "Kisah hangat tentang toko bunga malam, hujan kota, dan dua hati yang pulih perlahan.",
    cover: "linear-gradient(135deg, #a855f7, #06b6d4)",
    featured: false,
    synopsis: "Cerita healing yang lembut, penuh dialog manis, dan estetika kota hujan yang menenangkan.",
    chapterList: []
  },
  {
    id: 7,
    title: "Obsidian Crown",
    genre: ["Action", "Fantasy"],
    rating: 4.4,
    readers: "8.3K",
    chapters: 64,
    updated: "2 minggu lalu",
    description: "Pangeran buangan harus memimpin pemberontakan sambil menyembunyikan kutukan darah kerajaannya.",
    cover: "linear-gradient(135deg, #111827, #7c3aed)",
    featured: false,
    synopsis: "Fantasi aksi penuh duel, intrik, dan perebutan tahta yang brutal.",
    chapterList: []
  },
  {
    id: 8,
    title: "Paper Sky Diaries",
    genre: ["Slice of Life", "Drama"],
    rating: 4.7,
    readers: "11.9K",
    chapters: 18,
    updated: "4 hari lalu",
    description: "Sekelompok mahasiswa menulis surat untuk masa depan mereka sendiri dan semuanya mulai menjadi nyata.",
    cover: "linear-gradient(135deg, #fb7185, #38bdf8)",
    featured: false,
    synopsis: "Drama kampus dengan nuansa hangat, nostalgia, dan sedikit sentuhan magis.",
    chapterList: []
  }
];

const genreSet = ["Semua", ...new Set(novels.flatMap((novel) => novel.genre))];
let currentGenre = "Semua";
let currentSort = "popular";
let currentSearch = "";
let currentNovel = novels[0];
let currentChapterIndex = 0;

const genrePills = document.getElementById("genrePills");
const novelGrid = document.getElementById("novelGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const chapterList = document.getElementById("chapterList");
const readerTitle = document.getElementById("readerTitle");
const chapterTitle = document.getElementById("chapterTitle");
const chapterContent = document.getElementById("chapterContent");
const bookmarkBtn = document.getElementById("bookmarkBtn");
const themeToggle = document.getElementById("themeToggle");
const openFeatured = document.getElementById("openFeatured");
const shuffleBtn = document.getElementById("shuffleBtn");
const modal = document.getElementById("novelModal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function renderGenres() {
  genrePills.innerHTML = genreSet.map((genre) => `
    <button class="genre-pill ${genre === currentGenre ? "active" : ""}" data-genre="${genre}">${genre}</button>
  `).join("");

  genrePills.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentGenre = btn.dataset.genre;
      renderGenres();
      renderNovels();
    });
  });
}

function filteredNovels() {
  let data = [...novels].filter((novel) => {
    const genreMatch = currentGenre === "Semua" || novel.genre.includes(currentGenre);
    const searchMatch = `${novel.title} ${novel.genre.join(" ")} ${novel.description}`.toLowerCase().includes(currentSearch.toLowerCase());
    return genreMatch && searchMatch;
  });

  const sorters = {
    popular: (a, b) => parseFloat(b.readers) - parseFloat(a.readers),
    latest: (a, b) => (a.updated === "Hari ini" ? -1 : 1),
    rating: (a, b) => b.rating - a.rating,
    title: (a, b) => a.title.localeCompare(b.title)
  };

  data.sort(sorters[currentSort]);
  return data;
}

function createNovelCard(novel) {
  return `
    <article class="novel-card glass">
      <div class="card-cover" style="background:${novel.cover}">${novel.title}</div>
      <div class="card-head">
        <div>
          <h3 class="card-title">${novel.title}</h3>
          <div class="novel-meta">${novel.genre.map((g) => `<span>${g}</span>`).join("")}</div>
        </div>
        <span class="rating-pill">★ ${novel.rating}</span>
      </div>
      <p class="card-desc">${novel.description}</p>
      <div class="novel-meta">
        <span>${novel.chapters} chapter</span>
        <span>${novel.readers} pembaca</span>
        <span>${novel.updated}</span>
      </div>
      <div class="card-actions">
        <button class="cta-btn" onclick="openNovel(${novel.id})">Detail</button>
        <button class="ghost-btn" onclick="loadReader(${novel.id})">Baca</button>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const featured = novels.filter((novel) => novel.featured).slice(0, 3);
  featuredGrid.innerHTML = featured.map(createNovelCard).join("");
}

function renderNovels() {
  const data = filteredNovels();
  novelGrid.innerHTML = data.map(createNovelCard).join("");
}

function renderChapterList() {
  const chapters = currentNovel.chapterList.length ? currentNovel.chapterList : [
    {
      title: "Chapter 1 — Preview",
      content: [
        "Template ini menampilkan preview chapter. Kamu bisa mengganti data novel dan isi chapter langsung dari file script.js agar sesuai dengan proyekmu.",
        "Untuk membuat situs webnovel penuh, cukup tambahkan objek chapter baru ke setiap novel atau hubungkan ke backend/API milikmu."
      ]
    }
  ];

  chapterList.innerHTML = chapters.map((chapter, index) => `
    <button class="chapter-item ${index === currentChapterIndex ? "active" : ""}" data-index="${index}">
      <strong>${chapter.title}</strong>
      <small>Klik untuk membaca</small>
    </button>
  `).join("");

  chapterList.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentChapterIndex = Number(btn.dataset.index);
      renderReaderContent();
      renderChapterList();
    });
  });
}

function renderReaderContent() {
  const chapters = currentNovel.chapterList.length ? currentNovel.chapterList : [
    {
      title: "Chapter 1 — Preview",
      content: [
        "Template ini menampilkan preview chapter. Kamu bisa mengganti data novel dan isi chapter langsung dari file script.js agar sesuai dengan proyekmu.",
        "Untuk membuat situs webnovel penuh, cukup tambahkan objek chapter baru ke setiap novel atau hubungkan ke backend/API milikmu."
      ]
    }
  ];

  const chapter = chapters[currentChapterIndex] || chapters[0];
  readerTitle.textContent = currentNovel.title;
  chapterTitle.textContent = chapter.title;
  chapterContent.innerHTML = chapter.content.map((paragraph) => `<p>${paragraph}</p>`).join("");
}

window.loadReader = function(id) {
  const selected = novels.find((novel) => novel.id === id);
  if (!selected) return;
  currentNovel = selected;
  currentChapterIndex = 0;
  renderChapterList();
  renderReaderContent();
  document.getElementById("reader").scrollIntoView({ behavior: "smooth" });
};

window.openNovel = function(id) {
  const novel = novels.find((item) => item.id === id);
  if (!novel) return;

  modalContent.innerHTML = `
    <div class="modal-cover" style="background:${novel.cover}">${novel.title}</div>
    <div class="modal-meta">
      <span class="rating-pill">★ ${novel.rating}</span>
      <span class="rating-pill">${novel.chapters} chapter</span>
      <span class="rating-pill">${novel.readers} pembaca</span>
    </div>
    <h3>${novel.title}</h3>
    <p class="card-desc">${novel.synopsis}</p>
    <div class="novel-meta">${novel.genre.map((g) => `<span>${g}</span>`).join("")}</div>
    <div class="modal-actions" style="margin-top:20px; justify-content:flex-start;">
      <button class="cta-btn" onclick="loadReader(${novel.id}); closeNovelModal();">Mulai Baca</button>
      <button class="ghost-btn" onclick="saveBookmark(${novel.id})">Bookmark</button>
    </div>
  `;
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
};

window.closeNovelModal = function() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
};

window.saveBookmark = function(id = currentNovel.id) {
  const novel = novels.find((item) => item.id === id) || currentNovel;
  const bookmarkData = {
    id: novel.id,
    title: novel.title,
    chapter: currentChapterIndex,
    savedAt: new Date().toLocaleString("id-ID")
  };
  localStorage.setItem("velora-bookmark", JSON.stringify(bookmarkData));
  bookmarkBtn.textContent = "Bookmark Tersimpan";
  setTimeout(() => bookmarkBtn.textContent = "Simpan Bookmark", 1800);
};

function loadTheme() {
  const savedTheme = localStorage.getItem("velora-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("velora-theme", document.body.classList.contains("light") ? "light" : "dark");
});

searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderNovels();
});

sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderNovels();
});

bookmarkBtn.addEventListener("click", () => saveBookmark());
openFeatured.addEventListener("click", () => openNovel(1));
shuffleBtn.addEventListener("click", () => {
  novels.sort(() => Math.random() - 0.5);
  renderFeatured();
  renderNovels();
});
closeModal.addEventListener("click", closeNovelModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeNovelModal();
});

loadTheme();
renderGenres();
renderFeatured();
renderNovels();
renderChapterList();
renderReaderContent();
