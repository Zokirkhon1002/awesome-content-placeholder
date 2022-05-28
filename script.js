const header = document.getElementById("header"),
  title = document.getElementById("title"),
  excerpt = document.getElementById("excerpt"),
  profile_img = document.getElementById("profile_img"),
  nameDate = document.getElementById("name"),
  date = document.getElementById("date"),
  href = document.getElementById("href"),
  animated_bgs = document.querySelectorAll(".animated-bg"),
  animated_bg_texts = document.querySelectorAll(".animated-bg-text"),
  body = document.querySelector("body"),
  mainForCards = document.querySelector(".mainForCards"),
  cards = document.querySelectorAll(".card");


let urlApi = "https://reqres.in/api/users";
let urlApi2 = "https://jsonplaceholder.typicode.com/users";
let urlApi3 =
  "https://pixabay.com/api/?key=19214338-12369d901ffdf94c7ca6f0e59&q=laptop&image_type=photo&pretty=true";

getDataUsers(urlApi, urlApi2, urlApi3);
async function getDataUsers(url, url2, url3) {
  let data = await fetch(url).then((user) => {
    return user;
  });
  let data2 = await fetch(url2).then((user) => {
    return user.json();
  });
  let data3 = await fetch(url3).then((user) => {
    return user.json();
  });
  ({ data, page } = await data.json());
  ({ hits } = data3);
  dataLength(data.length);
  //   console.log(data);
  data2.length = data.length;
  hits.length = data.length;
  //   console.log(data2);
  //   console.log(hits);
  let date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let mixedApi = data.map((_, i) => ({
    id: hits[i].id,
    avatar: _.avatar,
    date:
      date.getDate() -
      i +
      " " +
      (monthNames[date.getMonth() - i]
        ? monthNames[date.getMonth() - i]
        : monthNames[11]) +
      " " +
      (date.getFullYear() - i),
    email: _.email,
    first_name: _.first_name,
    last_name: _.last_name,
    address: data2[i].address,
    phone: data2[i].phone,
    website: data2[i].website,
    img: hits[i].largeImageURL,
    downloads: hits[i].downloads,
    comments: hits[i].comments,
    imageSize: hits[i].imageSize,
    likes: hits[i].likes,
    tags: hits[i].tags,
    views: hits[i].views,
    webformatURL: hits[i].webformatURL,
    learnMore: "https://github.com/Zokirkhon1002/awesome-content-placeholder"
  }));
  console.log(mixedApi);
  setTimeout(() => {
    getdata(mixedApi);
  }, 1500);
}

function dataLength(n = 2) {
  for (let i = 0; i < n; i++) {
    let loader = `
    <div class="card show">
        <div class="card-header animated-bg" id="header">&nbsp;</div>
        <div class="card-content">
          <h3 class="card-title animated-bg animated-bg-text" id="title">
            &nbsp;
          </h3>
          <p class="card-excerpt" id="excerpt">
            &nbsp;
            <span class="animated-bg animated-bg-text">&nbsp;</span>
            <span class="animated-bg animated-bg-text">&nbsp;</span>
            <span class="animated-bg animated-bg-text">&nbsp;</span>
          </p>
          <div class="author">
            <div class="profile-img animated-bg" id="profile_img">&nbsp;</div>
            <div class="author-info">
              <strong class="animated-bg animated-bg-text" id="name"
                >&nbsp;</strong
              >
              <small class="animated-bg animated-bg-text" id="date"
                >&nbsp;</small
              >
            </div>
          </div>
          <div id="href"></div>
        </div>
      </div>`;
    mainForCards.insertAdjacentHTML("beforeend", loader);
  }
}

window.addEventListener("scroll", checkBoxes);

checkBoxes();
function checkBoxes() {
  const scrollingDown = (window.innerHeight / 5) * 3.5;
  cards.forEach((item) => {
    const boxTop = item.getBoundingClientRect().top;
    if (boxTop < scrollingDown) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

function getdata(users) {
  mainForCards.innerHTML = "";
  users.forEach((user) => {
    let newUser = `<div key='${user.id}' class="card show">
      <div class="card-header" id="header" >
          <img src="${user.webformatURL}" class="card-img-top" alt="Msi">
      </div>
      <div class="card-content">
      <p class="card-excerpt1" id="excerpt">#${user.tags.replace(/[,]/gi,"").split(/\s/).join(" #")}</p>
            <h5 class="card-title" id="title">${user.first_name} ${user.last_name}</h5>
            <p class="card-excerpt" id="excerpt">city: ${user.address.city}</p>
            <p class="card-excerpt" id="excerpt">street: ${user.address.street}</p>
            <div class="author">
                <div class="profil-img" id="profile_image">
                   <img src="${user.avatar}" class="card-img-top profile-img" alt="avatar_img">
                </div>
                <div class="author-info">
                    <strong class id="name">${user.email}</strong>
                    <small class id="date">${user.date}</small>
                </div>
            </div>
            <a href="${user.learnMore}" class="btn btn-primary">learn more...</a>
          </div>
  </div>`;
    mainForCards.insertAdjacentHTML("beforeend", newUser);
  });

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bgText) => bgText.classList.remove("animated-bg"));
}


function scrollOff(){
  document.body.style.overflow = "hidden"
}
function scrollOn(){
  document.body.style.overflow = "auto"
}