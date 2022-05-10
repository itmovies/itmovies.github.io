var swiper = new Swiper(".home", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });

  var swiper = new Swiper(".letest-container", {
    effect: "coverflow",
    // spaceBetween:10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
  });
  
// comming soon//
  var swiper = new Swiper(".comming-soon", {
    effect: "coverflow",
    // spaceBetween:10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
  });

  // tv shows
  var swiper = new Swiper(".tv-container", {
    effect: "coverflow",
    // spaceBetween:10,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
  });
// watch button click//

// prelaer//
let loader = document.querySelector(".preloader");
function preloader(){
  loader.style.display="none";
}
preloader();

// -----------------nav bar----------------///

  // movies object (movies)//

  const movies = {
    data:[
      {
        img:"media/movies/letest/How I Became a Superhero 2021.png",
        movieName :"How I Became a Superhero",
        rattingNumber:"5.8",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"1200",
        cate:"adventure",
      },
      {
        img:"media/movies/letest/Army of Thieves 2021.png",
        movieName :"Army of Thieves",
        rattingNumber:"6.4",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"1200",
        cate:"adventure",
      },
      {
        img:"media/movies/letest/Free Guy 2021.png",
        movieName :"Free Guy",
        rattingNumber:"7.2",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"1200",
        cate:"comedy",
      },
      {
        img:"media/movies/letest/Kate 2021.png",
        movieName :"Kate",
        rattingNumber:"6.2",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"1200",
        cate:"action",
      },
      {
        img:"media/movies/letest/Red Notice.png",
        movieName :"Red Notice",
        rattingNumber:"6.4",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"1200",
        cate:"comedy",
      },
      {
        img:"media/movies/letest/thor.png",
        movieName :"Thor Ragnarok",
        rattingNumber:"7.9",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"6600",
        seeIcon:"icofont-eye-alt",
        seeNo:"7000",
        dwIcon:"icofont-download",
        dwNo:"3667",
        cate:"action",
      },
      {
        img:"media/movies/letest/9.png",
        movieName :"sing 2",
        rattingNumber:"7.5",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"3550",
        seeIcon:"icofont-eye-alt",
        seeNo:"4400",
        dwIcon:"icofont-download",
        dwNo:"2200",
        cate:"adventure",
      },
      {
        img:"media/movies/letest/l-11.png",
        movieName :"nobody",
        rattingNumber:"7.4",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"2000",
        seeIcon:"icofont-eye-alt",
        seeNo:"3600",
        dwIcon:"icofont-download",
        dwNo:"1800",
        cate:"action",
      },
      {
        img:"media/movies/letest/l-6.png",
        movieName :"fireheart",
        rattingNumber:"6.2",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"2000",
        seeIcon:"icofont-eye-alt",
        seeNo:"2600",
        dwIcon:"icofont-download",
        dwNo:"700",
        cate:"adventure",
      },
      {
        img:"media/movies/letest/6.png",
        movieName :"The Amityville Harvest ",
        rattingNumber:"2.5",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"300",
        seeIcon:"icofont-eye-alt",
        seeNo:"500",
        dwIcon:"icofont-download",
        dwNo:"200",
        cate:"horror",
      },
      {
        img:"media/movies/letest/13.png",
        movieName :"Escape Room 2",
        rattingNumber:"5.7",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"1200",
        seeIcon:"icofont-eye-alt",
        seeNo:"2200",
        dwIcon:"icofont-download",
        dwNo:"1000",
        cate:"horror",
      },
      {
        img:"media/movies/letest/10.png",
        movieName :"fortress",
        rattingNumber:"3.5",
        rattingicon:"icofont-star",
        likeIcon:"icofont-like",
        likeNo:"800",
        seeIcon:"icofont-eye-alt",
        seeNo:"1200",
        dwIcon:"icofont-download",
        dwNo:"300",
        cate:"drama",
      },
    ]
  }

  // movie card//
  function movieCards(){
    for(i of movies.data){
      let cardWrapper = document.querySelector(".movie-wrapper");
    let card = document.createElement("div");
    card.classList.add("movie-card",i.cate,"display");
    let img = document.createElement("div");
    img.classList.add("img");
    card.appendChild(img);
    let cardImg = document.createElement("img");
    cardImg.setAttribute("src",i.img);
    img.appendChild(cardImg);
    let dwBtn = document.createElement("div");
    dwBtn.classList.add("dw-btn");
    let playIcon = document.createElement("i");
    playIcon.classList.add("icofont-ui-play");
    dwBtn.appendChild(playIcon);
    img.appendChild(dwBtn);
    // card info//
    let cardInfo= document.createElement("div");
    card.appendChild(cardInfo);
    cardInfo.classList.add("movie-card-info");
    let nameRatting = document.createElement("div");
    nameRatting.classList.add("name-ratting");
    cardInfo.appendChild(nameRatting)
    let moviename = document.createElement("p");
    moviename.classList.add("movie-name");
    moviename.innerText=i.movieName;
    nameRatting.appendChild(moviename);
    let ratting = document.createElement("div");
    ratting.classList.add("ratting");
    let ratIcon = document.createElement("i");
    ratIcon.classList.add(i.rattingicon);
    ratting.appendChild(ratIcon)
    let ratNumber = document.createElement("p");
    ratNumber.innerText = i.rattingNumber;
    ratting.appendChild(ratNumber);
    nameRatting.appendChild(ratting);
    let customerReview= document.createElement("div");
    customerReview.classList.add("customer-review");
    cardInfo.appendChild(customerReview);
    let like = document.createElement("div")
    like.classList.add("like");
    customerReview.appendChild(like);
    let likeIcon = document.createElement("i");
    likeIcon.classList.add("icofont-like");
    like.appendChild(likeIcon);
    let likeNum = document.createElement("p");
    likeNum.innerText=i.likeNo;
    like.appendChild(likeNum);
    let see = document.createElement("div");
    see.classList.add("see");
    customerReview.appendChild(see);
    let seeIcon = document.createElement("i");
    seeIcon.classList.add(i.seeIcon);
    see.appendChild(seeIcon);
    let seeNum = document.createElement("p");
    seeNum.innerText = i.seeNo;
    see.appendChild(seeNum);

    let download = document.createElement("div");
    download.classList.add("dw");
    customerReview.appendChild(download);
    let dwIcon  = document.createElement("i");
    dwIcon.classList.add(i.dwIcon);
    download.appendChild(dwIcon);
    let dwNum = document.createElement("p");
    dwNum.innerText = i.dwNo;
    download.appendChild(dwNum);
    cardWrapper.appendChild(card);
  }
  }

  movieCards()

function filterFunction(value){
  let filterBtn = document.querySelectorAll(".btn-filter");
  let card = document.querySelectorAll(".movie-card");
  filterBtn.forEach((btn)=>{
    if(btn.innerText.toUpperCase()==value.toUpperCase()){
      btn.classList.add("btnActive");
    }else{
      btn.classList.remove("btnActive");
    }
  })
  card.forEach((cardItem,index)=>{
    if(value=="all"){
      card[index].classList.remove("display")
    }else{
      if(card[index].classList.contains(value)){
      card[index].classList.remove("display")
      }else{
      card[index].classList.add("display")
      }
    }
  })
}
let searchBtn = document.querySelector(".searchbtn");
searchBtn.addEventListener("click",()=>{
  let searchbox = document.querySelector(".movieSearcher");
  let searchValue = searchbox.value;
  let searchUppercase = searchValue.toUpperCase();
  let movieNames = document.querySelectorAll(".movie-name");
  movieNames.forEach((movieNAme,index)=>{
    let movieUpppercase = movieNAme.textContent.toUpperCase();
    let movieCards = document.querySelectorAll(".movie-card");
    if(movieUpppercase.includes(searchUppercase)){
      movieCards[index].classList.remove("display");
    }else{
      movieCards[index].classList.add("display");
    }
  })
  document.querySelector(".movieSearcher").value = "";
})
let searchbox = document.querySelector(".movieSearcher");
searchbox.addEventListener("keyup",()=>{
  let movieCards = document.querySelectorAll(".movie-card");
  movieCards.forEach((cards)=>{
    cards.classList.remove("display");
    
  })
})
window.onload = () =>{
  filterFunction("all");
}



// scroll//


let scroll = document.querySelector(".scroll");
window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop>50||document.body.scrollTop>50){
    scroll.style.display="block";
  }else{
    scroll.style.display="none";
  }
  scroll.addEventListener("click",()=>{
    window.scrollTo({
      top:"0",
      behavior:"smooth",  
    })
  })
})


// navbar color//
window.addEventListener("scroll",()=>{
  if(document.documentElement.scrollTop>30||document.body.scrollTop>30){
    console.log("ll")
    document.querySelector("header").style.background= 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8))';
    document.querySelector("header").style.backdropFilter="blur(10px)";
  }else{
    document.querySelector("header").style.background="";
    document.querySelector("header").style.backdropFilter="blur(0px)";


  }
})