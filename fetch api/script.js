let contestsData = [];

function fetchContests() {
  let url = "https://kontests.net/api/v1/all";
  let response = fetch(url);
  response
    .then((v) => {
      return v.json();
    })
    .then((v) => {
      contestsData = v;
      console.log(contestsData)
      renderContests(contestsData);
    });
}

function renderContests(data) {
  const cardContainer = document.getElementById("cardContainer");
  let html = "";
  const imageUrls = [
    "https://media.istockphoto.com/id/598178344/vector/contest-banner-hand-lettering.jpg?s=612x612&w=0&k=20&c=d0MXnz1BbHMUa70dNfCtLC8GpBljkVeZD4uZWdoeXcQ=",
    "https://img.freepik.com/free-vector/contest-time-background-with-typography_23-2147904303.jpg?w=2000",
    "https://st.depositphotos.com/1005979/4355/i/600/depositphotos_43550025-stock-photo-contest-word-stars-fireworks-exciting.jpg",
    "https://media.istockphoto.com/id/1266413326/vector/vector-challenge-sign-pop-art-comic-speech-bubble-with-expression-text-competition-bright.jpg?s=612x612&w=0&k=20&c=eYOQaCn7WvMAEo5ZxVHVVQ-pcNT8HZ-yPeTjueuXi28=",
    "https://bloggingwizard.com/wp-content/uploads/2017/08/Social-Media-Contest-Tools-1200x628.png",
    "https://static.mygov.in/rest/s3fs-public/mygov_154201876851553221.jpg",
    "https://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/1125/2019/08/06070016/contest-blog-feature.jpg",
    "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/sales960.png?itok=2vhEdOeD",
    "https://posit.co/wp-content/uploads/2019/04/thumbnail_hu761d2ca3e5fe81d480a616e62c0051ec_121073_2220x0_resize_q75_box.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjcQR7Gci-nqxb4jRsTpc36e2fYBa74Qx8w&usqp=CAU",
    "https://www.lystloc.com/blog/wp-content/uploads/2023/05/10-Best-Sales-Contest-Ideas.webp",
    "https://cdn.w600.comps.canstockphoto.com/contest-yellow-word-text-on-white-clipart_csp24121516.jpg",
    "https://www.shutterstock.com/shutterstock/photos/666769705/display_1500/stock-vector-contest-beautiful-greeting-card-poster-with-calligraphy-black-text-word-gold-fireworks-star-hand-666769705.jpg",
    // Add more image URLs as needed
  ];

  for (item in data) {
    const contest = data[item];
    const imageUrl = imageUrls[item % imageUrls.length]; // Assign an image URL based on the array index

    html += `
                    <div class="card mx-2 my-2 border border-primary" style="width: 22rem;">
                        <img src="${imageUrl}" class="card-img-top" alt="...">
                        <div class="card-body mx-5">
                            <h5 class="card-title">${contest.name}</h5>
                            <p class="card-text">Status is ${contest.status}</p>
                            <p class="card-text">In 24 Hours? ${contest.in_24_hours}</p>
                            <p>Starts at: ${contest.start_time}</p>
                            <p>Ends at: ${contest.end_time}</p>
                            <a href="${contest.url}" class="btn btn-dark my-2">Visit Contest</a>
                        </div>
                    </div>
                `;
  }

  cardContainer.innerHTML = html;
}

function searchContests() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = contestsData.filter((contest) => {
    return contest.name.toLowerCase().includes(searchInput);
  });

  renderContests(filteredData);
}

fetchContests();
