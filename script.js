const header = document.getElementById("header"),
      title = document.getElementById('title'),
      excerpt = document.getElementById("excerpt"),
      profile_img = document.getElementById('profile_img'),
      nameDate = document.getElementById('name'),
      date = document.getElementById('date'),
      href = document.getElementById('href'),


    animated_bgs = document.querySelectorAll('.animated-bg'),
    animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getdata, 2000);

function getdata(){
    header.innerHTML = `
    <img src="https://mylaptopguide.com/wp-content/uploads/2019/07/msi-gp65-leopard.jpg" class="card-img-top" alt="Msi" />
    `;

    title.innerHTML = `
    <h5 class="card-title" id="title">Zokirkhon Kotibkhonov</h5>
    `;

    excerpt.innerHTML = '<br><p class="card-excerpt" id="excerpt">Fronted Developer. (html, css, sass, bootsrap, javascript and Reactjs)<br> now I\'m learning more Reactjs and Javascript...</p>';

    profile_img.innerHTML = `
    <img src="https://avatars.githubusercontent.com/u/78657264?v=4" class="card-img-top profile-img" alt="avatar_img">
    `;
    let text;
    if(Math.random() < 0.33){
        text = `<a href="https://www.linkedin.com/in/zokirkhon-kotibkhonov-2997b1202/" class="btn btn-primary">learn more...</a>`
    }
    else if(Math.random() < 0.66){
        text = `<a href="https://github.com/Zokirkhon1002" class="btn btn-primary">learn more...</a>`
    } else {
        text = `<a href="https://t.me/uzdev_namangan" class="btn btn-primary">learn more...</a>` 
    }
    href.innerHTML = text;
    
    nameDate.innerHTML = ` Zokirkhon1002`;
    date.innerHTML = ` Aug 29, 2021`;

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach((bgText) => bgText.classList.remove('animated-bg'));
}
       