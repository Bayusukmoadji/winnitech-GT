// File: ../assets/js/news.js

// Konstanta untuk paginasi data dummy
const POSTS_FOR_CAROUSEL = 3;
const POSTS_PER_GRID_PAGE = 8; // Jumlah artikel di grid per halaman (setelah carousel)

// --- DATA DUMMY ARTIKEL BERITA ---
const dummyNewsData = [
  {
    id: 1,
    title: { rendered: "The Future of AI: Trends to Watch in 2025" },
    excerpt: {
      rendered:
        "<p>An in-depth look at upcoming AI innovations, machine learning advancements, and their potential impact across industries worldwide this coming year.</p>",
    },
    content: { rendered: "Full content about AI trends..." },
    link: "#article1",
    date: new Date(2025, 4, 23, 10, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,AI&sig=1",
        },
      ],
    },
  },
  {
    id: 2,
    title: { rendered: "Revolutionizing Renewable Energy: New Battery Tech" },
    excerpt: {
      rendered:
        "<p>Breakthroughs in battery storage are set to change the renewable energy landscape, making green power more reliable and accessible than ever before.</p>",
    },
    content: { rendered: "Full content about battery tech..." },
    link: "#article2",
    date: new Date(2025, 4, 22, 14, 30, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,battery&sig=2",
        },
      ],
    },
  },
  {
    id: 3,
    title: {
      rendered: "Cybersecurity in the Quantum Era: Preparing for Threats",
    },
    excerpt: {
      rendered:
        "<p>As quantum computing emerges, experts discuss the new wave of cybersecurity challenges and how organizations can prepare for post-quantum cryptography.</p>",
    },
    content: { rendered: "Full content about quantum cybersecurity..." },
    link: "#article3",
    date: new Date(2025, 4, 21, 9, 15, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,security&sig=3",
        },
      ],
    },
  },
  {
    id: 4,
    title: { rendered: "The Rise of Metaverse: Beyond Gaming" },
    excerpt: {
      rendered:
        "<p>Exploring how metaverse technologies are expanding beyond entertainment into work, education, and social interaction with new virtual environments.</p>",
    },
    content: { rendered: "Full content about metaverse applications..." },
    link: "#article4",
    date: new Date(2025, 4, 20, 16, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,metaverse&sig=4",
        },
      ],
    },
  },
  {
    id: 5,
    title: { rendered: "Sustainable Tech: Innovations for a Greener Planet" },
    excerpt: {
      rendered:
        "<p>Highlighting new green technologies and sustainable practices in the tech industry aimed at reducing carbon footprint and promoting environmental health.</p>",
    },
    content: { rendered: "Full content about sustainable tech..." },
    link: "#article5",
    date: new Date(2025, 4, 19, 11, 45, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,green&sig=5",
        },
      ],
    },
  },
  {
    id: 6,
    title: { rendered: "Next-Gen Wearables: Health Monitoring Reimagined" },
    excerpt: {
      rendered:
        "<p>The latest wearable devices are offering more sophisticated health tracking, from continuous glucose monitoring to advanced sleep pattern analysis.</p>",
    },
    content: { rendered: "Full content about next-gen wearables..." },
    link: "#article6",
    date: new Date(2025, 4, 18, 13, 20, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,wearable&sig=6",
        },
      ],
    },
  },
  {
    id: 7,
    title: {
      rendered: "Exploring the Potential of Blockchain in Supply Chains",
    },
    excerpt: {
      rendered:
        "<p>How blockchain technology can bring transparency, efficiency, and security to global supply chain management systems.</p>",
    },
    content: { rendered: "Full content about blockchain in supply chains..." },
    link: "#article7",
    date: new Date(2025, 4, 17, 10, 50, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,blockchain&sig=7",
        },
      ],
    },
  },
  {
    id: 8,
    title: { rendered: "The Evolution of Space Tourism: What's Next?" },
    excerpt: {
      rendered:
        "<p>With several successful missions, space tourism is becoming a reality. A look at the companies leading the charge and future prospects.</p>",
    },
    content: { rendered: "Full content about space tourism..." },
    link: "#article8",
    date: new Date(2025, 4, 16, 17, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,space&sig=8",
        },
      ],
    },
  },
  {
    id: 9,
    title: {
      rendered: "Advancements in 6G Technology: The Next Wireless Frontier",
    },
    excerpt: {
      rendered:
        "<p>Researchers are already laying the groundwork for 6G, promising even faster speeds, lower latency, and ubiquitous connectivity.</p>",
    },
    content: { rendered: "Full content about 6G technology..." },
    link: "#article9",
    date: new Date(2025, 4, 15, 8, 30, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,6g&sig=9",
        },
      ],
    },
  },
  {
    id: 10,
    title: {
      rendered:
        "Ethical AI: Navigating the Moral Landscape of Intelligent Machines",
    },
    excerpt: {
      rendered:
        "<p>A deep dive into the ethical considerations surrounding artificial intelligence development and deployment, from bias to autonomy.</p>",
    },
    content: { rendered: "Full content about ethical AI..." },
    link: "#article10",
    date: new Date(2025, 4, 14, 12, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,ethics&sig=10",
        },
      ],
    },
  },
  {
    id: 11,
    title: {
      rendered: "Smart Cities: How Technology is Reshaping Urban Living",
    },
    excerpt: {
      rendered:
        "<p>Examining the role of IoT, AI, and big data in creating more efficient, sustainable, and livable urban environments for the future.</p>",
    },
    content: { rendered: "Full content about smart cities..." },
    link: "#article11",
    date: new Date(2025, 4, 13, 15, 15, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,city&sig=11",
        },
      ],
    },
  },
  {
    id: 12,
    title: {
      rendered: "The Future of Work: Remote Collaboration Tools Evolve",
    },
    excerpt: {
      rendered:
        "<p>How new virtual and augmented reality tools are set to enhance remote work and team collaboration in a post-pandemic world.</p>",
    },
    content: { rendered: "Full content about remote work tools..." },
    link: "#article12",
    date: new Date(2025, 4, 12, 11, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,work&sig=12",
        },
      ],
    },
  },
  {
    id: 13,
    title: { rendered: "Personalized Medicine: AI's Role in Healthcare" },
    excerpt: {
      rendered:
        "<p>Artificial intelligence is analyzing vast medical datasets to tailor treatments and diagnostics to individual patients, heralding a new era of healthcare.</p>",
    },
    content: { rendered: "Full content about AI in healthcare..." },
    link: "#article13",
    date: new Date(2025, 4, 11, 9, 45, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,medical&sig=13",
        },
      ],
    },
  },
  {
    id: 14,
    title: {
      rendered: "EdTech Innovations: Transforming Learning for All Ages",
    },
    excerpt: {
      rendered:
        "<p>From K-12 to corporate training, educational technology continues to evolve with adaptive learning platforms and immersive content.</p>",
    },
    content: { rendered: "Full content about EdTech..." },
    link: "#article14",
    date: new Date(2025, 4, 10, 14, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,education&sig=14",
        },
      ],
    },
  },
  {
    id: 15,
    title: { rendered: "Drone Delivery Systems: Taking to the Skies" },
    excerpt: {
      rendered:
        "<p>Several companies are piloting drone delivery services for packages and medical supplies, overcoming regulatory and logistical hurdles.</p>",
    },
    content: { rendered: "Full content about drone delivery..." },
    link: "#article15",
    date: new Date(2025, 4, 9, 16, 30, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,drone&sig=15",
        },
      ],
    },
  },
  {
    id: 16,
    title: { rendered: "The Creator Economy: New Tools for Digital Content" },
    excerpt: {
      rendered:
        "<p>Platforms and tools are empowering individual creators to build audiences and monetize their content in innovative ways.</p>",
    },
    content: { rendered: "Full content about creator economy..." },
    link: "#article16",
    date: new Date(2025, 4, 8, 10, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,creator&sig=16",
        },
      ],
    },
  },
  {
    id: 17,
    title: { rendered: "Gaming on the Go: The Rise of Cloud Gaming Platforms" },
    excerpt: {
      rendered:
        "<p>Cloud gaming services are making high-end gaming accessible on various devices without requiring powerful hardware.</p>",
    },
    content: { rendered: "Full content about cloud gaming..." },
    link: "#article17",
    date: new Date(2025, 4, 7, 13, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,gaming&sig=17",
        },
      ],
    },
  },
  {
    id: 18,
    title: { rendered: "AI in Art and Music: Creative Collaborations" },
    excerpt: {
      rendered:
        "<p>Artificial intelligence is not just a tool but also a collaborator in creating new forms of art, music, and literature.</p>",
    },
    content: { rendered: "Full content about AI in arts..." },
    link: "#article18",
    date: new Date(2025, 4, 6, 15, 30, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,art&sig=18",
        },
      ],
    },
  },
  {
    id: 19,
    title: {
      rendered: "Robotics in Manufacturing: The Next Level of Automation",
    },
    excerpt: {
      rendered:
        "<p>Advanced robotics and cobots are transforming factory floors, increasing efficiency, and enabling new manufacturing processes.</p>",
    },
    content: { rendered: "Full content about robotics..." },
    link: "#article19",
    date: new Date(2025, 4, 5, 9, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,robotics&sig=19",
        },
      ],
    },
  },
  {
    id: 20,
    title: {
      rendered: "Data Privacy in a Connected World: Challenges and Solutions",
    },
    excerpt: {
      rendered:
        "<p>As more devices get connected, ensuring data privacy and security becomes paramount. Exploring new regulations and technologies.</p>",
    },
    content: { rendered: "Full content about data privacy..." },
    link: "#article20",
    date: new Date(2025, 4, 4, 17, 0, 0).toISOString(),
    _embedded: {
      "wp:featuredmedia": [
        {
          source_url:
            "https://source.unsplash.com/random/500x300?technology,privacy&sig=20",
        },
      ],
    },
  },
];
// --- AKHIR DATA DUMMY ---

let currentGeneralNewsOffset = 0; // Untuk melacak item berikutnya di dummy data untuk berita umum
let currentSearchOffset = 0; // Untuk melacak item berikutnya di hasil pencarian dummy data
// displayedImageUrls, currentSearchTerm, dll. tetap sama

// Variabel DOM tetap sama
const carouselItemsContainer = document.getElementById("carouselItems");
const cardGridContainer = document.getElementById("cardGrid");
const searchInput = document.getElementById("globalSearchInput");
const navSearchForm = document.getElementById("navSearchFormGlobal");
const noResultsMessage = document.getElementById("noResultsMessageTeknologi");
const loadMoreButton = document.getElementById("loadMoreButton");
const heroCarouselWrapper = document.querySelector(".hero-carousel-wrapper");
const descriptionTextElement = document.querySelector(".description-text");

// Fungsi formatTimeAgo dan createCardElement TETAP SAMA seperti versi sebelumnya
function formatTimeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const secondsPast = Math.floor((now.getTime() - past.getTime()) / 1000);
  if (secondsPast < 60) return "Just now";
  const minutesPast = Math.floor(secondsPast / 60);
  if (minutesPast < 60)
    return `about ${minutesPast} minute${minutesPast === 1 ? "" : "s"} ago`;
  const hoursPast = Math.floor(minutesPast / 60);
  if (hoursPast < 24)
    return `about ${hoursPast} hour${hoursPast === 1 ? "" : "s"} ago`;
  const daysPast = Math.floor(hoursPast / 24);
  if (daysPast === 1) return "Yesterday";
  if (daysPast < 7)
    return `about ${daysPast} day${daysPast === 1 ? "" : "s"} ago`;
  return past.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function createCardElement(post) {
  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    `https://via.placeholder.com/500x300/2c3e50/e0e0e0?text=No+Image`;
  const title = post.title.rendered;
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = post.excerpt.rendered;
  const textExcerpt = tempDiv.textContent || tempDiv.innerText || "";
  const excerpt =
    textExcerpt.substring(0, 100) + (textExcerpt.length > 100 ? "..." : "");
  const link = post.link;
  const timeAgo = formatTimeAgo(post.date);
  const cardColumn = document.createElement("div");
  cardColumn.className = "col";
  const cardAnchor = document.createElement("a");
  cardAnchor.href = link;
  cardAnchor.target = "_blank"; // Tetap buka di tab baru jika linknya eksternal (meskipun dummy '#' saat ini)
  cardAnchor.className = "text-decoration-none";
  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100 bg-dark text-white rounded-4";
  cardDiv.innerHTML = `
        <img src="${imageUrl}" class="card-img-top rounded-top-4" alt="${title}" loading="lazy"/>
        <div class="card-body p-3 d-flex flex-column">
            <p class="card-text news-title fw-semibold mb-2">${title}</p>
            <p class="card-text-excerpt mb-2">${excerpt}</p>
            <p class="text-white small mt-auto mb-0 time-ago">${timeAgo}</p>
        </div>
    `;
  cardAnchor.appendChild(cardDiv);
  cardColumn.appendChild(cardAnchor);
  return cardColumn;
}

// Fungsi renderInitialCarousel, showLoadingIndicator, restoreCardGridClass TETAP SAMA
function renderInitialCarousel(posts) {
  if (!carouselItemsContainer || !heroCarouselWrapper) return;
  carouselItemsContainer.innerHTML = "";
  posts.slice(0, POSTS_FOR_CAROUSEL).forEach((post, index) => {
    // Gunakan konstanta
    const imageUrl =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
      `https://via.placeholder.com/900x500/2c3e50/e0e0e0?text=No+Image`;
    const title = post.title.rendered;
    const link = post.link;
    const timeAgo = formatTimeAgo(post.date);
    const carouselItemAnchor = document.createElement("a");
    carouselItemAnchor.href = link;
    carouselItemAnchor.target = "_blank";
    carouselItemAnchor.className = "text-decoration-none";
    const carouselItemDiv = document.createElement("div");
    carouselItemDiv.className = `carousel-item ${
      index === 0 ? "active" : ""
    } h-100 position-relative`;
    carouselItemDiv.innerHTML = `
            <img src="${imageUrl}" class="d-block w-100 h-100 object-fit-cover" alt="${title}" loading="lazy"/>
            <div class="card-img-overlay d-flex flex-column justify-content-end align-items-start p-3 gradient-overlay">
                <h5 class="text-white mb-2 fw-semibold">${title}</h5>
                <p class="text-white small m-0">${timeAgo}</p>
            </div>
        `;
    carouselItemAnchor.appendChild(carouselItemDiv);
    carouselItemsContainer.appendChild(carouselItemAnchor);
  });
  if (heroCarouselWrapper) heroCarouselWrapper.style.display = "block";
  if (descriptionTextElement) descriptionTextElement.style.display = "block";
}

function showLoadingIndicator(message) {
  if (cardGridContainer) {
    cardGridContainer.className = "row card-grid-loading";
    cardGridContainer.innerHTML = `
      <div class="col-12">
        <div class="loading-indicator-content">
          <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 loading-indicator-text">${message}</p>
        </div>
      </div>`;
  }
  if (noResultsMessage) noResultsMessage.style.display = "none";
}

function restoreCardGridClass() {
  if (cardGridContainer) {
    cardGridContainer.className =
      "row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4";
  }
}

// --- FUNGSI displayPostsInGrid DIMODIFIKASI untuk logika duplikasi gambar saat search ---
function displayPostsInGrid(posts, append = false) {
  if (!cardGridContainer) return;

  if (!append) {
    restoreCardGridClass();
    cardGridContainer.innerHTML = "";
    if (currentSearchTerm) {
      displayedImageUrls.clear();
    }
  }

  if (posts.length === 0 && !append && currentSearchTerm) {
    if (noResultsMessage) noResultsMessage.style.display = "block";
  } else {
    if (noResultsMessage) noResultsMessage.style.display = "none";
  }

  const defaultNoImagePlaceholder = `https://via.placeholder.com/500x300/2c3e50/e0e0e0?text=No+Image`;

  posts.forEach((post) => {
    const originalImageUrl =
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
    let imageUrlToUse = originalImageUrl || defaultNoImagePlaceholder;

    if (currentSearchTerm && originalImageUrl) {
      if (displayedImageUrls.has(originalImageUrl)) {
        console.log(
          `Skipping article "${post.title.rendered}" due to duplicate image in search: ${originalImageUrl}`
        );
        return;
      }
      displayedImageUrls.add(originalImageUrl);
    }

    // Untuk createCardElement, kita sudah memproses imageUrl, jadi kita buat objek post sementara
    // atau modifikasi createCardElement untuk menerima imageUrl secara eksplisit.
    // Untuk kesederhanaan, kita buat objek sementara untuk dikirim ke createCardElement
    // jika imageUrl diubah.
    let postForCard = post;
    if (imageUrlToUse !== originalImageUrl) {
      // Jika imageUrl diubah (menjadi placeholder atau default)
      postForCard = {
        ...post,
        _embedded: {
          // Buat ulang struktur _embedded
          ...(post._embedded || {}),
          "wp:featuredmedia": [{ source_url: imageUrlToUse }],
        },
      };
    }

    const cardElement = createCardElement(postForCard);
    cardGridContainer.appendChild(cardElement);
  });
}
// --- AKHIR MODIFIKASI displayPostsInGrid ---

// --- FUNGSI fetchNews DIHAPUS KARENA MENGGUNAKAN DATA DUMMY ---

// --- FUNGSI loadInitialView DIMODIFIKASI TOTAL ---
function loadInitialView() {
  currentSearchTerm = "";
  if (searchInput) searchInput.value = "";
  currentGeneralNewsOffset = 0; // Reset offset untuk data dummy berita umum
  displayedImageUrls.clear(); // Bersihkan juga ini saat kembali ke tampilan awal

  showLoadingIndicator("Processing articles..."); // Ubah pesan loading

  // Simulasi jeda singkat untuk efek loading jika diinginkan
  setTimeout(() => {
    if (heroCarouselWrapper) heroCarouselWrapper.style.display = "block";
    if (descriptionTextElement) descriptionTextElement.style.display = "block";
    if (carouselItemsContainer) carouselItemsContainer.innerHTML = "";

    const initialPostsForCarousel = dummyNewsData.slice(0, POSTS_FOR_CAROUSEL);
    const initialPostsForGrid = dummyNewsData.slice(
      POSTS_FOR_CAROUSEL,
      POSTS_FOR_CAROUSEL + POSTS_PER_GRID_PAGE
    );
    currentGeneralNewsOffset = POSTS_FOR_CAROUSEL + initialPostsForGrid.length;

    if (initialPostsForCarousel.length > 0) {
      renderInitialCarousel(initialPostsForCarousel);
    } else {
      if (heroCarouselWrapper && carouselItemsContainer)
        carouselItemsContainer.innerHTML =
          "<p class='text-danger text-center p-3'>No news for carousel.</p>";
    }

    displayPostsInGrid(initialPostsForGrid, false);

    if (loadMoreButton) {
      loadMoreButton.textContent = "Load More";
      loadMoreButton.style.display =
        currentGeneralNewsOffset < dummyNewsData.length ? "block" : "none";
      loadMoreButton.disabled = false;
    }
    // Hapus loading indicator jika masih ada (seharusnya sudah terhapus oleh displayPostsInGrid)
    if (cardGridContainer.classList.contains("card-grid-loading")) {
      restoreCardGridClass();
      if (initialPostsForGrid.length === 0 && !currentSearchTerm) {
        // Jika grid kosong setelah load awal
        cardGridContainer.innerHTML =
          "<p class='text-center p-3 col-12'>No more news articles available.</p>";
      }
    }
  }, 200); // Jeda 200ms untuk simulasi processing
}
// --- AKHIR MODIFIKASI loadInitialView ---

// --- FUNGSI performSearchQuery DIMODIFIKASI TOTAL ---
function performSearchQuery(term) {
  const searchTermForFilter = term.toLowerCase().trim();
  currentSearchTerm = searchTermForFilter;
  currentSearchOffset = 0; // Reset offset untuk data dummy hasil pencarian

  if (heroCarouselWrapper) heroCarouselWrapper.style.display = "none";
  if (descriptionTextElement) descriptionTextElement.style.display = "none";

  if (!currentSearchTerm) {
    loadInitialView();
    return;
  }

  showLoadingIndicator("Searching for articles...");
  // displayedImageUrls akan di-clear oleh displayPostsInGrid saat !append dan currentSearchTerm aktif

  // Simulasi jeda singkat
  setTimeout(() => {
    const allMatchingPosts = dummyNewsData.filter((post) => {
      const title = post.title.rendered.toLowerCase();
      const excerpt = post.excerpt.rendered.toLowerCase() || ""; // Ambil excerpt untuk search
      const content = post.content.rendered.toLowerCase() || ""; // Ambil content untuk search
      return (
        title.includes(searchTermForFilter) ||
        excerpt.includes(searchTermForFilter) ||
        content.includes(searchTermForFilter)
      );
    });

    const resultsToShow = allMatchingPosts.slice(0, POSTS_PER_GRID_PAGE); // Tampilkan batch pertama hasil search
    currentSearchOffset = resultsToShow.length;

    displayPostsInGrid(resultsToShow, false);

    if (loadMoreButton) {
      loadMoreButton.textContent = "Load More Results";
      loadMoreButton.style.display =
        currentSearchOffset < allMatchingPosts.length ? "block" : "none";
      loadMoreButton.disabled = false;
    }
  }, 200);
}
// --- AKHIR MODIFIKASI performSearchQuery ---

if (navSearchForm) {
  navSearchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (searchInput) {
      performSearchQuery(searchInput.value);
    }
  });
}

if (searchInput) {
  let searchDebounceTimer;
  searchInput.addEventListener("input", function (event) {
    clearTimeout(searchDebounceTimer);
    const searchTermValue = event.target.value.trim();
    if (searchTermValue === "" && currentSearchTerm !== "") {
      searchDebounceTimer = setTimeout(() => {
        performSearchQuery("");
      }, 500);
    }
  });
}

// --- EVENT LISTENER loadMoreButton DIMODIFIKASI TOTAL ---
if (loadMoreButton) {
  loadMoreButton.addEventListener("click", async function () {
    loadMoreButton.disabled = true;
    loadMoreButton.textContent = "Loading...";

    // Simulasi jeda singkat
    setTimeout(() => {
      let postsToAppend = [];
      let totalAvailableAfterCurrentBatch;

      if (currentSearchTerm) {
        // Mode pencarian
        const allMatchingPosts = dummyNewsData.filter((post) => {
          // Filter ulang semua dummy data
          const title = post.title.rendered.toLowerCase();
          const excerpt = post.excerpt.rendered.toLowerCase() || "";
          const content = post.content.rendered.toLowerCase() || "";
          return (
            title.includes(currentSearchTerm) ||
            excerpt.includes(currentSearchTerm) ||
            content.includes(currentSearchTerm)
          );
        });
        postsToAppend = allMatchingPosts.slice(
          currentSearchOffset,
          currentSearchOffset + POSTS_PER_GRID_PAGE
        );
        currentSearchOffset += postsToAppend.length;
        totalAvailableAfterCurrentBatch = allMatchingPosts.length;
      } else {
        // Mode berita umum
        postsToAppend = dummyNewsData.slice(
          currentGeneralNewsOffset,
          currentGeneralNewsOffset + POSTS_PER_GRID_PAGE
        );
        currentGeneralNewsOffset += postsToAppend.length;
        totalAvailableAfterCurrentBatch = dummyNewsData.length;
      }

      if (postsToAppend.length > 0) {
        restoreCardGridClass();
        displayPostsInGrid(postsToAppend, true);
      }

      loadMoreButton.disabled = false;
      const currentOffset = currentSearchTerm
        ? currentSearchOffset
        : currentGeneralNewsOffset;
      if (currentOffset >= totalAvailableAfterCurrentBatch) {
        loadMoreButton.style.display = "none";
        loadMoreButton.textContent = currentSearchTerm
          ? "No More Results"
          : "No More News";
      } else {
        loadMoreButton.style.display = "block";
        loadMoreButton.textContent = currentSearchTerm
          ? "Load More Results"
          : "Load More";
      }
    }, 200);
  });
}
// --- AKHIR MODIFIKASI EVENT LISTENER loadMoreButton ---

document.addEventListener("DOMContentLoaded", () => {
  if (!searchInput)
    console.warn("Element with ID 'globalSearchInput' not found.");
  if (!navSearchForm)
    console.warn("Element with ID 'navSearchFormGlobal' not found.");
  if (!noResultsMessage)
    console.warn("Element with ID 'noResultsMessageTeknologi' not found.");
  if (!heroCarouselWrapper)
    console.warn("Element with class '.hero-carousel-wrapper' not found.");
  if (!descriptionTextElement)
    console.warn("Element with class '.description-text' not found.");

  loadInitialView();
});
